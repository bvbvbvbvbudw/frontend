import React, { useState, useRef, useEffect } from "react";
import Barrier from "./Barrier";
import Car from "./Car";
import "../Styles/style.css";

export default function Game(props) {    
    const [positionCar, setPositionCar] = useState(0);
    const handleChangePositionCar = (newPosition) => {
        setPositionCar(newPosition);
    };

    const [carRect, setCarRect] = useState(0);
    const onChangeRectCar = (newCarRect) => {
        setCarRect(newCarRect)
    }

    const [barrier, setBarrier] = useState(0)
    const [barrier2, setBarrier2] = useState(0)
    const [barrier3, setBarrier3] = useState(0)
    const onPositionChange = (positionBarrier, positionBarrierOne, positionBarrierTwo) => {
        setBarrier(positionBarrier)
        setBarrier2(positionBarrierOne)
        setBarrier3(positionBarrierTwo)
    }

    const [barrierRectOne, setBarrierRectOne] = useState(0)
    const [barrierRectTwo, setBarrierRectTwo] = useState(0)
    const [barrierRectThree, setBarrierRectThree] = useState(0)
    const onChangeRectBar = (barrierRectOne, barrierRectTwo, barrierRectThree) => {
        setBarrierRectOne(barrierRectOne)
        setBarrierRectTwo(barrierRectTwo)
        setBarrierRectThree(barrierRectThree)
    }
    const prom = 64;
    console.log(carRect)
    // if(carRect.x)

    // сделать логику столкновение, узнать как сделать чтобы было изнчально 0пх вместо того что оно отображает от размера окна
    return (
        <>
            <Barrier
                onPositionChange={onPositionChange}
                onChangeRectBar={onChangeRectBar}
            />
            <Car onChangePositionCar={handleChangePositionCar}
                onChangeRectCar={onChangeRectCar}
            />
        </>
    );
}
