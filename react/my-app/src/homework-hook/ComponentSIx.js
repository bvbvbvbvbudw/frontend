import React,{useState} from 'react';
import cat from './img/img-cat.png';
import fish from './img/img-fish.png';

export default function ComponentFive () {
    const [show, setShow] = useState('block');

    const clickCat = () => {
        const eat = document.getElementById('eatCat');
        eat.innerText = 'нямнямням';
        setShow('none')
    }

    return(<>
    <center>
        <p>6 - і навпаки,,,,,</p>
        <img src={fish} onClick={clickCat}/>
        <p id='eatCat'></p>
        <img src={cat} style={{display: show}}/>
    </center>
    </>)
}