# Generated by Django 3.0.1 on 2022-03-29 11:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('stock', '0017_auto_20220328_1807'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Result',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('asset', models.BigIntegerField()),
                ('test_start_date', models.CharField(max_length=20)),
                ('test_end_date', models.CharField(max_length=20)),
                ('commission', models.FloatField()),
                ('buy_standard', models.IntegerField()),
                ('buy_ratio', models.IntegerField()),
                ('sell_standard', models.IntegerField()),
                ('sell_ratio', models.IntegerField()),
                ('avg_day_earn_rate', models.FloatField(blank=True, null=True)),
                ('avg_year_earn_rate', models.FloatField(blank=True, null=True)),
                ('market_rate', models.FloatField(blank=True, null=True)),
                ('market_over_rate', models.FloatField(blank=True, null=True)),
                ('max_earn', models.BigIntegerField(blank=True, null=True)),
                ('min_earn', models.BigIntegerField(blank=True, null=True)),
                ('max_earn_rate', models.FloatField(blank=True, null=True)),
                ('min_earn_rate', models.FloatField(blank=True, null=True)),
                ('trading_days', models.IntegerField(blank=True, null=True)),
                ('mdd', models.FloatField(blank=True, null=True)),
                ('win_lose_rate', models.FloatField(blank=True, null=True)),
                ('final_asset', models.BigIntegerField(blank=True, null=True)),
                ('final_earn', models.IntegerField(blank=True, null=True)),
                ('final_rate', models.FloatField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('basic_info', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stock.BasicInfo')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='YearHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.CharField(max_length=10)),
                ('year_rate', models.FloatField()),
                ('market_rate', models.FloatField()),
                ('result', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backtest.Result')),
            ],
            options={
                'ordering': ['year'],
            },
        ),
        migrations.CreateModel(
            name='DayHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(max_length=20)),
                ('day_earn_rate', models.FloatField()),
                ('day_earn', models.IntegerField()),
                ('current_asset', models.BigIntegerField()),
                ('result', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backtest.Result')),
            ],
            options={
                'ordering': ['date'],
            },
        ),
        migrations.CreateModel(
            name='ConditionInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isBuy', models.BooleanField()),
                ('buy_sell_option', models.CharField(max_length=50)),
                ('params', models.TextField()),
                ('weight', models.IntegerField()),
                ('result', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backtest.Result')),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='BuySell',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.CharField(max_length=20)),
                ('isBuy', models.BooleanField()),
                ('buy_sell_option', models.TextField()),
                ('company_name', models.CharField(max_length=50)),
                ('company_code', models.CharField(max_length=10)),
                ('stock_amount', models.BigIntegerField()),
                ('stock_price', models.IntegerField()),
                ('current_rate', models.FloatField()),
                ('current_asset', models.BigIntegerField()),
                ('isWin', models.BooleanField(blank=True, null=True)),
                ('result', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backtest.Result')),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
    ]
