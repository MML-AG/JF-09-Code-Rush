import React, { useState, useEffect } from 'react';
import MusicPlayer from './components/musicplayer'; // Assuming you've already implemented this
import { FaDiscord } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'tailwindcss/tailwind.css';

const StudyRoom = () => {
  const [studyDuration, setStudyDuration] = useState(25); // Default to 25 minutes
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isStudying, setIsStudying] = useState(false);
  const [bgColor, setBgColor] = useState('bg-gradient-to-r from-purple-400 via-pink-500 to-red-500');

  useEffect(() => {
    let timer;
    if (isStudying && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsStudying(false);
    }
    return () => clearInterval(timer);
  }, [isStudying, timeRemaining]);

  const handleStartStudySession = () => {
    setTimeRemaining(studyDuration * 60); // Convert minutes to seconds
    setIsStudying(true);
  };

  const handleDurationChange = (e) => {
    setStudyDuration(e.target.value);
  };

  const handleChangeBackgroundColor = () => {
    const colors = [
      'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
      'bg-gradient-to-r from-green-500 via-teal-500 to-blue-500',
      'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500',
      'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={`min-h-screen ${bgColor} text-white flex flex-col items-center justify-center`}>
      <h1 className="text-4xl font-bold mb-8 text-8xl">Study Room</h1>

      <div className="flex items-center justify-between space-x-8 mb-10 w-full px-10">
        <div className="flex-1">
          <MusicPlayer />
        </div>

        <div className="flex flex-col items-center">
          <div style={{ width: 150, height: 150 }}>
            <CircularProgressbar
              value={isStudying ? (timeRemaining / (studyDuration * 60)) * 100 : 0}
              text={isStudying ? formatTime(timeRemaining) : `${studyDuration}:00`}
              styles={buildStyles({
                textColor: '#fff',
                pathColor: `rgba(255, 255, 255, ${timeRemaining > 0 ? 1 : 0.5})`,
                trailColor: 'rgba(255, 255, 255, 0.2)',
              })}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="study-duration" className="mb-2 block text-center text-xl">
              Enter Study Duration (minutes):
            </label>
            <input
              id="study-duration"
              type="number"
              min="1"
              value={studyDuration}
              onChange={handleDurationChange}
              className="w-24 text-black text-center p-2 rounded-lg mb-4"
            />
            <button
              onClick={handleStartStudySession}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-green-600 transition-all duration-300"
            >
              Start Study Session
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <a
            href="https://discord.gg/eZABJFNS" // Replace with your actual Discord invite link
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 flex items-center px-6 py-3 bg-purple-600 rounded-full font-semibold shadow-md hover:bg-purple-700 transition-all duration-300"
          >
            <FaDiscord className="mr-2 text-xl" />
            Connect with Community
          </a>
          <button
            onClick={handleChangeBackgroundColor}
            className="px-6 py-3 bg-green-600 rounded-full font-semibold shadow-md hover:bg-green-700 transition-all duration-300"
          >
            Change Background Color
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyRoom;
