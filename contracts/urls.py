from django.urls import path
from .views import (
    EquipmentListCreateView,
    ContractListCreateView,
    ContractRetrieveUpdateDestroyView,
    EquipmentCreateView
)

urlpatterns = [
    path('equipment/', EquipmentCreateView.as_view(), name='equipment-create'),
    path('equipment/', EquipmentListCreateView.as_view(), name='equipment-list-create'),
    path('', ContractListCreateView.as_view(), name='contract-list-create'),
    path('<int:pk>/', ContractRetrieveUpdateDestroyView.as_view(), name='contract-detail'),
]