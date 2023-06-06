import React, { useState, useEffect, useRef } from 'react';
import '../Styles/style.css';
import Control from './Control';
import sedan from '../images/car/sedan.png';
import speedster from '../images/car/speedster.png';
import classic from '../images/car/classic.png';

export default function Car(props) {
    const containerWidth = 900;
    const containerLeftMargin = (window.innerWidth - containerWidth) / 2;
    const containerRightMargin = window.innerWidth - containerWidth - containerLeftMargin;
    const [positionCar, setPositionCar] = useState({x: 0, y: 720});
    const [outRoad, setOutRoad] = useState('');
    const [carRect, setCarRect] = useState(0);
    const carRef = useRef(null);
    const cars = {
        default: classic,
        sedan: sedan,
        speedster: speedster,
      };
      const [choise, setChoise] = useState('sedan');
      const choiseCar = (event) => {
        setChoise(event.target.value);
      };
    
    useEffect(() => {
        setCarRect(carRef.current.getBoundingClientRect());
        props.onChangeRectCar(carRect);
        const handlerKeyDown = (event) => {
            switch (event.key) {
                case 'a':
                    setPositionCar(prevPosition => ({...prevPosition, x: prevPosition.x - 30}));
                    break;
                case 'd':
                    setPositionCar(prevPosition => ({...prevPosition, x: prevPosition.x + 30}));
                    break;
                case 'w':
                    setPositionCar(prevPosition => ({...prevPosition, y: prevPosition.y - 30}));
                    break;
                case 's':
                    setPositionCar(prevPosition => ({...prevPosition, y: prevPosition.y + 30}));
                    break;
            };
        };
        if (positionCar.x < -270 || positionCar.x > 360) {
            setOutRoad('active');
        } else setOutRoad('');
        if (carRect.x > containerWidth + containerRightMargin || carRect.x < containerLeftMargin) {
            setPositionCar({x:0, y:720});
          };
          
        document.addEventListener('keydown', handlerKeyDown);
        return () => {
            document.removeEventListener('keydown', handlerKeyDown);
        }}, [positionCar]);

    const handleButtonClick = (currentButton) => {
        switch (currentButton) {
            case 'a':
                setPositionCar(prevPosition => ({...prevPosition, x: prevPosition.x - 30}));
                break;
            case 'd':
                setPositionCar(prevPosition => ({...prevPosition, x: prevPosition.x + 30}));
                break;
            case 'w':
                setPositionCar(prevPosition => ({...prevPosition, y: prevPosition.y - 30}));
                break;
            case 's':
                setPositionCar(prevPosition => ({...prevPosition, y: prevPosition.y + 30}));
                break;
        }}

    return (
      <>
        <img className={`car ${outRoad}`} style={{ left: `${positionCar.x}px`, top: `${positionCar.y}px` }} id='car' ref={carRef} src={cars[choise]}/>
        <div className='container-choise'>
            <p>Оберiть машину</p>
            <select onChange={choiseCar}>
                <option value='default'>classic</option>
                <option value='sedan'>sedan</option>
                <option value='speedster'>speedster</option>
            </select>
        </div>
        <Control onChange={handleButtonClick} />
      </>
    )
}
