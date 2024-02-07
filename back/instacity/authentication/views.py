from rest_framework.authtoken.models import Token
from rest_framework import generics, status 
from rest_framework.views import APIView
from rest_framework.response import Response  
from rest_framework.authentication import TokenAuthentication 
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.hashers import check_password
from .serializers import UserRegistrationSerializer, UserAccountSerializer, UserLoginSerializer, ChangePasswordSerializer
from .models import UserAccount

class UserRegistrationAPIView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            response_data = {
                "message": "User registered successfully",
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
            return Response({'token': token.key})
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
