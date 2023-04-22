import React, { useState } from 'react';
import ball from './img/img-ball.png';

export default function ComponentFourth() {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const pushBall = () => {
    setLeft(Math.round(Math.random() * 100));
    setTop(Math.round(Math.random() * 100));
  };

  return (
    <>
      <p>4 - футбол - клікаєм по м'ячу і він летить</p>
      <img
        src={ball}
        onClick={pushBall}
        style={{ marginLeft: left, marginTop: top }}
      />
    </>
  );
}
