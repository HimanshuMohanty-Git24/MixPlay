import React, { useState, useRef } from 'react';
import { ThemeProvider, CssBaseline, Container, Box, CircularProgress } from '@mui/material';
import Header from './components/Header';
import TrackInput from './components/TrackInput';
import TrackList from './components/TrackList';
import AudioPlayer from './components/AudioPlayer';
import theme from './theme';
import useYoutubeAudio from './hooks/useYoutubeAudio';

function App() {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const audioPlayerRef = useRef();
  const { getAudioInfo } = useYoutubeAudio();

  const addTrack = async (url) => {
    setIsLoading(true);
    try {
      const info = await getAudioInfo(url);
      if (info) {
        setTracks([...tracks, { url, audioUrl: info.audioUrl, title: info.title, volume: 50 }]);
      }
    } catch (error) {
      console.error('Error adding track:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVolumeChange = (index, newVolume) => {
    setTracks(prevTracks => {
      const newTracks = [...prevTracks];
      newTracks[index] = { ...newTracks[index], volume: newVolume };
      return newTracks;
    });
    if (audioPlayerRef.current) {
      audioPlayerRef.current.handleVolumeChange(index, newVolume);
    }
  };

  const removeTrack = (index) => {
    setTracks(tracks.filter((_, i) => i !== index));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Header />
          <TrackInput onAddTrack={addTrack} />
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              <CircularProgress />
            </Box>
          ) : (
            <TrackList
              tracks={tracks}
              onVolumeChange={handleVolumeChange}
              onRemoveTrack={removeTrack}
            />
          )}
          <AudioPlayer ref={audioPlayerRef} tracks={tracks} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;