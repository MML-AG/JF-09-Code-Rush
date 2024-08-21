import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp, FaUpload } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';
const MusicPlayer = () => {
  const defaultSongName = "Rain Sound";
  const defaultSongURL = "../assets/RainSound.mpeg"; // Replace this with the path to your rain sound file
  
  const [audioSrc, setAudioSrc] = useState(defaultSongURL);
  const [songName, setSongName] = useState(defaultSongName);
  const [isPlaying, setIsPlaying] = useState(true); // Set to true to auto-play the rain sound
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error("Error playing audio:", error));
    }
  }, [audioSrc]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setAudioSrc(fileURL);
      setSongName(file.name);
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    setVolume(volume);
    audioRef.current.volume = volume;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const skipForward = () => {
    audioRef.current.currentTime += 10;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Music Player</h1>
      
      <div className="flex items-center justify-center mb-6">
        <label className="cursor-pointer px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-semibold shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300 flex items-center">
          <FaUpload className="mr-2" />
          Choose File
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      </div>

      {audioSrc && (
        <div>
          <p className="text-center mb-4">Playing: {songName}</p>

          <audio
            ref={audioRef}
            src={audioSrc}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            autoPlay
          />

          <div className="flex items-center justify-between mt-4">
            <button onClick={skipBackward} className="text-white text-2xl">
              <FaStepBackward />
            </button>
            <button onClick={togglePlayPause} className="text-white text-3xl mx-6">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={skipForward} className="text-white text-2xl">
              <FaStepForward />
            </button>
          </div>

          <div className="mt-4 flex items-center">
            <span className="mr-4">{Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)}</span>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => (audioRef.current.currentTime = e.target.value)}
              className="w-full"
            />
            <span className="ml-4">{Math.floor(duration / 60)}:{('0' + Math.floor(duration % 60)).slice(-2)}</span>
          </div>

          <div className="mt-4 flex items-center">
            <FaVolumeUp className="text-white mr-2" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
