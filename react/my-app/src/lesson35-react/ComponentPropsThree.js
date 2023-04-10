import React from 'react';

function ComponentPropsThree(props){



    let {color,text} = props;


    return (
        <>
        <div>
            <p style={{color:color}}>{text}</p>

        </div>
        </>
    )


}

export default ComponentPropsThree;

ComponentPropsThree.defaultProps = {text: 'default text',color: 'red'}