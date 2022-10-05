from django.urls import include, path
from rest_framework_nested import routers
from cadastro import views

router = routers.SimpleRouter(trailing_slash=False)

router.register('cadastros', views.CadastroView)
urlpatterns = [*router.urls]