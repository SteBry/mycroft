# Generated by Django 3.0.3 on 2020-04-13 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0014_merge_20200412_2122'),
    ]

    operations = [
        migrations.CreateModel(
            name='Progress',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.PositiveIntegerField(verbose_name='Total')),
                ('current', models.PositiveIntegerField(default=0, verbose_name='Total')),
            ],
        ),
    ]
