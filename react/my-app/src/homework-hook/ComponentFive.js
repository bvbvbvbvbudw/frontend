import React,{useState} from 'react';
import cat from './img/img-cat.png';
import fish from './img/img-fish.png';

export default function ComponentFive () {
    const [show, setShow] = useState('block');

    const clickCat = () => {
        const eat = document.getElementById('eat');
        eat.innerText = 'нямнямням';
        setShow('none')
    }

    return(<>
    <center>
        <p>5 - є рибка і кіт. клікаєм по коту і він їсть рибку </p>
        <img src={cat} onClick={clickCat}/>
        <p id='eat'></p>
        <img src={fish} style={{display: show}}/>
    </center>
    </>)
}