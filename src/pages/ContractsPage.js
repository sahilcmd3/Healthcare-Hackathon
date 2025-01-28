import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import ContractForm from '../components/ContractForm';
import ContractList from '../components/ContractList';

function ContractsPage() {
  const [contracts, setContracts] = useState([]);

  const handleSaveContract = (newContract) => {
    setContracts([...contracts, newContract]);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Contracts
      </Typography>
      <Box mb={4}>
        <ContractForm onSave={handleSaveContract} />
      </Box>
      <ContractList contracts={contracts} />
    </Container>
  );
}

export default ContractsPage;