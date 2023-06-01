from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    rut = models.IntegerField()
    phone = models.IntegerField()

    def __str__(self):
        return self.name


class Employee(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    rut = models.IntegerField()
    email = models.EmailField()

    def __str__(self):
        return f"{str(self.company)}: {self.name}"
