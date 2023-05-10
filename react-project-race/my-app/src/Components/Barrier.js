import React, { useState, useEffect, useRef } from "react";
import barrier from '../images/barrier/barrier.png';
import human from '../images/barrier/human.png';

export default function Barrier(props) {
    var arr = [barrier, human]

    const [randomNumber, setRandomNumber] = useState(0);
    const [positionBarrier, setPositionBarrier] = useState(0)

    const [randomNumberOne, setRandomNumberOne] = useState(0);
    const [positionBarrierOne, setPositionBarrierOne] = useState(0)

    const [randomNumberTwo, setRandomNumberTwo] = useState(0);
    const [positionBarrierTwo, setPositionBarrierTwo] = useState(0)

    const barrierRefOne = useRef(null);
    const barrierRefTwo = useRef(null);
    const barrierRefThree = useRef(null);

    const [barrierRectOne, setBarrierRectOne] = useState(0)
    const [barrierRectTwo, setBarrierRectTwo] = useState(0)
    const [barrierRectThree, setBarrierRectThree] = useState(0)
    useEffect(() => {
        const intRect = setInterval(() => {
            const rectOne = barrierRefOne.current.getBoundingClientRect();
            const rectTwo = barrierRefTwo.current.getBoundingClientRect();
            const rectThree = barrierRefThree.current.getBoundingClientRect();
            setBarrierRectOne(rectOne);
            setBarrierRectTwo(rectTwo);
            setBarrierRectThree(rectThree);
        }, 1000);

        return () => {
            clearInterval(intRect);
        };
    }, []);

    useEffect(() => {
        const intSend = setInterval(() => {
            props.onChangeRectBar(barrierRectOne, barrierRectTwo, barrierRectThree)
        }, 1000);

    }, [barrierRectOne, barrierRectTwo, barrierRectThree]);






    useEffect(() => {
        const interval = setInterval(() => {
            const arrLength = arr.length;
            const random = Math.floor(Math.random() * arrLength);
            const randomPoss = Math.floor(Math.random() * 16) * 30 - 230;
            const randomOne = Math.floor(Math.random() * arrLength);
            const randomPossOne = Math.floor(Math.random() * 16) * 30 - 230;
            const randomThree = Math.floor(Math.random() * arrLength);
            const randomPossThree = Math.floor(Math.random() * 16) * 30 - 230;

            setPositionBarrier(randomPoss);
            setRandomNumber(random);
            setPositionBarrierOne(randomPossOne);
            setRandomNumberOne(randomOne);
            setPositionBarrierTwo(randomPossThree);
            setRandomNumberTwo(randomThree);
        }, 6000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    ;


    return (
        <>
            <img
                className="barriers activePng"
                src={`${arr[randomNumber]}`}
                alt="barrier"
                style={{ left: positionBarrier }}
                ref={barrierRefOne}
            />

            <img
                className="barriers activePng"
                src={`${arr[randomNumberOne]}`}
                alt="barrier"
                style={{ left: positionBarrierOne }}
                ref={barrierRefTwo}
            />

            <img
                className="barriers activePng"
                src={`${arr[randomNumberTwo]}`}
                alt="barrier"
                style={{ left: positionBarrierTwo }}
                ref={barrierRefThree}
            />
            {/* {props.onChangeRefBar && props.onChangeRectBar(barrierRectOne, barrierRectTwo, barrierRectThree)} */}

        </>
    );
}
