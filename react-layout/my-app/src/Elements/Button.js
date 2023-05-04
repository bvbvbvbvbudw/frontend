import React from "react";

export default function Button({className, type, text}){

    return(<>
    
    <button className={className} type={type}>{text}</button>

    
    </>)
}