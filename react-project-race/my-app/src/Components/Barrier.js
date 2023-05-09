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
        setBarrierRectOne(barrierRefOne?.current.getBoundingClientRect());
        setBarrierRectTwo(barrierRefTwo?.current.getBoundingClientRect());
        setBarrierRectThree(barrierRefThree?.current.getBoundingClientRect());
    }, []);

    useEffect(() => {


        const interval = setInterval(() => {
            const random = Math.floor(Math.random() * arr.length);
            const randomPoss = Math.floor(Math.random() * 16) * 30 - 230;
            setPositionBarrier(randomPoss);
            setRandomNumber(random);
            props.onPositionChange(positionBarrier, positionBarrierOne, positionBarrierTwo);
        }, 6000);

        const intervalOne = setInterval(() => {
            const random = Math.floor(Math.random() * arr.length);
            const randomPoss = Math.floor(Math.random() * 16) * 30 - 230;
            setPositionBarrierOne(randomPoss);
            setRandomNumberOne(random);
            props.onPositionChange(positionBarrier, positionBarrierOne, positionBarrierTwo);
        }, 6000);

        const intervalTwo = setInterval(() => {
            const random = Math.floor(Math.random() * arr.length);
            const randomPoss = Math.floor(Math.random() * 16) * 30 - 230;
            setPositionBarrierTwo(randomPoss);
            setRandomNumberTwo(random);
            props.onPositionChange(positionBarrier, positionBarrierOne, positionBarrierTwo);
        }, 6000);

        return () => {
            clearInterval(interval);
            clearInterval(intervalOne);
            clearInterval(intervalTwo);
        };
    }, [props]);


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
            {props.onChangeRectBar && props.onChangeRectBar(barrierRectOne, barrierRectTwo, barrierRectThree)}

        </>
    );
}
