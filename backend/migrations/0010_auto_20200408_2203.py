# Generated by Django 3.0.3 on 2020-04-08 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0009_merge_20200408_1250'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='filter',
            name='excluded_cameras',
        ),
        migrations.RemoveField(
            model_name='filter',
            name='included_cameras',
        ),
        migrations.RemoveField(
            model_name='filter',
            name='latitude',
        ),
        migrations.RemoveField(
            model_name='filter',
            name='longitude',
        ),
        migrations.RemoveField(
            model_name='filter',
            name='radius',
        ),
        migrations.AddField(
            model_name='filter',
            name='excluded_clips',
            field=models.ManyToManyField(related_name='excluded_in_filter', to='backend.Clip'),
        ),
        migrations.AddField(
            model_name='filter',
            name='included_clips',
            field=models.ManyToManyField(related_name='included_in_filter', to='backend.Clip'),
        ),
    ]
