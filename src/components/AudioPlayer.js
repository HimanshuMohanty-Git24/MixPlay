import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { Button, Box } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import useYoutubeAudio from '../hooks/useYoutubeAudio';

const AudioPlayer = forwardRef(({ tracks }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRefs = useRef([]);
  const { getAudioInfo } = useYoutubeAudio();

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, tracks.length);
  }, [tracks]);

  useEffect(() => {
    tracks.forEach(async (track, index) => {
      if (audioRefs.current[index]) {
        if (!audioRefs.current[index].src) {
          try {
            const info = await getAudioInfo(track.url);
            if (info && info.audioUrl) {
              audioRefs.current[index].src = info.audioUrl;
            }
          } catch (error) {
            console.error('Error fetching audio info:', error);
          }
        }
        audioRefs.current[index].volume = track.volume / 100;

        if (isPlaying && audioRefs.current[index].paused) {
          audioRefs.current[index].play();
        }
      }
    });
  }, [tracks, getAudioInfo, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    audioRefs.current.forEach((audio) => {
      if (audio) {
        isPlaying ? audio.pause() : audio.play();
      }
    });
  };

  const handleVolumeChange = (index, newVolume) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].volume = newVolume / 100;
    }
  };

  useImperativeHandle(ref, () => ({
    handleVolumeChange
  }));

  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Button
        variant="contained"
        startIcon={isPlaying ? <Pause /> : <PlayArrow />}
        onClick={togglePlayPause}
        disabled={tracks.length === 0}
      >
        {isPlaying ? 'Pause' : 'Play All'}
      </Button>
      {tracks.map((track, index) => (
        <audio
          key={index}
          ref={(el) => (audioRefs.current[index] = el)}
          onEnded={() => setIsPlaying(false)}
        />
      ))}
    </Box>
  );
});

export default AudioPlayer;