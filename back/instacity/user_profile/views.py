from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Follower, Profile
from .serializers import FollowerSerializer, ProfileSerializer

class FollowerCreateAPIView(generics.CreateAPIView):
    queryset = Follower.objects.all()
    serializer_class = FollowerSerializer


class ProfileCreateView(generics.CreateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
