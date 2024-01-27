from rest_framework import serializers
from base.models import (
    Client,
    administrateur,
    specialty,
    specialize,
    Language,
    languagesSpoken,
    Lawyer,
    Experience,
    Education,
    review,
    appointment,
)

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class administrateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = administrateur
        fields = '__all__'

class SpecialtySerializer(serializers.ModelSerializer):
    class Meta:
        model = specialty
        fields = '__all__'

class SpecializeSerializer(serializers.ModelSerializer):
    class Meta:
        model = specialize
        fields = '__all__'

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'

class languagesSpokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = languagesSpoken
        fields = '__all__'

class LawyerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lawyer
        fields = [
            'lawyerfrstName',
            'lawyerLstName',
            'lawyerEmail',
            'lawyerPhoneNumber',
            'bio',
            'lawyerPassword',
            'administrateurFkey',
        ]
        extra_kwargs = {
            'lawyerEmail': {'required': False},
            'lawyerPhoneNumber': {'required': False},
            'bio': {'required': False},
            'administrateurFkey': {'required': False}
        } 


""" class LawyerSererializer(serializers.ModelSerializer):
    class Meta:
        model=Lawyer
        fields='__all__' """

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class reviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = review
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = appointment
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    client = ClientSerializer()

    class Meta:
        model = review
        fields = ['rateValue', 'comment', 'client']