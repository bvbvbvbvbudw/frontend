import React from 'react';

export default function A ({className , target , href , text}) {

    return(<>
        <a className={className} target={target} href={href}>{text}</a>
    </>)
}