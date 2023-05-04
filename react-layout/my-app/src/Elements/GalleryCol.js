import React from "react";

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

export default function GalleryCol({srcOne, titleOne, textOne, srcTwo, titleTwo, textTwo}) {

    return (<>
        <Div className="works__col">
            <Div className="works__item">
                <Img className="works__image" src={srcOne} alt="" />
                <Div className="works__info">
                    <Div className="works__title">{titleOne}</Div>
                    <Div className="works__text">{textOne}</Div>
                </Div>
            </Div>
            <Div className="works__item">
                <Img className="works__image" src={srcTwo} alt="" />
                <Div className="works__info">
                    <Div className="works__title">{titleTwo}</Div>
                    <Div className="works__text">{textTwo}</Div>
                </Div>
            </Div>
        </Div>


    </>)
}