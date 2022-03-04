import React, { useEffect, useState } from "react";
import "../../index.css";
import Counter from "./Counter";

function Timer() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-3-15`) - +new Date();

    if (difference > 0) {
      return {
        seconds: Math.floor((difference / 1000) % 60),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <main>
      <Counter time="Days" timeLeft={timeLeft.days} />
      <Counter time="Hours" timeLeft={timeLeft.hours} />
      <Counter time="Minutes" timeLeft={timeLeft.minutes} />
      <Counter time="Seconds" timeLeft={timeLeft.seconds} />
    </main>
  );
}

export default Timer;
