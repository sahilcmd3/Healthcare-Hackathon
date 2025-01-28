import React, { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import api from '../services/api';

function ContractForm({ onSave }) {
  const [equipmentList, setEquipmentList] = useState([]);
  const [formData, setFormData] = useState({
    equipment_id: '',
    contract_type: '',
    start_date: '',
    end_date: '',
    cost: ''
  });

  useEffect(() => {
    api.get('/equipment/')
      .then(response => {
        setEquipmentList(response.data);
      })
      .catch(error => {
        console.error('Error fetching equipment list:', error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/', formData)
      .then(response => {
        onSave(response.data);
        setFormData({
          equipment_id: '',
          contract_type: '',
          start_date: '',
          end_date: '',
          cost: ''
        });
      })
      .catch(error => {
        console.error('Error saving contract:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth margin="normal">
        <InputLabel id="equipment-label">Equipment</InputLabel>
        <Select
          labelId="equipment-label"
          id="equipment_id"
          name="equipment_id"
          value={formData.equipment_id}
          onChange={handleChange}
          label="Equipment"
        >
          {equipmentList.map((equipment) => (
            <MenuItem key={equipment.id} value={equipment.id}>
              {equipment.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="contract-type-label">Contract Type</InputLabel>
        <Select
          labelId="contract-type-label"
          id="contract_type"
          name="contract_type"
          value={formData.contract_type}
          onChange={handleChange}
          label="Contract Type"
        >
          <MenuItem value="AMC">AMC</MenuItem>
          <MenuItem value="CMC">CMC</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        margin="normal"
        id="start_date"
        name="start_date"
        label="Start Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formData.start_date}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        id="end_date"
        name="end_date"
        label="End Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={formData.end_date}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        id="cost"
        name="cost"
        label="Cost"
        type="number"
        value={formData.cost}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Save Contract
      </Button>
    </form>
  );
}

export default ContractForm;