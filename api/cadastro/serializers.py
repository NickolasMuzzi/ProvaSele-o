from rest_framework import serializers
from cadastro.models import Cadastro

class CadastroSerializer(serializers.ModelSerializer):
    nome = serializers.CharField(required=True)
    email = serializers.CharField(required=True)
    nascimento = serializers.DateField(format="%d/%m/%Y",required=True)
    telefone = serializers.SerializerMethodField()
    class Meta:
        model = Cadastro
        fields = [
            'id',
            'nome', 
            'email', 
            'telefone',
            'nascimento'
        ]
    def get_telefone(self, obj):
        telefone = obj.telefone
        new_telefone = f'({telefone[0:2]}) {telefone[2:3]} {telefone[3:7]}-{telefone[7:11]}'
        return new_telefone