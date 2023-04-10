import React from 'react';

function ComponentPropsTwo(props){



    let {color,text} = props;


    return (
        <>
        <div>
            <p style={{color:color}}>{text}</p>
        </div>
        </>
    )


}

export default ComponentPropsTwo;

ComponentPropsTwo.defaultProps = {text: 'default text',color: 'red'}