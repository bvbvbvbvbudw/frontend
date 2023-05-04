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

import GalleryCol from "../../Elements/GalleryCol";

import PhotoOne from '../../images/works/1.jpg';
import PhotoTwo from '../../images/works/2.jpg';
import PhotoThree from '../../images/works/3.jpg';
import PhotoFour from '../../images/works/4.jpg';
import PhotoFive from '../../images/works/5.jpg';
import PhotoSix from '../../images/works/6.jpg';
import PhotoSeven from '../../images/works/7.jpg';

import '../../styles/Default.css';
import '../../styles/Works.css';

export default function Gallery() {

    return (<>

        <Section className="section">
            <Container className="container">
                <SectionHeader text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} title={"some of our work"} suptitle={'What we do'}/>
            </Container>

            <Div className="works">

                <GalleryCol srcOne={PhotoOne} srcTwo={PhotoTwo} titleOne={'Creative Designed'} titleTwo={'Creative Designed'} textOne={'Lorem ipsum dolor sit'} textTwo={'Lorem ipsum dolor sit'} />

                <GalleryCol srcOne={PhotoThree} srcTwo={PhotoFour} titleOne={'Creative Designed'} titleTwo={'Creative Designed'} textOne={'Lorem ipsum dolor sit'} textTwo={'Lorem ipsum dolor sit'} />


                <Div className="works__col">
                    <Div className="works__item">
                        <img className="works__image" src={PhotoFive} alt="" />
                            <Div className="works__info">
                                <Div className="works__title">creatively designed</Div>
                                <Div className="works__text">Lorem ipsum dolor sit</Div>
                            </Div>
                    </Div>
                </Div>

                <GalleryCol srcOne={PhotoSix} srcTwo={PhotoSeven} titleOne={'Creative Designed'} titleTwo={'Creative Designed'} textOne={'Lorem ipsum dolor sit'} textTwo={'Lorem ipsum dolor sit'} />

            </Div>
        </Section>

    </>)
}