from django.urls import path
from .views import Conversion

urlpatterns = [
    path("conversion/", Conversion.as_view(), name="conversion"),
]
