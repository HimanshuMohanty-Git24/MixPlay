import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function TrackInput({ onAddTrack }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onAddTrack(url.trim());
      setUrl('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        fullWidth
        label="YouTube URL"
        variant="outlined"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button type="submit" variant="contained" sx={{ mt: 1 }}>
        Add Track
      </Button>
    </Box>
  );
}

export default TrackInput;