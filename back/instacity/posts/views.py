from django.shortcuts import render
from rest_framework import generics 
from rest_framework.permissions import IsAuthenticated 
from .serializers import PostSerializer

class PostPublishView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer

    def perform_create(self, serializers):
        serializers.save(author=self.request.user)
    
