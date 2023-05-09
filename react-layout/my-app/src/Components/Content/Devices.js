import React from "react";

import TitleH2 from '../../Elements/TitleH2';
import TitleH3 from '../../Elements/TitleH3';
import Div from '../../Elements/Div';
import Container from '../../Elements/Container';
import Img from '../../Elements/Img';
import Section from '../../Elements/Section';

import PhotoOne from '../../images/ipad.png';
import PhotoTwo from '../../images/iphone.png';

import '../../styles/Default.css';
import '../../styles/Devices.css';
import '../../styles/MediaScreen.css';


export default function Devices() {

    return (<>

        <Section className="section  section--devices">
            <Container className="container">

                <Div className="section__header">
                    <TitleH3 className="section__suptitle">For all devices</TitleH3>
                    <TitleH2 className="section__title">Unique design</TitleH2>
                </Div>

                <Div className="devices">
                    <Img className="devices__item" src={PhotoOne} alt="" />
                    <Img className="devices__item  devices__item--iphone" src={PhotoTwo} alt="" />
                </Div>

            </Container>
        </Section>

    </>)
}