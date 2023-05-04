import React from "react";

export default function SliderNumText({classNameFirst, classNameSecond, TextFirst, TextSecond}) {

    return (<>

        <span className={classNameFirst}>{TextFirst}</span>
        <span className={classNameSecond}>{TextSecond}</span>

    </>)
}