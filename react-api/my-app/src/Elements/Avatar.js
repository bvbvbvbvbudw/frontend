import React from 'react';

import avatar1 from '../images/avatar_1.png';
import avatar2 from '../images/avatar_2.png';
import avatar3 from '../images/avatar_3.png';
import avatar4 from '../images/avatar_4.png';

const avatars = [avatar1, avatar2, avatar3, avatar4];

export default function Avatar ({numAv}) {
    return (
        <img src={avatars[numAv - 1]} alt={`Avatar ${numAv}`} className='avatar-reviews' style={{width:80}}/>
    );
}
