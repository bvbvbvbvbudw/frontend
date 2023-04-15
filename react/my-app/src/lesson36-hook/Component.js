// import React from 'react';
import React, { useState } from 'react';

function Component(props) {

    const [value, setValue] = useState(props.start);
    const [btText, setBtText] = useState('First Text');
    const [btColor, setBtColor] = useState('red');
    const [scale, setScale] = useState('1.0');
    const [colorTwo, setColorTwo] = useState('purple');

    const btClickScale = () => {
        setScale('1.2');
        setColorTwo('white')
    }

    const btClick = () => {
        setBtText('Second Text')
        setBtColor('green')
    }
    const btClickValue = () => {
        setValue(value + 1)
    }

    return (<>
        <button onClick={btClickValue}>{value}</button>
        <button style={{ backgroundColor: btColor }} onClick={btClick}>{btText}</button>
        <button style={{ scale: scale, backgroundColor: colorTwo }} onClick={btClickScale}>Click Me</button>
    </>)
}

export default Component