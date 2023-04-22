import React, {useState, useEffect} from 'react';
import cat from './img/img-cat.png';
import ball from './img/img-ball.png';
import coin from './img/img-coin.jpg';
import fish from './img/img-fish.png';

export default function Component () {
    const [randomNum, setRandomNum] = useState(null);
    const arrImage = [cat, ball, coin, fish];

    function randomImage () {
        setRandomNum(Math.round(Math.random() * (arrImage.length -1)));
    }

    return(
        <>
            <p>1 при кліку виводиться рандомна картинка</p>
            <button onClick={randomImage}>Click</button>
            <img src={arrImage[randomNum]} />
        </>
    )
}
