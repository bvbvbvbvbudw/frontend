import React from 'react';

import TitleH1 from './TitleH1';
import TitleH2 from './TitleH2';
import TitleH3 from './TitleH3';
import Div from './Div';
import Container from './Container';
import A from './A';
import P from './P';
import Img from './Img';
import Span from './Span';
import Section from './Section';
import ReviewsTextAuthor from './ReviewsTextAuthor';
import SectionHeader from "./SectionHeader";

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