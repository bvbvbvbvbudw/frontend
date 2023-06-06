import React, { useState, useEffect } from "react";
import Barrier from "./Barrier";
import Car from "./Car";
import Road from "./Road";
import "../Styles/style.css";

export default function Game(props) {
  const containerWidth = 900;
  const containerLeftMargin = (window.innerWidth - containerWidth) / 2;
  const containerRightMargin = window.innerWidth - containerWidth - containerLeftMargin;

  const [startAnimation, setStartAnimation] = useState('');
  const [startAnimationImg, setStartAnimationImg] = useState('');
  const [displayRun, setDisplayRun] = useState('block');
  const [loseOrWin, setLoseOrWin] = useState('');
  const [textLose, setTextLose] = useState('');
  const [points, setPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90);
  const [isRunning, setIsRunning] = useState(false);
  const [timeStart, setTimeStart] = useState(false);
  const [crash, setIsCrash] = useState(false);

  const startGame = () => {
    setIsCrash(false);
    setIsRunning(true);
    setTimeStart(true);
    setStartAnimation('start');
    setStartAnimationImg('activePng')
    setDisplayRun('none');
    setTextLose('');
  }

  const [carRect, setCarRect] = useState(0);
  const onChangeRectCar = (newCarRect) => {
    setCarRect(newCarRect);
  };
  const [barrierRectOne, setBarrierRectOne] = useState(null);
  const [barrierRectTwo, setBarrierRectTwo] = useState(null);
  const [barrierRectThree, setBarrierRectThree] = useState(null);
  const [barrierRectFour, setBarrierRectFour] = useState(null);

  const onChangeRectBar = (newRectBarOne, newRectBarTwo, newRectBarThree, newRectBarFour) => {
    setBarrierRectOne(newRectBarOne);
    setBarrierRectTwo(newRectBarTwo);
    setBarrierRectThree(newRectBarThree);
    setBarrierRectFour(newRectBarFour);
  };

  useEffect(() => {
    const intInfo = setInterval(() => {
      onChangeRectBar(
        barrierRectOne,
        barrierRectTwo,
        barrierRectThree,
        barrierRectFour
      );
    }, 100);
    return () => clearInterval(intInfo);
  }, [barrierRectOne, barrierRectTwo, barrierRectThree, barrierRectFour]);

  useEffect(() => {
    if (timeStart) {
      const intTime = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => {
        clearInterval(intTime);
      };
    }
  },[timeLeft,timeStart])

  useEffect(() => {
    if (carRect && barrierRectOne) {
      const distance = 0.2;
      if (
        carRect.left < barrierRectOne.right - distance &&
        carRect.right > barrierRectOne.left + distance &&
        carRect.top < barrierRectOne.bottom - distance &&
        carRect.bottom > barrierRectOne.top + distance
      ) {
        setIsCrash(true);
      }
    }
    if (carRect && barrierRectTwo) {
      const distance = 10;
      if (
        carRect.left < barrierRectTwo.right - distance &&
        carRect.right > barrierRectTwo.left + distance &&
        carRect.top < barrierRectTwo.bottom - distance &&
        carRect.bottom > barrierRectTwo.top + distance
      ) {
        setIsCrash(true);
      }
    }
    if (carRect && barrierRectThree) {
      const distance = 10;
      if (
        carRect.left < barrierRectThree.right - distance &&
        carRect.right > barrierRectThree.left + distance &&
        carRect.top < barrierRectThree.bottom - distance &&
        carRect.bottom > barrierRectThree.top + distance
      ) {
        setIsCrash(true);
      }
    }
    

    if (carRect.x > containerWidth + containerRightMargin || carRect.x < containerLeftMargin) {
      setIsCrash(true);
    };
    if (timeLeft == 0) {
      setTimeLeft(90);
      setPoints(0);
      setTimeStart(false);
      setIsRunning(false);
      setStartAnimation('');
      setStartAnimationImg('');
      setDisplayRun('block');
      setLoseOrWin('text-win');
      setTextLose('Ви виграли!');
    };
    if(crash){
      setIsCrash(false);
      setTimeStart(false);
      setIsRunning(false);
      setTimeLeft(90);
      setPoints(0);
      setStartAnimation('');
      setStartAnimationImg('');
      setDisplayRun('block');
      setLoseOrWin('text-lose');
      setTextLose('Ви програли');
    };

    if (carRect && barrierRectFour) {
      if (
        carRect.left < barrierRectFour.right &&
        carRect.right > barrierRectFour.left &&
        carRect.top < barrierRectFour.bottom &&
        carRect.bottom > barrierRectFour.top
      ) {
        setPoints(points + 1)
      };
    };
  }, [carRect, barrierRectOne]);
  return (
    <>
      <Road className={`track ${startAnimation}`}>
        <Barrier
          onChangeRectBar={onChangeRectBar}
          isRunning={isRunning}
          classNameOne={`barriers ${startAnimationImg}`}
          classNameTwo={`barriers ${startAnimationImg}`}
          classNameThree={`barriers ${startAnimationImg}`} />
        <Car onChangeRectCar={onChangeRectCar}/>
      </Road>
      <div className="wrapper">
        <p className="score">Рахунок: {points}</p>
        <p className="time">Залишилось часу: {timeLeft}</p>

        <div className="container-start" style={{ display: displayRun }}>
          <h2 className="title">Хочеш пограти в гру?</h2>
          <button onClick={startGame} className="btn-start">Почати</button>
          <p>Керування: на клавiшу "A" та "D", або кнопки якi внизу</p>
          <p className={loseOrWin}>{textLose}</p>
        </div>
      </div>
    </>
  );
}