import React, { useState, useEffect, useRef } from 'react';
import '../Styles/style.css';
import Control from './Control';
import sedan from '../images/car/sedan.png';
import speedster from '../images/car/speedster.png';
import classic from '../images/car/classic.png';
export default function Car(props) {
    const [currentButton, setCurrentButton] = useState('');
    const [outRoad, setOutRoad] = useState('');
    const [positionCar, setPositionCar] = useState(0);
    const [carRect, setCarRect] = useState(0);
    const carRef = useRef(null);
    const cars = {
        classic: classic,
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
                    setCurrentButton('a');
                    setPositionCar(prevPosition => prevPosition - 30);
                    break;
                case 'd':
                    setCurrentButton('d');
                    setPositionCar(prevPosition => prevPosition + 30);
                    break;
            };
        };
        if (positionCar > 600 || positionCar < -600) {
            setOutRoad('active');
        } else setOutRoad('');
        const containerWidth = 900;
        const containerLeftMargin = (window.innerWidth - containerWidth) / 2;
        const containerRightMargin = window.innerWidth - containerWidth - containerLeftMargin;
        if (carRect.x > containerWidth + containerRightMargin || carRect.x < containerLeftMargin) {
            setPositionCar(0);
          };
        document.addEventListener('keydown', handlerKeyDown);
        return () => {
            document.removeEventListener('keydown', handlerKeyDown);
        };
    }, [positionCar]);

    const handleButtonClick = (currentButton) => {
        setCurrentButton(currentButton);

        switch (currentButton) {
            case 'a':
                setPositionCar(prevPosition => prevPosition - 30);
                break;
            case 'd':
                setPositionCar(prevPosition => prevPosition + 30);
                break;
        }
    }

    return (
      <>
        <img className={`car ${outRoad}`} style={{ marginLeft: `${positionCar}px` }} id='car' ref={carRef} src={cars[choise]}/>
        <div className='container-choise'>
            <p>Оберiть машину</p>
            <select onChange={choiseCar}>
                <option selected value='classic'>classic</option>
                <option value='sedan'>sedan</option>
                <option value='speedster'>speedster</option>
            </select>
        </div>
        <Control onChange={handleButtonClick} />
      </>
    )
}
