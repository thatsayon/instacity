from django.urls import path
from . import views

urlpatterns = [
    path('follow/', views.FollowerCreateAPIView.as_view(), name='follow-create'),
    path('profiles/', views.ProfileCreateView.as_view(), name='profile'),
]
