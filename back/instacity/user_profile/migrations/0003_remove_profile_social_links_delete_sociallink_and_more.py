# Generated by Django 5.0.1 on 2024-02-13 03:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0002_sociallink_profile'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='social_links',
        ),
        migrations.DeleteModel(
            name='SocialLink',
        ),
        migrations.AddField(
            model_name='profile',
            name='social_links',
            field=models.JSONField(blank=True, null=True),
        ),
    ]
