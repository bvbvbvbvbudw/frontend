import React, { useState, useEffect, useRef } from "react";
import barrier from '../images/barrier/barrier.png';
import human from '../images/barrier/human.png';
import score from '../images/score.png';
import house from '../images/barrier/house.webp';
import humanOne from '../images/barrier/human1.png';
import tree from '../images/barrier/tree.png';
import humanTwo from '../images/barrier/human2.png';
import humanThree from '../images/barrier/human3.png'

export default function Barrier(props) {

    var arr = [barrier, human, house, humanOne, humanTwo,humanThree , tree];
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        setIsRunning(props.isRunning);
    }, [props.isRunning]);

    const [randomNumber, setRandomNumber] = useState(0);
    const [randomNumberOne, setRandomNumberOne] = useState(0);
    const [positionBarrier, setPositionBarrier] = useState(0)
    const [positionBarrierOne, setPositionBarrierOne] = useState(0);
    const [randomNumberTwo, setRandomNumberTwo] = useState(0);
    const [positionBarrierTwo, setPositionBarrierTwo] = useState(0);
    const [positionBarrierThree, setPositionBarrierThree] = useState(0);

    const barrierRefOne = useRef(null);
    const barrierRefTwo = useRef(null);
    const barrierRefThree = useRef(null);
    const barrierRefFour = useRef(null);
    const [barrierRectOne, setBarrierRectOne] = useState(0);
    const [barrierRectTwo, setBarrierRectTwo] = useState(0);
    const [barrierRectThree, setBarrierRectThree] = useState(0);
    const [barrierRectFour, setBarrierRectFour] = useState(0);
    const [isRectUpdated, setIsRectUpdated] = useState(false);

    useEffect(() => {
        const intRect = setInterval(() => {
            const rectOne = barrierRefOne.current.getBoundingClientRect();
            const rectTwo = barrierRefTwo.current.getBoundingClientRect();
            const rectThree = barrierRefThree.current.getBoundingClientRect();
            const rectFour = barrierRefFour.current.getBoundingClientRect();
            setBarrierRectOne(rectOne);
            setBarrierRectTwo(rectTwo);
            setBarrierRectThree(rectThree);
            setBarrierRectFour(rectFour);
            setIsRectUpdated(true);
        }, 100);

        return () => {
            clearInterval(intRect);
        };
    }, []);

    useEffect(() => {
        if (isRectUpdated) {
            props.onChangeRectBar(barrierRectOne, barrierRectTwo, barrierRectThree, barrierRectFour);
            setIsRectUpdated(false);
        }
    }, [isRectUpdated]);

    useEffect(() => {

        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                const arrLength = arr.length;
                const random = Math.floor(Math.random() * arrLength);
                const randomOne = Math.floor(Math.random() * arrLength);
                const randomThree = Math.floor(Math.random() * arrLength);

                const randomPoss = Math.floor(Math.random() * 270) - 80;
                const randomPossOne = Math.floor(Math.random() * 100) + 100;
                const randomPossThree = Math.floor(Math.random() * 100) + 150;
                const randomPossFour = Math.floor(Math.random() * 100) + 250;

                setPositionBarrier(randomPoss);
                setRandomNumber(random);
                setPositionBarrierOne(randomPossOne);
                setRandomNumberOne(randomOne);
                setPositionBarrierTwo(randomPossThree);
                setRandomNumberTwo(randomThree);
                setPositionBarrierThree(randomPossFour);
            }, 6000);
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    return (
        <>
            <img
                className={props.classNameOne}
                src={`${arr[randomNumber]}`}
                alt="barrier"
                style={{ left: positionBarrier }}
                ref={barrierRefOne}
            />

            <img
                className={props.classNameTwo}
                src={`${arr[randomNumberOne]}`}
                alt="barrier"
                style={{ left: positionBarrierOne }}
                ref={barrierRefTwo}
            />

            <img
                className={props.classNameThree}
                src={`${arr[randomNumberTwo]}`}
                alt="barrier"
                style={{ left: positionBarrierTwo }}
                ref={barrierRefThree}
            />
            <img
                className={props.classNameThree}
                src={score}
                alt="barrier"
                style={{ left: positionBarrierThree }}
                ref={barrierRefFour}
            />
        </>
    );
}



