import React, { useState } from 'react';


export default function ComponentSeven() {

    const [r1, setR1] = useState(255);
    const [g1, setG1] = useState(255);
    const [b1, setB1] = useState(255);

    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);

    const changeColorClick = () => {
        setR1(r);
        setG1(g);
        setB1(b);


        setR(Math.round(Math.random() * 255));
        setG(Math.round(Math.random() * 255));
        setB(Math.round(Math.random() * 255));

    }

    return (<>
    <p>7 - є квардат чорний - клікаєм по ньому і він стає іншого кольору а все навколо стає чорне і так повторюєм тільки колір міняєм</p>
        <div className='container-fill' style={{ backgroundColor: `rgb(${r1}, ${g1}, ${b1})` }}>
            <div className='container-seven' style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} onClick={changeColorClick}></div>
        </div>
    </>)
}