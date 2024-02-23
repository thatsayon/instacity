# Generated by Django 5.0.1 on 2024-02-23 04:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_remove_post_image_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='order',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='image',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='posts.post'),
        ),
    ]
