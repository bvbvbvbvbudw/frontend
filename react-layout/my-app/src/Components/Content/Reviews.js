import React from "react";

import TitleH1 from '../../Elements/TitleH1';
import TitleH2 from '../../Elements/TitleH2';
import TitleH3 from '../../Elements/TitleH3';
import Div from '../../Elements/Div';
import Container from '../../Elements/Container';
import A from '../../Elements/A';
import P from '../../Elements/P';
import Img from '../../Elements/Img';
import Span from '../../Elements/Span';
import Section from '../../Elements/Section';

import ReviewsTextAuthor from "../../Elements/ReviewsTextAuthor";

import PhotoOne from '../../images/avatar.png';

import '../../styles/Default.css';
import '../../styles/Reviews.css';

export default function Reviews() {


    return (<>

        <Section className="section  section--gray">
            <Container className="container">

                <Div className="reviews">
                    <A className={'reviews__btn reviews__btn--prev'} href={'#'} text={'Prev'}/>
                    <A className={'reviews__btn reviews__btn--next'} href={'#'} text={'Next'}/>


                    <Div className="reviews__item">
                        <Img className="reviews__photo" src={PhotoOne} alt="" />

                        <ReviewsTextAuthor classNameOne={'reviews__text'} classNameTwo={'reviews__author'} textOne={'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”'} textTwo={'Jon Doe'} />
                    </Div>
                </Div>

            </Container>
        </Section>

    </>)
}