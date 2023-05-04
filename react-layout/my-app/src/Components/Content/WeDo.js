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

import PhotoOne from '../../images/wedo.jpg';
import PhotoTwo from '../../images/services/photography.png';
import PhotoThird from '../../images/services/creativity.png';
import PhotoFour from '../../images/services/webdesign.png';

import '../../styles/Default.css';
import '../../styles/WeDo.css'


export default function WeDo(){

    return(<>
    
    <Section className="section">
        <Container className="container">

            <Div className="section__header">
                <TitleH3 className="section__suptitle">Service</TitleH3>
                <TitleH2 className="section__title">what we do</TitleH2>
                <Div className="section__text">
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
                </Div>
            </Div>

            <Div className="wedo">
                <Div className="wedo__item">
                    <Img className="wedo__img" src={PhotoOne}  alt="" />
                </Div>

                <Div className="wedo__item">

                    <Div className="accordion">
                        <Div className="accordion__item">
                            <Div className="accordion__header">
                                <Img className="accordion__icon" src={PhotoTwo} alt="" />
                                <Div className="accordion__title">Photography</Div>
                            </Div>
                            <Div className="accordion__content">
                                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
                            </Div>
                        </Div>

                        <Div className="accordion__item active">
                            <Div className="accordion__header">
                                <Img className="accordion__icon" src={PhotoThird} alt="" />
                                <Div className="accordion__title">Creativity</Div>
                            </Div>
                            <Div className="accordion__content">
                                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
                            </Div>
                        </Div>

                        <Div className="accordion__item">
                            <Div className="accordion__header">
                                <Img className="accordion__icon" src={PhotoFour} alt="" />
                                <Div className="accordion__title">web design</Div>
                            </Div>
                            <Div className="accordion__content">
                                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>
                            </Div>
                        </Div>
                    </Div>

                </Div>
            </Div>
        </Container>
    </Section>
    
    </>)
}