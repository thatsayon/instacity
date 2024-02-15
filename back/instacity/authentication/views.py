from rest_framework.authtoken.models import Token
from rest_framework import generics, status 
from rest_framework.views import APIView
from rest_framework.response import Response  
from rest_framework.authentication import TokenAuthentication 
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.hashers import check_password
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth import get_user_model
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.urls import reverse
from django.shortcuts import redirect
from django.template.loader import render_to_string 
from django.core.mail import EmailMultiAlternatives
from .serializers import UserRegistrationSerializer, UserAccountSerializer, UserLoginSerializer, ChangePasswordSerializer
from .models import UserAccount
from .authentication import token_expire_handler, expires_in

User = get_user_model()

class UserRegistrationAPIView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            confirm_link = f"http://127.0.0.1:8000/api/active/{uid}/{token}/"

            email_subject = "Confirm Your Email"
            email_body = render_to_string('confirm_email.html', {'confirm_link': confirm_link})
            email = EmailMultiAlternatives(email_subject, '', to=[user.email])
            email.attach_alternative(email_body, "text/html")
            email.send()

            response_data = {
                "message": "Verification mail sended",
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        else:
            if 'email' in serializer.errors:
                error_response = {
                    "error": "Email already exists"
                }
                return Response(error_response, status=status.HTTP_400_BAD_REQUEST)

            if 'username' in serializer.errors:
                error_response = {
                    "error": "Username already exists"
                }
                return Response(error_response, status=status.HTTP_400_BAD_REQUEST)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

def active(request, uid64, token):
    try:
        uid = urlsafe_base64_decode(uid64).decode()
        user = User._default_manager.get(pk=uid)
    except (User.DoesNotExist):
        user = None

    if user is not None and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        return redirect('http://localhost:5173/Login')
    else:
        return Response({"error": "wrong activation url"}, status=status.HTTP_400_BAD_REQUEST)



class UserAccountListCreateAPIView(generics.ListCreateAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer

class UserAccountDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserAccountSerializer

class UserLoginAPIView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            is_expired, token = token_expire_handler(token) 
            return Response({'token': token.key, 'expires_in': expires_in(token),})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogoutAPIView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.auth.delete()
        return Response({"message": "Logout successful"}, status=status.HTTP_200_OK)

class UserInfoAPIView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user 
        user_info = {
            'username': user.username,
            'email': user.email,
            'full_name': user.full_name,
        }
        if user.image:
            user_info.update({"profile_pic": user.image.url})
        return Response(user_info)

class ChangePasswordView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ChangePasswordSerializer

    def update(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = request.user
        old_password = serializer.validated_data.get('old_password')
        new_password = serializer.validated_data.get('new_password')
        
        if check_password(new_password, user.password):
            return Response({'new_password': ['New password must be different from the old password.']}, status=status.HTTP_400_BAD_REQUEST)
        if not check_password(old_password, user.password):
            return Response({'old_password': ['Wrong password.']}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(new_password)
        user.save()
        return Response({'message': 'Password successfully changed'}, status=status.HTTP_200_OK)
