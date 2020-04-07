# Generated by Django 3.0.3 on 2020-04-07 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_remove_filter_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='filter',
            name='min_frame_rate',
            field=models.IntegerField(blank=True, null=True, verbose_name='Minimum frame Rate'),
        ),
        migrations.AddField(
            model_name='filter',
            name='min_height',
            field=models.IntegerField(blank=True, null=True, verbose_name='Minimum Height'),
        ),
        migrations.AddField(
            model_name='filter',
            name='min_width',
            field=models.IntegerField(blank=True, null=True, verbose_name='Minimum width'),
        ),
    ]