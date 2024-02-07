from rest_framework import serializers 
from django.contrib.auth import get_user_model, authenticate

User = get_user_model()

class UserAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'full_name', 'is_staff', 'is_active', 'date_joined')

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User 
        fields = ('username', 'email', 'password', 'full_name', 'image')

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            user = authenticate(email=email, password=password)
            if user:
                if not user.is_active:
                    raise serializers.ValidationError("User account is disabled.")
            else:
                raise serializers.ValidationError("Unable to log in with provided credentials.")
        else:
            raise serializers.ValidationError("Must include 'email' and 'password' fields.")

        data['user'] = user
        return data


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
