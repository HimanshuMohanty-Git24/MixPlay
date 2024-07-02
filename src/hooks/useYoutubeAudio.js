import { useState, useCallback } from 'react';

const API_URL = 'http://localhost:3001/get-audio-url';

const useYoutubeAudio = () => {
  const [error, setError] = useState(null);

  const getAudioInfo = useCallback(async (youtubeUrl) => {
    try {
      const response = await fetch(`${API_URL}?url=${encodeURIComponent(youtubeUrl)}`);
      if (!response.ok) {
        throw new Error('Failed to get audio URL');
      }
      const data = await response.json();
      
      return { audioUrl: data.audioUrl, title: data.title };
    } catch (err) {
      setError(err.message);
      return null;
    }
  }, []);

  return { getAudioInfo, error };
};

export default useYoutubeAudio;