import React from 'react';

export default function Img ({url, text}) {

    return(<>
    
    <img src={url} alt={text} style={{width:80, borderRadius: '50%'}}/>
    
    </>)
}