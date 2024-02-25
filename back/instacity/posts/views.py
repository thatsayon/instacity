from django.shortcuts import render
from rest_framework import generics, status, filters
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated 
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from django.shortcuts import get_object_or_404
from track.models import SearchHistory
from .serializers import PostSerializer, CommentSerializer
from .models import Post, Comment, Like

class PostPublishView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer

    def perform_create(self, serializers):
        serializers.save(author=self.request.user)
    
class PostPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

# this view is working to give a list of all post and some other logics
class PostListAPIView(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all().order_by('-id')
    serializer_class = PostSerializer
    pagination_class = PostPagination
    search_fields = ['caption']
    filter_backends = (filters.SearchFilter,)

    def list(self, request, *args, **kwargs):
        search_text = self.request.GET.get('search')
        if search_text:
            instance = SearchHistory.get_or_create_user(request.user)

            instance.add_keyword(search_text)
            print(instance.search_list)
        return super().list(request, *args, **kwargs)

class UserPostListAPIView(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer 
    pagination_class = PostPagination

    def get_queryset(self):
        return Post.objects.filter(author=self.request.user)

class PostDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        post = get_object_or_404(Post, id=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)
    
    def put(self, request, pk):
        post = get_object_or_404(Post, id=pk)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PostDeleteView(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    
    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

class PostLikeView(APIView):
    def post(self, request, post_id):
        post = get_object_or_404(Post, pk=post_id)

        if Like.objects.filter(user=request.user, post=post).exists():
            return Response({'detail': 'You have already liked this post.'}, status=status.HTTP_400_BAD_REQUEST)

        like = Like(user=request.user, post=post)
        like.save()

        post.likes += 1
        post.save()

        return Response({'detail': 'Post liked successfully.'}, status=status.HTTP_200_OK)

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
