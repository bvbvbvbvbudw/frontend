import React from "react";

export default function Section ({className, children}) {

    return(<>
    
        <section className={className}>{children}</section>

    </>)
}