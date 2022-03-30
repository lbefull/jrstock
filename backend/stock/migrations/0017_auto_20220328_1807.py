# Generated by Django 3.0.1 on 2022-03-28 18:07

from django.db import migrations, models
import django.db.models.expressions
import django.db.models.functions.comparison


class Migration(migrations.Migration):

    dependencies = [
        ('stock', '0016_monthstock_weekstock'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='daystockinfo',
            options={'ordering': [django.db.models.expressions.OrderBy(django.db.models.functions.comparison.Cast('market_cap', output_field=models.BigIntegerField()), descending=True)]},
        ),
        migrations.AlterModelOptions(
            name='monthstock',
            options={'managed': False, 'ordering': ['date']},
        ),
        migrations.AlterModelOptions(
            name='weekstock',
            options={'managed': False, 'ordering': ['date']},
        ),
    ]