from django.urls import path 
from .views import PostPublishView, CommentCreateAPIView

urlpatterns = [
    path('publish/', PostPublishView.as_view(), name='publish'),
    path('comment/<int:post_id>/', CommentCreateAPIView.as_view(), name='comment'),
]
