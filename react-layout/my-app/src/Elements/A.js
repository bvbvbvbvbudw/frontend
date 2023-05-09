import React from 'react';

export default function A ({className , target , href , text, children, id}) {

    return(<>
        <a className={className} id={id} target={target} href={href}>{text} {children}</a>
    </>)
}