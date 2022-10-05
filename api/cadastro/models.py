from django.db import models

# Create your models here.
class Cadastro(models.Model):
    nome = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    nascimento = models.DateField()
    telefone = models.CharField(max_length=255, blank=True, null=True)
    
    class Meta:
        verbose_name = 'Cadastro'
        verbose_name_plural = 'Cadastros'
