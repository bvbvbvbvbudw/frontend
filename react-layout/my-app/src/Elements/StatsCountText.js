import React from "react";

export default function StatsCountText({classNameOne,classNameTwo, textOne, textTwo}) {

    return (<>
        <div className={classNameOne}>{textOne}</div>
        <div className={classNameTwo}>{textTwo}</div>
    </>)
}