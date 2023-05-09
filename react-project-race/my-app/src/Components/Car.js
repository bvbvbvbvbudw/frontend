import React, { useState, useEffect, useRef } from 'react';
import '../Styles/style.css';
import Control from './Control';

export default function Car(props) {
    const [currentButton, setCurrentButton] = useState('')
    const [outRoad, setOutRoad] = useState('')
    const [positionCar, setPositionCar] = useState(0)
    const [carRect, setCarRect] = useState(null);
    const carRef = useRef(null);

    useEffect(() => {
        setCarRect(carRef.current.getBoundingClientRect())
        const handlerKeyDown = (event) => {
            switch (event.key) {
                case 'a':
                    setCurrentButton('a')
                    setPositionCar(prevPosition => prevPosition - 30)
                    break
                case 'd':
                    setCurrentButton('d')
                    setPositionCar(prevPosition => prevPosition + 30)
                    break
            }
        }

        if (positionCar > 600 || positionCar < -600) {
            setOutRoad('active')
        } else setOutRoad('')

        document.addEventListener('keydown', handlerKeyDown);

        return () => {
            document.removeEventListener('keydown', handlerKeyDown)
        }
    }, [positionCar])

    const handleButtonClick = (currentButton) => {
        setCurrentButton(currentButton);

        switch (currentButton) {
            case 'a':
                setPositionCar(prevPosition => prevPosition - 30)
                break
            case 'd':
                setPositionCar(prevPosition => prevPosition + 30)
                break
            case 'stop':
                alert('stop')
        }
    }

    return (
        <>
            <div className={`car ${outRoad}`} style={{ marginLeft: `${positionCar}px` }} id='car' ref={carRef}></div>
            <Control onChange={handleButtonClick} />
            {props.onChangePositionCar && props.onChangePositionCar(positionCar)}
            {props.onChangeRectCar && props.onChangeRectCar(carRect)}
        </>
    )
}
