import React from 'react';

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
import ReviewsTextAuthor from '../../Elements/ReviewsTextAuthor';

import LogosImg from '../../Elements/LogosImg';

import PhotoOne from '../../images/logos/1.png';
import PhotoTwo from '../../images/logos/2.png';
import PhotoThird from '../../images/logos/3.png';
import PhotoFour from '../../images/logos/4.png';
import PhotoFive from '../../images/logos/5.png';
import PhotoSix from '../../images/logos/6.png';

import '../../styles/Default.css';
import '../../styles/Logos.css'

export default function Brands() {

    return (<>

        <Section className="section  section--gray">
            <Container className="container">

                <div class="logos">
                    <LogosImg src={PhotoOne} />

                    <LogosImg src={PhotoTwo} />

                    <LogosImg src={PhotoThird} />

                    <LogosImg src={PhotoFour} />

                    <LogosImg src={PhotoFive} />

                    <LogosImg src={PhotoSix} />

                </div>

            </Container>
        </Section>

    </>)
}