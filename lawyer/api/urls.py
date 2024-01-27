from django.urls import path
from . import views

urlpatterns = [
    #path('recherche', views.search_lawyerName),
    #path('recherche',views.search_lawyers_by_address),
    #path('recherche', views.search_lawyers_by_specialty),
    path('recherche', views.search_lawyers),
    #path('spec', views.get_all_specialties),
    path('appoi', views.create_appointment),
    path('rdv',views.get_appointments_by_lawyer),
    
    path('inscription/', views.InscriptionView.as_view(), name='inscriptionView'),
    path('connexion/', views.ConnexionView, name='connexionView'),
    path('Deconnexion/', views.DeconnexionView, name='DeconnexionView'),
    path('get-specialties/', views.get_specialties, name='get_specialties'),
    path('register-lawyer/', views.register_lawyer, name='register_lawyer'),
    path('get-lawyer-details/<int:lawyer_id>/', views.get_lawyer_details, name='get_lawyer_details'),
    path('lawyer/<int:lawyer_id>/reviews/', views.LawyerReviewsAPIView.as_view(), name='lawyer_reviews_api'),
    path('add_comment/',views.add_comment, name='add_comment' ),
    
]
