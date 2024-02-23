from django.db import models
from django.contrib.auth import get_user_model 

User = get_user_model()

class SearchHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    search_list = models.JSONField()
