import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Time: {time.toLocaleTimeString()}</p>
      <p>Date: {time.toLocaleDateString()}</p>
    </div>
  );
};

export default Clock;
