const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();
app.use(cors());

app.get('/get-audio-url', async (req, res) => {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }
  
  try {
    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highestaudio' });
    
    if (!format) {
      return res.status(404).json({ error: 'No audio format found' });
    }
    
    res.json({ 
      audioUrl: format.url, 
      title: info.videoDetails.title 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get audio URL' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});