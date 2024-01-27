from rest_framework.response import Response
from rest_framework.decorators import api_view

from base.models import Client,administrateur,specialty,specialize,Language,languagesSpoken,Lawyer,Experience,Education,review,appointment

from .serializers import LawyerSerializer,SpecialtySerializer,SpecializeSerializer,AppointmentSerializer,ClientSerializer
from django.db import models
from django.db.models import Q

from django.http import JsonResponse
from rest_framework import status


from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from base.models import Client, administrateur, Lawyer, specialty, specialize, review
from .serializers import ClientSerializer, LawyerSerializer, ReviewSerializer
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from rest_framework import generics


class InscriptionView(APIView):
    def post(self, request):
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            validated_data = serializer.validated_data
            clientFirstName = validated_data.get('clientfrstName')
            clientLastName = validated_data.get('clientLstName')
            clientEmail = validated_data.get('clientEmail')
            clientPassword = validated_data.get('clientPassword')
            clientPhoneNumber = validated_data.get('clientPhoneNumber')

            errors = {}  # Créer un dictionnaire pour stocker les erreurs de validation

            if len(clientFirstName) < 3 or len(clientLastName) < 3:
                errors['clientfrstName'] = 'Le prénom et le nom doivent contenir au moins 3 caractères.'
            if not clientEmail:
                errors['clientEmail'] = 'Veuillez saisir une adresse e-mail valide.'
            if len(clientPassword) < 8 or not any(char.isdigit() for char in clientPassword) or not any(char.isalpha() for char in clientPassword):
                errors['clientPassword'] = 'Le mot de passe doit contenir au moins 8 caractères avec des chiffres, des lettres et des caractères spéciaux.'
            if not (clientPhoneNumber.startswith(('05', '06', '07')) and len(clientPhoneNumber) == 10):
                errors['clientPhoneNumber'] = 'Le numéro de téléphone doit commencer par 05, 06 ou 07 et contenir exactement 10 chiffres (numéro algérien).'

            if errors:
                return Response(errors, status=status.HTTP_400_BAD_REQUEST)
            else:
                if Client.objects.filter(clientEmail=clientEmail).exists():
                    return Response({'clientEmail': 'Cet e-mail existe déjà.'}, status=status.HTTP_400_BAD_REQUEST)

                validated_data['clientPassword'] = make_password(clientPassword)
                client = Client.objects.create(**validated_data)
                return Response({'message': 'Inscription réussie'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from django.contrib.auth import authenticate
  # Assurez-vous d'importer vos modèles ici

from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def DeconnexionView(request):
    try:
        request.user.auth_token.delete()
    except:
        pass
    return Response({'message': 'Déconnexion réussie'}, status=status.HTTP_200_OK)



@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def SuppressionCompteView(request):
    user = request.user  # Récupérer l'utilisateur authentifié
    user.delete()  # Supprimer l'utilisateur
    return Response({'message': 'Compte supprimé avec succès'}, status=status.HTTP_204_NO_CONTENT)

from django.http import JsonResponse
from base.models import specialty  # Assurez-vous que le modèle est correctement importé

def get_specialties(request):
    specialties = specialty.objects.all().values('IDspecialty', 'specialtyName')
    return JsonResponse(list(specialties), safe=False)




@api_view(['POST'])
def register_lawyer(request):
    if request.method == 'POST':
        data = request.data
        specialty_ids = data.get('selectedOptions', [])  # Récupérez les spécialités sélectionnées

        specialties = []
        for specialty_id in specialty_ids:
            try:
                specialty_obj = specialty.objects.get(pk=specialty_id)
                specialties.append(specialty_obj)
            except Specialty.DoesNotExist:
                return Response({"error": f"Specialty with ID {specialty_id} not found"}, status=status.HTTP_404_NOT_FOUND)

        lawyer_first_name = data.get('lawyerfrstName')
        lawyer_last_name = data.get('lawyerLstName')
        lawyer_email = data.get('lawyerEmail')
        lawyer_password = data.get('lawyerPassword')
        lawyer_phone_number = data.get('lawyerPhoneNumber')
        career_description = data.get('careerDescription')

        errors = {}

        if len(lawyer_first_name) < 3 or len(lawyer_last_name) < 3:
            errors['lawyer_last_name'] = 'Le prénom et le nom doivent contenir au moins 3 caractères.'

        if len(lawyer_password) < 8 or not any(char.isdigit() for char in lawyer_password) or not any(char.isalpha() for char in lawyer_password):
            errors['lawyer_password'] = 'Le mot de passe doit contenir au moins 8 caractères avec des chiffres et des lettres.'

        if errors:
            return Response(errors, status=status.HTTP_400_BAD_REQUEST)

        try:
            Lawyer.objects.get(lawyerEmail=lawyer_email)
            return Response({'error': 'Cet e-mail existe déjà.'}, status=status.HTTP_400_BAD_REQUEST)
        except Lawyer.DoesNotExist:
            pass

        validated_data = {
            'lawyerfrstName': lawyer_first_name,
            'lawyerLstName': lawyer_last_name,
            'lawyerEmail': lawyer_email,
            'lawyerPassword': make_password(lawyer_password),
            'lawyerPhoneNumber': lawyer_phone_number,
            'bio': career_description,
            'administrateurFkey': 1,  # Assigner la valeur 1 à administrateurFkey
            # ... Autres champs requis pour l'inscription d'un avocat
        }

        serializer = LawyerSerializer(data=validated_data)
        if serializer.is_valid():
            lawyer_instance = serializer.save()

            for specialty_obj in specialties:
                specialize.objects.create(specialiteID=specialty_obj.IDspecialty, avocatID=lawyer_instance.IDlawyer)

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.models import Lawyer, specialize  # Assurez-vous d'importer vos modèles correctement

@api_view(['GET'])
def get_lawyer_details(request, lawyer_id):
    try:
        lawyer = Lawyer.objects.get(IDlawyer=lawyer_id)

        # Récupération des informations générales de l'avocat
        lawyer_info = {
            'first_name': lawyer.lawyerfrstName,
            'last_name': lawyer.lawyerLstName,
            'email': lawyer.lawyerEmail,
            'phone_number': lawyer.lawyerPhoneNumber,
            'bio': lawyer.bio,
            'IDlawyer':lawyer.IDlawyer
        }
        specialize_entries = specialize.objects.filter(avocatID=lawyer_id)
        specialty_ids = [entry.specialiteID for entry in specialize_entries]

        # Récupération des noms des spécialités à partir de la table specialty
        specialty_names = specialty.objects.filter(IDspecialty__in=specialty_ids).values_list('specialtyName', flat=True)

        lawyer_info['specialties'] = list(specialty_names)

        return Response(lawyer_info)



    except Lawyer.DoesNotExist:
        return Response({'message': 'Avocat non trouvé'}, status=404)






@api_view(['POST'])
def ConnexionView(request):
    email = request.data.get('email')
    password = request.data.get('password')

    # Essayer d'authentifier avec le modèle Client
    client = Client.objects.filter(clientEmail=email).first()

    if client and check_password(password, client.clientPassword):
        user = client
        user_type = 'client'
        user_id = user.IDclinet
    else:
        # Essayer d'authentifier avec le modèle Lawyer
        lawyer = Lawyer.objects.filter(lawyerEmail=email).first()
        if lawyer and check_password(password, lawyer.lawyerPassword):
            user = lawyer
            user_type = 'lawyer'
            user_id = user.IDlawyer
        else:
            # Essayer d'authentifier avec le modèle administrateur
            admin = administrateur.objects.filter(administraeurEmail=email).first()
            if admin and admin.administrateurPassword == password:
                user = admin
                user_type = 'administrateur'
                user_id = user.IDadminstrateur
            else:
                # Aucun utilisateur trouvé avec cet email ou mot de passe incorrect
                return Response({'message': 'Email ou mot de passe incorrect'}, status=status.HTTP_404_NOT_FOUND)

    return Response({'user_id': user_id, 'user_type': user_type, 'message': 'Connexion réussie'})



    




# Dans views.py


class LawyerReviewsAPIView(generics.ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        lawyer_id = self.kwargs['lawyer_id']  # Récupérer l'ID de l'avocat depuis les paramètres de l'URL
        return review.objects.filter(avocat__IDlawyer=lawyer_id)[:4]  # Récupérer les 5 premiers commentaires pour cet avocat
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.models import review
from .serializers import ReviewSerializer

@api_view(['POST'])
def add_comment(request):
    if request.method == 'POST':
        client_id = request.data.get('client_id')
        lawyer_id = request.data.get('lawyer_id')
        comment_content = request.data.get('comment_content')

        # Assurez-vous que les IDs du client et de l'avocat sont valides
        try:
            client = Client.objects.get(pk=client_id)
            lawyer = Lawyer.objects.get(pk=lawyer_id)
        except (Client.DoesNotExist, Lawyer.DoesNotExist):
            return Response({"message": "Client or Lawyer does not exist"}, status=status.HTTP_404_NOT_FOUND)

        # Créez un nouvel objet review avec rateValue=0
        new_review = review(rateValue=0, comment=comment_content, client=client, avocat=lawyer)
        new_review.save()

        serializer = ReviewSerializer(new_review)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response({"message": "Invalid request method"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def getLawyer(request):
    return 



@api_view(['POST'])
def search_lawyers(request):
    address = request.data.get('address', '')
    name = request.data.get('name', '')
    specialty_name = request.data.get('specialty', '')

    # Use Q objects to construct complex queries
    query = Q()

    if address:
        query &= Q(address__icontains=address)

    if name:
        query &= (Q(lawyerfrstName__icontains=name) | Q(lawyerLstName__icontains=name))

    if specialty_name:
        # Get the specialty instance
        try:
            specialty_instance = specialty.objects.get(specialtyName__icontains=specialty_name)
        except specialty.DoesNotExist:
            specialty_instance = None

        if specialty_instance is not None:
            # Get lawyers associated with the specified specialty using specialize model
            lawyer_ids_with_specialty = specialize.objects.filter(specialiteID=specialty_instance.IDspecialty).values_list('avocatID', flat=True)
            query &= Q(IDlawyer__in=lawyer_ids_with_specialty)
        else:
            # If the specialty doesn't exist, return an empty result
            response_data = {'message': f'No specialty found with the name "{specialty_name}".'}
            return Response(response_data)

    lawyers = Lawyer.objects.filter(query)

    if lawyers.exists():
        serializer = LawyerSerializer(lawyers, many=True)

        # Get the specialties associated with each lawyer
        lawyers_info = []
        for lawyer in lawyers:
            lawyer_specialties = specialize.objects.filter(avocatID=lawyer.IDlawyer)
            specialty_ids = lawyer_specialties.values_list('specialiteID', flat=True)
            specialties = specialty.objects.filter(IDspecialty__in=specialty_ids).values_list('specialtyName', flat=True)
            lawyers_info.append({
                'IDlawyer': lawyer.IDlawyer,
                'name': f'{lawyer.lawyerfrstName} {lawyer.lawyerLstName}',
                'specialties': list(specialties)
            })

        response_data = {
            'message': 'Lawyers found:',
            'lawyers_info': lawyers_info
        }
    else:
        response_data = {'message': 'No lawyers found with the specified criteria.'}

    return Response(response_data)



@api_view(['POST'])
#@permission_classes([IsAuthenticated])
def create_appointment(request):
    if request.method == 'POST':
        # Récupérer la date, l'ID du client et l'ID de l'avocat depuis la demande
        appointment_date = request.data.get('appointmentDate')
        client_id = request.data.get('IDclient')
        avocat_id = request.data.get('avocat')

        # Assurez-vous que l'utilisateur client existe
        try:
            client = Client.objects.get(IDclinet=client_id)
        except Client.DoesNotExist:
            return Response({'error': 'Client not found'}, status=status.HTTP_404_NOT_FOUND)

        # Vérifier si la date est déjà prise pour cet avocat
        existing_appointment = appointment.objects.filter(
            appointmentDate=appointment_date,
            avocat=avocat_id
        ).exists()

        if existing_appointment:
            return Response({'error': 'La date n\'est pas disponible pour cet avocat'}, status=status.HTTP_400_BAD_REQUEST)

        # Créer un dictionnaire avec les données du rendez-vous
        appointment_data = {
            'appointmentDate': appointment_date,
            'client': client_id,
            'avocat': avocat_id,
        }

        serializer = AppointmentSerializer(data=appointment_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


@api_view(['POST'])
#@permission_classes([IsAuthenticated])
def get_appointments_by_lawyer(request):
    try:
        # Récupérer l'ID de l'avocat depuis le corps de la requête
        lawyer_id = request.data.get('lawyer_id')
        
        # Débogage : Imprimer l'ID de l'avocat pour vérification
        print(f"ID de l'avocat saisi : {lawyer_id}")

        # Recherche de l'avocat par son ID
        lawyer = Lawyer.objects.get(IDlawyer=lawyer_id)
        
        # Débogage : Imprimer l'ID de l'avocat trouvé
        print(f"Avocat trouvé : {lawyer.lawyerLstName}")

        # Récupération de tous les rendez-vous pour cet avocat
        appointments = appointment.objects.filter(avocat=lawyer)

        # Vérifier si le lawyer a des rendez-vous
        if not appointments:
            return Response({'message': 'Ce lawyer n\'a pas de rendez-vous.'}, status=status.HTTP_200_OK)

        # Sérialisation des rendez-vous
        appointment_serializer = AppointmentSerializer(appointments, many=True)

        # Récupération des informations sur les clients associés aux rendez-vous
        clients = Client.objects.filter(appointment__in=appointments)
        client_serializer = ClientSerializer(clients, many=True)

        # Création d'une réponse combinant les rendez-vous et les informations client
        response_data = {
            'appointments': appointment_serializer.data,
            'clients': client_serializer.data,
        }

        return Response(response_data, status=status.HTTP_200_OK)

    except Lawyer.DoesNotExist:
        # Débogage : Imprimer l'ID de l'avocat non trouvé
        print(f"Avocat non trouvé avec l'ID : {lawyer_id}")
        return Response({'error': 'Avocat non trouvé'}, status=status.HTTP_404_NOT_FOUND)