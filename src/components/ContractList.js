import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import api from '../services/api';

function ContractList() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    api.get('/')
      .then(response => {
        setContracts(response.data);
      })
      .catch(error => {
        console.error('Error fetching contracts:', error);
      });
  }, []);

  return (
    <List>
      {contracts.map((contract) => (
        <React.Fragment key={contract.id}>
          <ListItem>
            <ListItemText
              primary={`${contract.contract_type} for ${contract.equipment.name}`}
              secondary={`Valid from ${contract.start_date} to ${contract.end_date}`}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default ContractList;