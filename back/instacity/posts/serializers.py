from rest_framework import serializers 
from .models import Post, Comment

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['author', 'image', 'caption', 'created_at']
        read_only_fields = ['author', 'created_at']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment 
        fields = ['post', 'author', 'text', 'created_at']
        read_only_fields = ['post', 'author', 'created_at']
