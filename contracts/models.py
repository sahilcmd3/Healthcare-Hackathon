from django.db import models
from django.contrib.auth.models import User

class Equipment(models.Model):
    equipment_id = models.CharField(max_length=100, unique=True)  # Custom equipment ID
    name = models.CharField(max_length=200)
    serial_number = models.CharField(max_length=100, unique=True)
    location = models.CharField(max_length=200)
    date_added = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.serial_number}"

class Contract(models.Model):
    CONTRACT_TYPE_CHOICES = (
        ('AMC', 'Annual Maintenance Contract'),
        ('CMC', 'Comprehensive Maintenance Contract'),
    )
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    contract_type = models.CharField(max_length=3, choices=CONTRACT_TYPE_CHOICES)
    start_date = models.DateField()
    end_date = models.DateField()
    cost = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.contract_type} for {self.equipment.name}"