from django.urls import path
from .views import FollowerCreateAPIView

urlpatterns = [
    path('follow/', FollowerCreateAPIView.as_view(), name='follow-create'),
]
