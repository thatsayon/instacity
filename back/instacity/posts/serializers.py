from rest_framework import serializers 
from .models import Post 

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['author', 'image', 'caption', 'created_at']
        read_only_fields = ['author', 'created_at']
