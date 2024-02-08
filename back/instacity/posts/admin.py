from django.contrib import admin
from .models import Post, Comment

class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'author', 'caption', 'created_at')

admin.site.register(Post, PostAdmin)
admin.site.register(Comment)
