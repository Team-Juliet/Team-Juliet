
from django.test import TestCase
from django.test import Client

class MyEndpointTestCase(TestCase):
    def setUp(self):
        # Set up any data or configurations needed for the tests
        pass

    def test_get_request(self):
        client = Client()
        response = client.get('/conversion/')
        self.assertEqual(response.status_code, 200)
        # Add more assertions to check the response data if needed