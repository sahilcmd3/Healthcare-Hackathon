from rest_framework import serializers
from .models import Equipment, Contract

class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = ['id', 'equipment_id', 'name', 'serial_number', 'location', 'date_added']

class ContractSerializer(serializers.ModelSerializer):
    equipment = EquipmentSerializer(read_only=True)
    equipment_id = serializers.PrimaryKeyRelatedField(
        queryset=Equipment.objects.all(),
        source='equipment',
        write_only=True
    )

    class Meta:
        model = Contract
        fields = [
            'id', 'equipment', 'equipment_id', 'contract_type',
            'start_date', 'end_date', 'cost', 'created_by'
        ]