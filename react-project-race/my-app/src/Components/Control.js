import React from "react";

export default function Control(props) {

    const handleLeftButtonClick = () => {
        props.onChange('a');
    }

    const handleRightButtonClick = () => {
        props.onChange('d');
    }

    const handleStop = () => {
        props.onChange('stop');
    }

    return (<>
        <div className="container-btn">
            <button className="btn" onClick={handleLeftButtonClick}>left</button>
            <button className="btn" onClick={handleRightButtonClick}>right</button>
            <button className="btn" onClick={handleStop}>Stop/start</button>
        </div>
    </>)
}
