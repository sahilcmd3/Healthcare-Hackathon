import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import api from '../services/api';

function AMCPage() {
  const [amcContracts, setAmcContracts] = useState([]);

  useEffect(() => {
    api.get('/')
      .then(response => {
        const allContracts = response.data;
        const amcOnly = allContracts.filter(contract => contract.contract_type === 'AMC');
        setAmcContracts(amcOnly);
      })
      .catch(error => {
        console.error('Error fetching AMC contracts:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        AMC Contracts
      </Typography>
      <List>
        {amcContracts.map((contract) => (
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

export default AMCPage;