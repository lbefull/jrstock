# Generated by Django 3.0.1 on 2022-03-16 11:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stock', '0013_daystock'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='daystock',
            options={'managed': False, 'ordering': ['date']},
        ),
    ]