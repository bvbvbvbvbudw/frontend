import React from "react";

export default function Control(props) {

    const handleLeftButtonClick = () => {
        props.onChange('a');
    }

    const handleRightButtonClick = () => {
        props.onChange('d');
    }

    return (<>
        <div className="container-btn">
            <button className="btn" onClick={handleLeftButtonClick}>left</button>
            <button className="btn" onClick={handleRightButtonClick}>right</button>
        </div>
    </>)
}
