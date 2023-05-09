import React from "react";

import TitleH2 from '../../Elements/TitleH2';
import Container from '../../Elements/Container';
import Section from '../../Elements/Section';
import Icon from "../../Elements/Icon";

import '../../styles/Default.css';
import '../../styles/Map.css';
import '../../styles/MediaScreen.css';

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