import React, { useState } from 'react';

export default function ComponentThree() {
  const [r, setR] = useState(Math.round(Math.random() * 255));
  const [g, setG] = useState(Math.round(Math.random() * 255));
  const [b, setB] = useState(Math.round(Math.random() * 255));

  const changeColor = () => {
    setR(Math.round(Math.random() * 255));
    setG(Math.round(Math.random() * 255));
    setB(Math.round(Math.random() * 255));
  };

  return (
    <>
      <p>3 - зміна кольору тексту при кліку на ньому</p>
      <button onClick={changeColor}>CLick</button>
      <div
        style={{
          width: 30,
          height: 30,
          border: '2px solid black',
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
        }}
      ></div>
    </>
  );
}
