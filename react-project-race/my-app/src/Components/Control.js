import React from "react";

export default function Control(props) {

    const handleLeftButtonClick = () => {
        props.onChange('a');
    }

    const handleRightButtonClick = () => {
        props.onChange('d');
    }

    const handleUpButtonClick = () => {
        props.onChange('w');
    }

    const handleDownButtonClick = () => {
        props.onChange('s');
    }

    return (<>
        <div className="container-btn">
            <div className="container-btn-right-left">
                <button className="btn" onClick={handleLeftButtonClick}>left</button>
                <button className="btn" onClick={handleRightButtonClick}>right</button>
            </div>

            <div className="container-btn-forward-back">
                <button className="btn-f" onClick={handleUpButtonClick}>up</button>
                <button className="btn-f" onClick={handleDownButtonClick}>down</button>
            </div>
        </div>
    </>)
}
