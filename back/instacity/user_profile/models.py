from django.db import models
from django.contrib.auth import get_user_model 

User = get_user_model()

class Follower(models.Model):
    following_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following")
    follower_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='follower')

    def __str__(self):
        return f"{self.following_user.username} is followed by {self.follower_user.username}"
    
    @staticmethod
    def followers_count(user):
        return Follower.objects.filter(following_user=user).count()

    @staticmethod
    def following_count(user):
        return Follower.objects.filter(follower_user=user).count()
