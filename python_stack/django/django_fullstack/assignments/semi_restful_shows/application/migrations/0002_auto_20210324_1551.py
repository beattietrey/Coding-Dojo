# Generated by Django 2.2.4 on 2021-03-24 22:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('application', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='show',
            name='description',
            field=models.TextField(default='null', max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='show',
            name='release_date',
            field=models.DateField(default=1898),
        ),
    ]
