import React, { useEffect, useState } from "react";
import "../../index.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-3-15`) - +new Date();

    if (difference > 0) {
      setSeconds(Math.floor((difference / 1000) % 60));
      setMinutes(Math.floor((difference / 1000 / 60) % 60));
      setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateTimeLeft();
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <main>
      <div className="card-time">
        <div className="card-top"></div>
        <div className="card-bottom"></div>
        <div className="counter">{days}</div>
      </div>
      <p>DAYS</p>
      <div>{hours}HOURS</div>
      <div>{minutes}MINUTES</div>
      <div>{seconds}SECONDS</div>
    </main>
  );
}

export default Timer;
