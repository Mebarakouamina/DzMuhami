from django.contrib import admin

from .models import Client, administrateur, specialty, specialize, Language, languagesSpoken, Lawyer, Experience, Education, review, appointment
# Register your models here.

admin.site.register(Client)
admin.site.register(administrateur)
admin.site.register(specialty)
admin.site.register(specialize)
admin.site.register(Language)
admin.site.register(languagesSpoken)
admin.site.register(Lawyer)
admin.site.register(Experience)
admin.site.register(Education)
admin.site.register(review)
admin.site.register(appointment)

