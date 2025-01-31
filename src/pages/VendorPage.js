import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import VendorForm from '../components/VendorForm';
import VendorList from '../components/VendorList';

function VendorPage() {
  const [vendor, setVendor] = useState([]);

  const handleSaveVendor = (newVendor) => {
    setVendor([...vendor, newVendor]);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Vendor
      </Typography>
      <Box mb={4}>
        <VendorForm onSave={handleSaveVendor} />
      </Box>
      <VendorList vendor={vendor} />
    </Container>
  );
}

export default VendorPage;