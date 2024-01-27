# Generated by Django 5.0.1 on 2024-01-02 18:10

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='administrateur',
            fields=[
                ('IDadminstrateur', models.AutoField(primary_key=True, serialize=False)),
                ('administraeurEmail', models.EmailField(max_length=254, unique=True)),
                ('administrateurPassword', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('IDclinet', models.AutoField(primary_key=True, serialize=False)),
                ('clientfrstName', models.CharField(max_length=50)),
                ('clientLstName', models.CharField(max_length=50)),
                ('clientEmail', models.EmailField(max_length=254, unique=True)),
                ('clientPassword', models.CharField(max_length=20)),
                ('clientPhoneNumber', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('IDlanguage', models.AutoField(primary_key=True, serialize=False)),
                ('languageName', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='specialty',
            fields=[
                ('IDspecialty', models.AutoField(primary_key=True, serialize=False)),
                ('specialtyName', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='languagesSpoken',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('langueID', models.IntegerField()),
                ('avocatID', models.IntegerField()),
            ],
            options={
                'unique_together': {('langueID', 'avocatID')},
            },
        ),
        migrations.CreateModel(
            name='Lawyer',
            fields=[
                ('IDlawyer', models.AutoField(primary_key=True, serialize=False)),
                ('lawyerfrstName', models.CharField(max_length=50)),
                ('lawyerLstName', models.CharField(max_length=50)),
                ('lawyerEmail', models.EmailField(max_length=254)),
                ('lawyerPassword', models.CharField(max_length=20)),
                ('lawyerPhoneNumber', models.CharField(max_length=30)),
                ('bio', models.TextField()),
                ('locationLatitude', models.FloatField()),
                ('locationLongitude', models.FloatField()),
                ('address', models.CharField(max_length=50)),
                ('etat', models.CharField(max_length=10)),
                ('administrateurFkey', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.administrateur')),
            ],
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('IDexperience', models.AutoField(primary_key=True, serialize=False)),
                ('position', models.CharField(max_length=20)),
                ('Description', models.CharField(max_length=100)),
                ('startDate', models.DateField(verbose_name='experience start Date')),
                ('endDate', models.DateField(verbose_name='ecperience end date')),
                ('avocat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.lawyer')),
            ],
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('IDeducation', models.AutoField(primary_key=True, serialize=False)),
                ('institution', models.CharField(max_length=50)),
                ('Degree', models.CharField(max_length=50)),
                ('graduationYear', models.DateField(verbose_name='education start')),
                ('avocat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.lawyer')),
            ],
        ),
        migrations.CreateModel(
            name='appointment',
            fields=[
                ('IDappointment', models.AutoField(primary_key=True, serialize=False)),
                ('appointmentDate', models.DateTimeField(verbose_name='Appointment Date')),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.client')),
                ('avocat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.lawyer')),
            ],
        ),
        migrations.CreateModel(
            name='review',
            fields=[
                ('IDreview', models.AutoField(primary_key=True, serialize=False)),
                ('rateValue', models.FloatField()),
                ('comment', models.TextField()),
                ('avocat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.lawyer')),
                ('client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.client')),
            ],
        ),
        migrations.CreateModel(
            name='specialize',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('specialiteID', models.IntegerField()),
                ('avocatID', models.IntegerField()),
            ],
            options={
                'unique_together': {('specialiteID', 'avocatID')},
            },
        ),
    ]
