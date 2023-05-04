import React from 'react';


export default function ServicesTextTitle({ classNameOne, classNameTwo, textOne, textTwo }) {

    return (<>
        <div className={classNameOne}>{textOne}</div>
        <div className={classNameTwo}>{textTwo}</div>
    </>)
}