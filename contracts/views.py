from rest_framework import generics
from .models import Equipment, Contract
from .serializers import EquipmentSerializer, ContractSerializer

class EquipmentListCreateView(generics.ListCreateAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer

class EquipmentCreateView(generics.CreateAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer

class ContractListCreateView(generics.ListCreateAPIView):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer

class ContractRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contract.objects.all()
    serializer_class = ContractSerializer