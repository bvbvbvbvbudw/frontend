import React,{useState} from 'react';

function Button(props) {

    const handlerClick = () => {
        props.onClickAct(props.btColor);
    }

    return (<>

        <button style={{ backgroundColor: props.btColor, border: 'none' }} onClick={handlerClick}>{props.textColor}</button>

    </>)
}

export default Button