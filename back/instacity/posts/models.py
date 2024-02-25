from django.db import models
from django.contrib.auth import get_user_model 
from django.utils import timezone
from django.dispatch import receiver
from django.db.models.signals import post_save

User = get_user_model()

class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    caption = models.TextField(blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    likes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.caption}"

class Image(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="post_pics/")
    order = models.PositiveIntegerField(blank=True, null=True)

    def __str__(self):
        return f"Image {self.image} for post by {self.post.caption}"

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Comment by {self.author.username} on {self.post}"

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'post',)

@receiver(post_save, sender=Like)
def update_post_likes(sender, instance, created, **kwargs):
    if created:
        instance.post.likes += 1
        instance.save()
