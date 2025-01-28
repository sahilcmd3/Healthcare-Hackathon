import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import ContractsPage from './pages/ContractsPage';
import AMCPage from './pages/AMCPage';
import CMPage from './pages/CMPage';
import EquipmentPage from './pages/EquipmentPage';
import VendorPage from './pages/VendorPage';


function App() {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hospital AMC/CMC Management
          </Typography>
          <Button color="inherit" component={Link} to="/contracts">Contracts</Button>
          <Button color="inherit" component={Link} to="/amc">AMC</Button>
          <Button color="inherit" component={Link} to="/cmc">CMC</Button>
          <Button color="inherit" component={Link} to="/equipment">Equipment</Button>
          <Button color="inherit" component={Link} to="/vendor">Vendor</Button>

        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/contracts" element={<ContractsPage />} />
        <Route path="/amc" element={<AMCPage />} />
        <Route path="/cmc" element={<CMPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/vendor" element={<VendorPage />} />
      </Routes>
    </Container>
  );
}

export default App;