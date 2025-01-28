import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import EquipmentForm from '../components/EquipmentForm';
import EquipmentList from '../components/EquipmentList';

function EquipmentPage() {
  const [equipment, setEquipment] = useState([]);

  const handleSaveEquipment = (newEquipment) => {
    setEquipment([...equipment, newEquipment]);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Equipment
      </Typography>
      <Box mb={4}>
        <EquipmentForm onSave={handleSaveEquipment} />
      </Box>
      <EquipmentList equipment={equipment} />
    </Container>
  );
}

export default EquipmentPage;