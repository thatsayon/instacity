from django.db import models
from django.contrib.auth import get_user_model 
from phonenumber_field.modelfields import PhoneNumberField

User = get_user_model()

GENDER_CHOICE = [
    ('M', 'Male'),
    ('F', 'Female'),
    ('O', 'Other')
]

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

class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length=256, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICE, blank=True)
    phone_number = PhoneNumberField(blank=True)
    social_links = models.JSONField(blank=True, null=True)

    def __str__(self):
        return f"Profile of {self.user.username}"

class Report(models.Model):
    reporter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reporter')
    report = models.TextField()

    def __str__(self):
        return f"{self.reporter.username}: {self.report}"
