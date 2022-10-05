from django.shortcuts import render
from rest_framework import views
from rest_framework.viewsets import ModelViewSet
from cadastro.models import Cadastro
from cadastro.serializers import CadastroSerializer
from rest_framework.decorators import action
from rest_framework import response
import dateutil.parser


class CadastroView(ModelViewSet):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    
    def get_queryset(self):
        return super().get_queryset()
    
    def get_serializer_class(self):
            return CadastroSerializer
    
    @action(methods=['GET'], detail=False)
    def list_all(self, request):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return response.Response(serializer.data)
   
    @action(methods=['POST'], detail=False)
    def create_cadastro(self, request):
        if Cadastro.objects.filter(email=request.data['email']):
            return response.Response(status=400, data="Já existe um cadastro com o e-mail enviado.")
        try:
            request.data['nascimento'] = dateutil.parser.parse(request.data['nascimento'])
        except Exception as e:
            return response.Response(status=400, data="A data informada é invalida.")

        if Cadastro.objects.create(**request.data):
            return response.Response(status=201)
        return response.Response(status=400)


