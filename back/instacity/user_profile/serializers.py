from rest_framework import serializers
from .models import Follower, Profile
from django.contrib.auth import get_user_model 

User = get_user_model()

class FollowerSerializer(serializers.ModelSerializer):
    following_user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    follower_user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Follower
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    social_links = serializers.JSONField()

    class Meta:
        model = Profile 
        fields = ['bio', 'gender', 'social_links']

    def perform_create(self, serializer):
        serializer.save(user=self.context['request'].user)
