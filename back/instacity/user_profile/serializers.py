from rest_framework import serializers
from .models import Follower
from django.contrib.auth import get_user_model 

User = get_user_model()

class FollowerSerializer(serializers.ModelSerializer):
    following_user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    follower_user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Follower
        fields = '__all__'
