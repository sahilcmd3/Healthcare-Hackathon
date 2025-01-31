import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import api from '../services/api';

function EquipmentList() {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    api.get('/equipment/')
      .then(response => {
        setEquipment(response.data);
      })
      .catch(error => {
        console.error('Error fetching equipment:', error);
      });
  }, []);

  return (
    <List>
      {equipment.map((item) => (
        <React.Fragment key={item.id}>
          <ListItem>
            <ListItemText
              primary={item.name}
              secondary={`Serial Number: ${item.serial_number}, Location: ${item.location}`}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default EquipmentList;