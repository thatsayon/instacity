from django.urls import path 
from . import views

urlpatterns = [
    path('info/', views.ActiveInfo.as_view(), name='active'),
]
