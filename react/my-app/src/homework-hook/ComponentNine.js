import React,{useState} from 'react';
import orel from './img/orel.jpg';
import reshka from './img/reshka.jpg';

export default function ComponentNine () {


    const [text, setText] = useState('Орел')
    const [coin,setCoin] = useState(orel)
    const [drop,setDrop] = useState(Math.round(Math.random() * 2))


    const dropping = () => {

        setDrop(Math.round(Math.random() * 2))


        if(drop === 1){
            setCoin(orel)
            setText('орел')
        } else {
            setCoin(reshka)
            setText('решка')
        
        };
    }




    return(<>
        <p>9 - монетка при натискані рандомно викидати значення</p>

        <img src={coin} onClick={dropping}/>
        <p>{text}</p>
    </>)
}