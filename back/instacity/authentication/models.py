from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser
from django.utils.translation import gettext_lazy as _
from .managers import CustomAccountManager

class UserAccount(AbstractBaseUser):
    email = models.EmailField(_("email address"), unique=True)
    username = models.CharField(_("username"), max_length=120, unique=True)
    image = models.ImageField(_("image"), upload_to="profile_pics", blank=True, null=True)
    full_name = models.CharField(_("full name"), max_length=255)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    is_superuser = models.BooleanField(_("superuser status"), default=False)


    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "full_name"]

    objects = CustomAccountManager()

    def has_perm(self, perm, obj=None):
        return self.is_staff

    def has_module_perms(self, app_label):
        return self.is_staff

    def __str__(self):
        return self.email

