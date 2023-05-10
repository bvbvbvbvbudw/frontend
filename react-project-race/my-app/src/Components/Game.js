import React, { useState, useRef, useEffect } from "react";
import Barrier from "./Barrier";
import Car from "./Car";
import "../Styles/style.css";

export default function Game(props) {
    // const [positionCar, setPositionCar] = useState(0);
    // const handleChangePositionCar = (newPosition) => {
    //     setPositionCar(newPosition);
    // };

    const [carRect, setCarRect] = useState(0);
    const onChangeRectCar = (newCarRect) => {
        setCarRect(newCarRect)
    }

    // const [barrier, setBarrier] = useState(0)
    // const [barrier2, setBarrier2] = useState(0)
    // const [barrier3, setBarrier3] = useState(0)
    // const onPositionChange = (positionBarrier, positionBarrierOne, positionBarrierTwo) => {
    //     setBarrier(positionBarrier)
    //     setBarrier2(positionBarrierOne)
    //     setBarrier3(positionBarrierTwo)
    // }

    const [barrierRectOne, setBarrierRectOne] = useState(0)
    const [barrierRectTwo, setBarrierRectTwo] = useState(0)
    const [barrierRectThree, setBarrierRectThree] = useState(0)

    const onChangeRectBar = (newRectBarOne, newRectBarTwo, newRectBarThree) => {
        setBarrierRectOne(newRectBarOne)
        setBarrierRectTwo(newRectBarTwo)
        setBarrierRectThree(newRectBarThree)
    }
    // const onChangeRectBar = (barrierRectOne, barrierRectTwo, barrierRectThree) => {
    //     setBarrierRectOne(barrierRectOne)
    //     setBarrierRectTwo(barrierRectTwo)
    //     setBarrierRectThree(barrierRectThree)
    //     console.log(barrierRectOne)
    // }
    const prom = 64;
    const intInfo = setInterval(() => {
        // console.log(barrierRectOne)
        // console.log(barrierRectTwo)
        // console.log(barrierRectThree)
            // console.log(carRect)
    }, 1000);
    // console.log(barrierRectOne)
    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //       const intervalPos = setInterval(() => {
    //         setBarrierRectOne(barrierRefOne?.current.getBoundingClientRect());
    //         setBarrierRectTwo(barrierRefTwo?.current.getBoundingClientRect());
    //         setBarrierRectThree(barrierRefThree?.current.getBoundingClientRect());
    //       }, 1000);

    //       return () => clearInterval(intervalPos);
    //     }, 13000);

    //     return () => clearTimeout(timeoutId);
    //   }, []);
    // console.log(carRect)

    useEffect(() => {
        // console.log(carRect)

    })
    // useEffect(() => {
    //     const timeoutId = setTimeout(() => {
    //       const intervalId = setInterval(() => {
    //         if (
    //             barrierRectOne.left < carRect.right &&
    //             barrierRectOne.right > carRect.left &&
    //             barrierRectOne.top < carRect.bottom &&
    //             barrierRectOne.bottom > carRect.top
    //         ) {
    //             alert("Intersection detected");

    //         }
    //       }, 1000);

    //       return () => clearInterval(intervalId);
    //     }, 2000);

    //     return () => clearTimeout(timeoutId);
    //   }, [barrierRectOne, barrierRectTwo, carRect]);


    useEffect(() => {
        const intervalId = setInterval(() => {
          if (
            barrierRectOne.x < carRect.x + carRect.width &&
            barrierRectOne.x + barrierRectOne.width > carRect.x &&
            barrierRectOne.y < carRect.y + carRect.height &&
            barrierRectOne.y + barrierRectOne.height > carRect.y &&
            barrierRectTwo.x < carRect.x + carRect.width &&
            barrierRectTwo.x + barrierRectTwo.width > carRect.x &&
            barrierRectTwo.y < carRect.y + carRect.height &&
            barrierRectTwo.y + barrierRectTwo.height > carRect.y
          ) {
            alert("Столкновение!");
          }
        }, 1000);

        return () => clearInterval(intervalId);
      }, [barrierRectOne, barrierRectTwo, carRect]);

    // if(carRect.x)

    // сделать логику столкновение, узнать как сделать чтобы было изнчально 0пх вместо того что оно отображает от размера окна
    return (
        <>
            <Barrier
                // onPositionChange={onPositionChange}
                onChangeRectBar={onChangeRectBar}
            />
            <Car
                // onChangePositionCar={handleChangePositionCar}
                onChangeRectCar={onChangeRectCar}
            />
        </>
    );
}
