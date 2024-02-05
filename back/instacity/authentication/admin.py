from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import UserAccount

class CustomUserAdmin(UserAdmin):
    model = UserAccount
    fieldsets = (
        (None, {'fields': ('username', 'email', 'password')}),
        ('Personal info', {'fields': ('full_name',)}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
        ('Important dates', {'fields': ('date_joined',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'full_name', 'password1', 'password2', 'is_active', 'is_staff', 'is_superuser')}
        ),
    )
    list_display = ('username', 'email', 'full_name', 'is_staff', 'is_active', 'date_joined')
    list_filter = ('is_staff', 'is_active')
    search_fields = ('username', 'email', 'full_name')
    ordering = ('email',)
    filter_horizontal = ()

admin.site.register(UserAccount, CustomUserAdmin)



# Register your models here.
