from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated 
from .serializers import PostSerializer, CommentSerializer

class PostPublishView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer

    def perform_create(self, serializers):
        serializers.save(author=self.request.user)
    

class CommentCreateAPIView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CommentSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user, post_id=self.kwargs['post_id'])

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response({"message": "commented"}, status=status.HTTP_201_CREATED)
