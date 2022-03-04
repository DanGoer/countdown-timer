import React from "react";

function Counter({ timeLeft, time }) {
  return (
    <>
      <div className="card-time">
        <div className="card-top"></div>
        <div className="card-bottom"></div>
        <div className="counter">{timeLeft}</div>
      </div>
      <p>{time}</p>
    </>
  );
}

export default Counter;
