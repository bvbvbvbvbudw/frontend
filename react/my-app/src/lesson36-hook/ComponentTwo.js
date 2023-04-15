import React, { useState } from 'react';
import Button from './ComponentTwoButton';
import Light from './ComponentTwoLight';


// function Button(props) {

//     const handlerClick = () => {
//         props.onClickAct(props.btColor);
//     }

//     return (<>

//         <button style={{ backgroundColor: props.btColor, border: 'none' }} onClick={handlerClick}>{props.textColor}</button>

//     </>)
// }

// function Light(props) {



//     return (<>

//         <div className='light' style={{ backgroundColor: props.btColor }}></div>

//     </>)
// }

function ComponentTwo(props) {

    const [lightColor, setLightColor] = useState('green')

    const handlerColor = (color) => {
        setLightColor(color);
    }

    return (<>

        <Button btColor='red' textColor='red' onClickAct={handlerColor} />
        <Button btColor='yellow' textColor='yellow' onClickAct={handlerColor}/>
        <Button btColor='green' textColor='green' onClickAct={handlerColor}/>
        <Light btColor={lightColor}/>

    </>)
}
export default ComponentTwo;