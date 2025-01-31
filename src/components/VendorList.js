import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import api from '../services/api';

function VendorList() {
  const [vendor, setVendor] = useState([]);

  useEffect(() => {
    api.get('/vendor/')
      .then(response => {
        setVendor(response.data);
      })
      .catch(error => {
        console.error('Error fetching vendor:', error);
      });
  }, []);

  return (
    <List>
      {vendor.map((item) => (
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

export default VendorList;