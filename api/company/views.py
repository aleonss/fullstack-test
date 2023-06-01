from rest_framework import viewsets
from rest_framework.decorators import action
from .models import Company, Employee
from .serializers import CompanySerializer, EmployeeSerializer
from rest_framework.response import Response


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    # Get employees from a company
    @action(detail=True, methods=["get"])
    def employees(self, request, pk=None):
        company = self.get_object()
        employees = company.employee_set.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
