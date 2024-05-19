from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
)
from django.core.exceptions import ValidationError


from django.http import HttpResponse

class Conversion(APIView):
    def post(self, request):
        pass

    def get(self, request):
        response_string = "Success! Your GET request went through."
        return HttpResponse(response_string)