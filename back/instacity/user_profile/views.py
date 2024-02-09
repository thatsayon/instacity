from rest_framework import generics
from .models import Follower
from .serializers import FollowerSerializer

class FollowerCreateAPIView(generics.CreateAPIView):
    queryset = Follower.objects.all()
    serializer_class = FollowerSerializer
