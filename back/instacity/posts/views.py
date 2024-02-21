from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated 
from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ModelViewSet
from .serializers import PostSerializer, CommentSerializer
from .models import Post, Comment

class PostPublishView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer

    def perform_create(self, serializers):
        serializers.save(author=self.request.user)
    

class PostPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class PostListAPIView(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all().order_by('-id')
    serializer_class = PostSerializer
    pagination_class = PostPagination

class UserPostListAPIView(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer 
    pagination_class = PostPagination

    def get_queryset(self):
        return Post.objects.filter(author=self.request.user)

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

class CommentListAPIView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CommentSerializer 
    pagination_class = PageNumberPagination 
    pagination_class.page_size = 20 

    def get_queryset(self):
        return Comment.objects.filter(post=self.kwargs['post_id'])
