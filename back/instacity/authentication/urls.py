from django.urls import path 
from rest_framework.authtoken.views import obtain_auth_token
from . import views 

urlpatterns = [
    path('register/', views.UserRegistrationAPIView.as_view(), name='user_reg'),
    path('login/', views.UserLoginAPIView.as_view(), name='login'),
    path('logout/', views.UserLogoutAPIView.as_view(), name='logout'),
    path('users/', views.UserAccountListCreateAPIView.as_view(), name='user-list'),
    path('users/<int:pk>/', views.UserAccountDetailAPIView.as_view(), name='user-detail'),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]
