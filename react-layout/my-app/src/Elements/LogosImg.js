import React from 'react';

export default function LogosImg({src}) {

    return (<>

        <div className="logos__item">
            <img className="logos__img" src={src} alt="" />
        </div>

    </>)
}