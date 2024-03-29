from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import UserAccount 


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = UserAccount 
        fields = ("username", "email", "full_name")


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = UserAccount
        fields = ("username", "email", "full_name")

