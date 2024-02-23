from django.db import models
from django.contrib.auth import get_user_model 

User = get_user_model()

class SearchHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    search_list = models.JSONField(default=dict)

    @classmethod
    def get_or_create_user(cls, user):
        instance, created = cls.objects.get_or_create(user=user)
        return instance 

    def add_keyword(self, keyword):
        if keyword in self.search_list:
            self.search_list[keyword] += 1
        else:
            self.search_list[keyword] = 1
        self.save()

