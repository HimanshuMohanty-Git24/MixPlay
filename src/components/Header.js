import React from 'react';
import { Typography, Box } from '@mui/material';

function Header() {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        MixPlay
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Mix and play multiple YouTube tracks simultaneously
      </Typography>
    </Box>
  );
}

export default Header;