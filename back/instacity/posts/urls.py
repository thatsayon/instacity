from django.urls import path, include
from rest_framework.routers import DefaultRouter 
from . import views

router = DefaultRouter()
router.register(r'list', views.PostListAPIView)
router.register(r'uplist', views.UserPostListAPIView, basename='user_posts')

urlpatterns = [
    path('', include(router.urls)),
    path('publish/', views.PostPublishView.as_view(), name='publish'),
    path('comment/<int:post_id>/', views.CommentCreateAPIView.as_view(), name='comment'),
    path('comment/list/<int:post_id>/', views.CommentListAPIView.as_view(), name='comment-list'),
]
