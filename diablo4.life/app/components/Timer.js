'use client';

import React, { useState, useEffect } from 'react';

const Timer = ({ duration }) => {
  const [timer, setTimer] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = () => {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    const formattedHours = hours < 10 ? `0${hours}` : String(hours);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : String(minutes);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : String(seconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return <div>{formatTime()}</div>;
};

export default Timer;
