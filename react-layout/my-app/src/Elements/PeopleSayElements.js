import React from 'react';

import Div from './Div';

import Img from './Img';

export default function PeopleSayElements({ srcOne, name, prof, text }) {

    return (<>
            <Div className="clients__item">
                <Img className="clients__photo" src={srcOne} alt="" />
                <Div className="clients__content">
                    <Div className="clients__name">{name}</Div>
                    <Div className="clients__prof">{prof}</Div>
                    <Div className="clients__text">{text}</Div>
                </Div>
            </Div>
    </>)
}