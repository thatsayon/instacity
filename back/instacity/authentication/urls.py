from django.urls import path 
from . import views 

urlpatterns = [
    path('register/', views.UserRegistrationAPIView.as_view(), name='user_reg'),
    path('login/', views.UserLoginAPIView.as_view(), name='login'),
    path('users/', views.UserAccountListCreateAPIView.as_view(), name='user-list'),
    path('users/<int:pk>/', views.UserAccountDetailAPIView.as_view(), name='user-detail'),
]
