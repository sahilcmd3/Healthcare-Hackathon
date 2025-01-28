import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import api from '../services/api';

function VendorForm({ onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    phone_no: '',
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
    api.post('/vendor/', formData)
      .then(response => {
        onSave(response.data);
        setFormData({
          name: '',
          phone_no: '',
          location: ''
        });
      })
      .catch(error => {
        console.error('Error saving vendor:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        id="phone_no"
        name="phone_no"
        label="Phone Number"
        value={formData.phone_no}
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
        Save Vendor
      </Button>
    </form>
  );
}

export default VendorForm;