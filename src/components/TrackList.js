import React from 'react';
import { List, ListItem, ListItemText, Slider, IconButton, Box } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

function TrackList({ tracks, onVolumeChange, onRemoveTrack }) {
  return (
    <List>
      {tracks.map((track, index) => (
        <ListItem key={index} alignItems="flex-start">
          <ListItemText
            primary={track.title || `Track ${index + 1}`}
            secondary={track.url}
          />
          <Box sx={{ width: 200, mr: 2 }}>
            <Slider
              value={track.volume}
              onChange={(_, newValue) => onVolumeChange(index, newValue)}
              aria-labelledby="continuous-slider"
            />
          </Box>
          <IconButton edge="end" aria-label="delete" onClick={() => onRemoveTrack(index)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TrackList;