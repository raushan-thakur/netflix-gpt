import React, { useState, useEffect } from "react";

function Watch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  });

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };

  const handleRestart = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const timeInminutes = Math.floor(timeInSeconds / 60);
    const minutes = timeInminutes % 60;
    const hours = Math.floor(timeInminutes / 60);
    const seconds = timeInSeconds % 60;
    return (
      (hours < 10 ? "0" : "") +
      hours +
      " : " +
      (minutes < 10 ? "0" : "") +
      minutes +
      " : " +
      (seconds < 10 ? "0" : "") +
      seconds
    );
  };

  return (
    <div class="w-screen h-screen bg-white flex justify-center pt-28">
      <div class="w-80 h-52 flex flex-col justify-center items-center rounded-lg p-4 m-4 gap-4 bg-purple-100 shadow-2xl border border-gray-200">
        <h1 className="font-bold text-xl">Stopwatch</h1>
        <p>{formatTime(time)}</p>
        <div>
          <button
            className="p-2 px-4 gap-2 m-2 bg-purple-900 rounded-full text-white cursor-pointer border"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="p-2 px-4 gap-2 m-2 bg-purple-900 rounded-full text-white cursor-pointer"
            onClick={handleStop}
          >
            Stop
          </button>
          <button
            className="p-2 px-4 gap-2 m-2 bg-purple-900 rounded-full text-white cursor-pointer"
            onClick={handleRestart}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Watch;
