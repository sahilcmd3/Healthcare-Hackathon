import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import api from '../services/api';

function CMPage() {
  const [cmcContracts, setCmcContracts] = useState([]);

  useEffect(() => {
    api.get('/')
      .then(response => {
        const allContracts = response.data;
        const cmcOnly = allContracts.filter(contract => contract.contract_type === 'CMC');
        setCmcContracts(cmcOnly);
      })
      .catch(error => {
        console.error('Error fetching CMC contracts:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        CMC Contracts
      </Typography>
      <List>
        {cmcContracts.map((contract) => (
          <React.Fragment key={contract.id}>
            <ListItem>
              <ListItemText
                primary={`${contract.equipment.name}`}
                secondary={`Valid from ${contract.start_date} to ${contract.end_date}`}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
}

export default CMPage;