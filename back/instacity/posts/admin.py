from django.contrib import admin
from .models import Post, Comment, Image

class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'author', 'caption', 'created_at')

admin.site.register(Post, PostAdmin)
admin.site.register(Image)
admin.site.register(Comment)
