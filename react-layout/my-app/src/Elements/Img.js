import React from "react";

export default function Img ({className, src, alt}){

    return(<>
    
        <img className={className} src={src} alt={alt}/>

    </>)
}