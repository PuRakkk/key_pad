# Generated by Django 5.1.2 on 2025-03-21 05:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_remove_branch_br_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='staff',
            name='staff_telegram_username',
            field=models.CharField(max_length=150, null=True, unique=True),
        ),
    ]
