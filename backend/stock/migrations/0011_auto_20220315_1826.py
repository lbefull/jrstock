# Generated by Django 3.0.1 on 2022-03-15 18:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('stock', '0010_auto_20220315_1808'),
    ]

    operations = [
        migrations.AlterField(
            model_name='daystock',
            name='financial_info',
            field=models.ForeignKey(db_column='code_number', null=True, on_delete=django.db.models.deletion.CASCADE, to='stock.FinancialInfo'),
        ),
    ]