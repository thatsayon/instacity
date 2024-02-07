from django.urls import path 
from .views import PostPublishView

urlpatterns = [
    path('publish/', PostPublishView.as_view(), name='publish'),
]
