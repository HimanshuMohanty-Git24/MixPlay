# MixPlay 🎵

MixPlay is a web application that allows users to create custom playlists by mixing audio from multiple YouTube videos. You can adjust the volume of each track individually, creating a unique and enjoyable listening experience.

[Live App](https://mix-play.vercel.app/) *Note:Sometimes may not work Due to using free tire of Render for the backend so better setup Locally 



![image](https://github.com/HimanshuMohanty-Git24/MixPlay/assets/94133298/7e0c3de7-a419-4456-b6b3-bcfd12f2f720)

## Motivation 💡

While doing focused work, I enjoy playing the Bhagavad Gita and study music instrumental simultaneously. This inspired me to create MixPlay, so others can also enjoy mixing their favorite tracks while working or relaxing.

## Features ✨

- 📺 Add multiple YouTube tracks to your playlist
- 🎚️ Adjust volume for each track independently
- ⏯️ Play/pause functionality for the entire playlist
- 📝 Display track titles fetched from YouTube

## Tech Stack 🛠️

### Frontend
- ⚛️ React.js
- 🎨 Material-UI for styling and components
- 🪝 Custom hooks for YouTube audio handling

### Backend
- 🟢 Node.js
- 🚀 Express.js for the server
- 📹 ytdl-core for YouTube video processing

### APIs
- 🎥 YouTube Data API (via ytdl-core)

## How It Works ⚙️

1. **Input YouTube URLs:** Users input YouTube video URLs.
2. **Fetch Audio Info:** The backend fetches audio information and URLs using ytdl-core.
3. **Display Tracks:** The frontend displays track information and provides playback controls.
4. **Adjust Volume:** Users can adjust volume levels for each track in real-time.

MixPlay demonstrates the power of combining frontend and backend technologies to create a seamless audio mixing experience directly in the browser.

## Deployment 🚀

- Backend: [Render](https://render.com/)
- Frontend: [Vercel](https://vercel.com/)

## Folder Structure 📂

```
mixplay/
├── backend/
│   ├── package.json
│   └── server.js
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AudioPlayer.js
│   │   ├── Header.js
│   │   ├── TrackInput.js
│   │   └── TrackList.js
│   ├── hooks/
│   │   └── useYoutubeAudio.js
│   ├── App.js
│   ├── index.js
│   └── theme.js
├── package.json
└── README.md
```

## Getting Started 🚀

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository
    ```bash
    git clone https://github.com/HimanshuMohanty-Git24/MixPlay.git
    ```
2. Navigate to the project directory
    ```bash
    cd MixPlay
    ```
3. Install dependencies
    ```bash
    npm install
    ```

### Running the App

1. Start the backend server
    ```bash
    cd backend
    npm start
    ```
2. Start the frontend
    ```bash
    cd ..
    npm start
    ```

3. Open your browser and go to `http://localhost:3000`

## Contributing 🤝

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License 📄

This project is licensed under the MIT License.

---

Made with ❤️ by [Himanshu Mohanty](https://github.com/HimanshuMohanty-Git24)
