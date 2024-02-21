from rest_framework import serializers 
from .models import Post, Comment, Image
from django.core.files.base import ContentFile
import base64

class Base64ImageField(serializers.ImageField):
    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith('data:image'):
            format, imgstr = data.split(';base64,')
            ext = format.split('/')[-1]
            data = ContentFile(base64.b64decode(imgstr), name=f'temp.{ext}')  
        return super().to_internal_value(data)

class ImageSerializer(serializers.ModelSerializer):
    image = Base64ImageField(max_length=None, use_url=True, required=False)
    class Meta:
        model = Image 
        fields = ['image', 'order']

class PostSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)
    class Meta:
        model = Post 
        fields = ['author', 'images', 'caption', 'created_at']
        read_only_fields = ['author', 'created_at']

    def create(self, validated_data):
        images_data = validated_data.pop('images', [])
        post = Post.objects.create(**validated_data)
        for idx, image_data in enumerate(images_data, start=1):
            Image.objects.create(post=post, order=idx, **image_data)
        return post

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment 
        fields = ['post', 'author', 'text', 'created_at']
        read_only_fields = ['post', 'author', 'created_at']

