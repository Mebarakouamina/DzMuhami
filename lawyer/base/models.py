from django.db import models

# Create your models here.

""" class item(models.Model):
    name=models.CharField(max_length=50)
    ceated=models.DateField(auto_now_add=True) """
    



class Client(models.Model):
    IDclinet=models.AutoField(primary_key=True)
    clientfrstName = models.CharField(max_length=50)
    clientLstName= models.CharField(max_length=50)
    clientEmail=models.EmailField(unique=True)
    clientPassword=models.CharField(max_length=20)
    clientPhoneNumber=models.CharField(max_length=30)

    



class administrateur(models.Model):
    IDadminstrateur=models.AutoField(primary_key=True)
    administraeurEmail= models.EmailField(unique=True)
    administrateurPassword=models.CharField(max_length=10)

class specialty(models.Model):
    IDspecialty =models.AutoField(primary_key=True)
    specialtyName=models.CharField(max_length=50)
    

class specialize(models.Model):
    specialiteID = models.IntegerField()
    avocatID = models.IntegerField()

    class Meta:
        unique_together = ('specialiteID', 'avocatID')


class Language(models.Model):
    IDlanguage=models.AutoField(primary_key=True)
    languageName=models.CharField(max_length=50)

    

class languagesSpoken(models.Model):
    langueID=models.IntegerField()
    avocatID=models.IntegerField()
    class Meta:
        unique_together = ('langueID', 'avocatID')


class Lawyer(models.Model):
    IDlawyer=models.AutoField(primary_key=True)
    lawyerfrstName = models.CharField(max_length=50)
    lawyerLstName= models.CharField(max_length=50)
    lawyerEmail=models.EmailField(unique=False)
    lawyerPassword=models.CharField(max_length=20)
    lawyerPhoneNumber=models.CharField(max_length=30)
    bio = models.TextField()
    locationLatitude= models.FloatField(null=False, blank=False)
    locationLongitude= models.FloatField(null=False, blank=False)
    address= models.CharField(max_length=50)
    etat=models.CharField(max_length=10)
    administrateurFkey = models.ForeignKey(administrateur, on_delete=models.CASCADE)

class Experience(models.Model):
    IDexperience=models.AutoField(primary_key=True)
    position=models.CharField(max_length=20)
    Description=models.CharField(max_length=100)
    startDate=models.DateField(("experience start Date"), auto_now=False, auto_now_add=False)
    endDate=models.DateField(("ecperience end date"), auto_now=False, auto_now_add=False)
    avocat = models.ForeignKey(Lawyer, on_delete=models.CASCADE)


class Education(models.Model):
    IDeducation=models.AutoField(primary_key=True)
    institution=models.CharField(max_length=50)
    Degree=models.CharField(max_length=50)
    graduationYear=models.DateField(("education start"), auto_now=False, auto_now_add=False)
    avocat = models.ForeignKey(Lawyer, on_delete=models.CASCADE)




class review(models.Model):
    IDreview=models.AutoField(primary_key=True)
    rateValue=models.FloatField()
    comment = models.TextField()
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    avocat = models.ForeignKey(Lawyer, on_delete=models.CASCADE)



class appointment(models.Model):
    IDappointment=models.AutoField(primary_key=True)
    appointmentDate=models.DateTimeField(("Appointment Date"), auto_now=False, auto_now_add=False)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    avocat = models.ForeignKey(Lawyer, on_delete=models.CASCADE)
    
    


