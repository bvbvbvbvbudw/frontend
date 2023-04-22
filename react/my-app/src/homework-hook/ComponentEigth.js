import React,{useState} from "react";
import mazda from './img/Mazda-Logo-2015.png';
import bmw from './img/bmw.png';
import lada from './img/Lada-Logo.png';
import mers from './img/mers.png';


export default function ComponentEigth () {
    var arrImage = [mazda,bmw,lada,mers]

    const [i, setI] = useState(Math.round(Math.random() * (arrImage.length -1)))

    const randomNum = () => {
        setI(Math.round(Math.random() * (arrImage.length -1)))
    }

    return(<>
        <p>8 - є авто - при кліку міняяєм лого авто.</p>
        <img src={arrImage[i]} onClick={randomNum} style={{width:100,height:100}}/>
    </>)
}