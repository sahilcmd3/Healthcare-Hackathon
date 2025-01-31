import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import api from '../services/api';
import VendorForm from '../components/VendorForm';


function EquipmentForm({ onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    serial_number: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/equipment/', formData)
      .then(response => {
        onSave(response.data);
        setFormData({
          name: '',
          serial_number: '',
          location: ''
        });
      })
      .catch(error => {
        console.error('Error saving equipment:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        margin="normal"
        id="name"
        name="name"
        label="Equipment Name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        id="name"
        name="name"
        label="Vendor Name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        id="serial_number"
        name="serial_number"
        label="Serial Number"
        value={formData.serial_number}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        id="location"
        name="location"
        label="Location"
        value={formData.location}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Save Equipment
      </Button>
    </form>
  );
}

export default EquipmentForm;