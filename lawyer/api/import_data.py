# import_data.py

import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "lawyer.settings")
import django
django.setup()

import json
from base.models import Lawyer, specialty, specialize, administrateur
from django.contrib.auth.hashers import make_password

script_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the absolute path to data.json
json_file_path = os.path.join(script_dir, 'data.json')

# Set the default password
default_password = "12345678ESTIN!"

# Hash the default password
hashed_password = make_password(default_password)

with open(json_file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

for lawyer_data in data:
    # Créer un avocat
    admin_user = administrateur.objects.get(pk=1)
    
    lawyer = Lawyer.objects.create(
        lawyerfrstName=lawyer_data['name'],
        lawyerLstName=lawyer_data['fname'],
        lawyerEmail=lawyer_data['email'],
        lawyerPhoneNumber=lawyer_data['phone'],
        bio=lawyer_data['description'],
        locationLatitude=lawyer_data['latitude'],
        locationLongitude=lawyer_data['longitude'],
        address=lawyer_data['address'],
        etat='active',
        administrateurFkey=admin_user,
        lawyerPassword=hashed_password  # Save the hashed password
    )

    # Créer les spécialités et les lier à l'avocat
    for category_name in lawyer_data['categories']:
        specialty_obj, created = specialty.objects.get_or_create(specialtyName=category_name)
        specialize.objects.create(specialiteID=specialty_obj.IDspecialty, avocatID=lawyer.IDlawyer)

    # Vous pouvez ajouter d'autres champs et relations en fonction de vos besoins

# Assurez-vous que les migrations sont à jour
# python manage.py makemigrations
# python manage.py migrate
