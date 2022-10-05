# testein8



## Getting started

## Rodando o Front-End:
    Para rodar o front-end será necessário ter instalado o node.js e o npm ou yarn.
    Entre na pasta [testein8] e execute o comando "yarn" para instalar os node modules
    após instalar os node modules execute o comando "yarn start".

## Rodando o Back-End:
    Para rodar o backend será necessário ter o python 3.9 instalado.
    Crie um ambiente virtual e ative-o.
    Entre na pasta [api] e execute o comando "pip install -r requirements.txt" para instalar as dependencias.
    Caso já tenha configurado a conexão com o banco de dados, execute o comando "python manage.py migrate" e após 
    concluir execute o comando "python manage.py runserver".
    Caso queira entrar no administrador do django: ["localhost:8000/admin"] é necessário criar um usuário pelo terminal
    utilizando o comando "python manage.py createsuperuser".
## Considerações:
    Espero ter atendido as expectativas de acordo com o layout que me foi passado. Procurei fazer tudo o mais proximo das 
    exigências dos layouts.
    O cadastro verifica os dados obrigatórios e avisa o usuário para preenche-las. Deixei o telefone como não obrigatório,
    pois também teremos o e-mail que é uma forma de comunicação.

## Para mudar o banco de dados:
    (Acesse a imagem database_change_helper.png)

    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    1- Acesse o arquivo settings.py no caminho "api/api/settings.py"

    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    2- Localize o objeto de configuração "DATABASES"

    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    3- Nas keys "HOST" e "PORT" insira o Ip e a porta do servidor ativo de seu database
    Exemplo:
            'HOST': 'novoip',
            'PORT': 'novaporta',

    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    4- Na key "NAME" insira o nome de seu banco de dados
    Exemplo:
            'NAME': 'novobanco',

    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    5- Na key "USER" e "PASSWORD" insira os dados de usuario e senha do seu banco
    Exemplo:
            'USER': 'novouser',
            'PASSWORD': 'novasenha.',

    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    6- Na key "ENGINE" insira o nome do django database driver que você deseja utilizar, caso o banco desejado seja um mysql seu driver será "django.db.backends.mysql", caso o banco desejado seja um postgresql seu driver será "django.db.backends.postgresql_psycopg2"

    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
