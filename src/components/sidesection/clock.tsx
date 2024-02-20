"use client"
import "./calendar-styles.css"
import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';

const ClockSection: React.FC = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    // Clearing interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Clock value={value} />
    </div>
  );
};

export default ClockSection;

