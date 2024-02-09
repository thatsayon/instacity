from django.urls import path 
from . import views

urlpatterns = [
    path('publish/', views.PostPublishView.as_view(), name='publish'),
    path('list/', views.PostListAPIView.as_view(), name='list'),
    path('uplist/', views.UserPostListAPIView.as_view(), name='uplist'),
    path('comment/<int:post_id>/', views.CommentCreateAPIView.as_view(), name='comment'),
    path('comment/list/<int:post_id>/', views.CommentListAPIView.as_view(), name='comment-list'),
]
