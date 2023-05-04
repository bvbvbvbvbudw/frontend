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
import Icon from "../../Elements/Icon";

import '../../styles/Default.css';
import '../../styles/Map.css';

export default function Map(){

    return(<>
    
    <Section className="section  section--map">
        <Container className="container">
            <div className="map">
                <TitleH2 className="map__title">
                    <div><Icon className="fas fa-map-marker-alt"></Icon></div>
                    <a href="https://goo.gl/maps/F8YpeCGqwrG2" target="_blank">Open Map</a>
                </TitleH2>
            </div>
        </Container>
    </Section>
    
    </>)
}