from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model 

User = get_user_model()

class ActiveInfo(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        active_logins = request.user.active_logins
        serialized_data = [{"ip": login.ip, "time": login.date_time, "user_agent": login.user_agent} for login in active_logins]
        data = {
            "activity": serialized_data
        }
        return Response(data)
