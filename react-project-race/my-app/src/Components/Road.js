import React, { useRef, useEffect, useState } from 'react';

export default function Road ({children , className}, props) {

    return (
        <div className={className} id='container' >
            {children}
        </div>
    );
}
