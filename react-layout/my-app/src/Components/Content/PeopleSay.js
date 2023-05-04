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
import ReviewsTextAuthor from '../../Elements/ReviewsTextAuthor';
import SectionHeader from "../../Elements/SectionHeader";

import PeopleSayElements from "../../Elements/PeopleSayElements";

import PhotoOne from '../../images/clients/1.png';
import PhotoTwo from '../../images/clients/2.png';
import PhotoThree from '../../images/clients/3.png';
import PhotoFour from '../../images/clients/4.png';

import '../../styles/Default.css';
import '../../styles/Clients.css';

export default function PeopleSay() {

    return (<>

        <Section className="section  section--clients">
            <Container className="container">

                <SectionHeader suptitle={'Happy Clients'} title={'What people say'} />
                <Div className="clients">


                    <PeopleSayElements srcOne={PhotoOne} name={'Matthew Dix'} prof={'Graphic Design'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'} />

                    <PeopleSayElements srcOne={PhotoTwo} name={'Nick Karvounis'} prof={'Graphic Design'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'} />

                    <PeopleSayElements srcOne={PhotoThree} name={'Jaelynn Catillo'} prof={'Graphic Design'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'} />

                    <PeopleSayElements srcOne={PhotoFour} name={'Mike Petrucci'} prof={'Graphic Design'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'} />

                </Div>
            </Container>
        </Section>

    </>)
}