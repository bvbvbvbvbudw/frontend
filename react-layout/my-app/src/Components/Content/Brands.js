import React from 'react';

import Container from '../../Elements/Container';
import Section from '../../Elements/Section';
import LogosImg from '../../Elements/LogosImg';

import PhotoOne from '../../images/logos/1.png';
import PhotoTwo from '../../images/logos/2.png';
import PhotoThird from '../../images/logos/3.png';
import PhotoFour from '../../images/logos/4.png';
import PhotoFive from '../../images/logos/5.png';
import PhotoSix from '../../images/logos/6.png';

import '../../styles/Default.css';
import '../../styles/Logos.css';
import '../../styles/MediaScreen.css';


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