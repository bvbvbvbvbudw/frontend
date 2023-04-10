import React from 'react';

function ComponentProps(props){



    let {color,text} = props;


    return (
        <>
        <div>
            <p style={{color:color}}>{text}</p>

        </div>
        </>
    )


}

export default ComponentProps;

ComponentProps.defaultProps = {text: 'default text',color: 'red'}