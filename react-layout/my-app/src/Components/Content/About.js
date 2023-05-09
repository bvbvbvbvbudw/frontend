import React from 'react';

import TitleH2 from '../../Elements/TitleH2';
import TitleH3 from '../../Elements/TitleH3';
import Div from '../../Elements/Div';
import Container from '../../Elements/Container';
import P from '../../Elements/P';
import Img from '../../Elements/Img';
import Section from '../../Elements/Section';

import PhotoOne from '../../images/about/1.jpg';
import PhotoTwo from '../../images/about/2.jpg';
import PhotoThird from '../../images/about/3.jpg';

import '../../styles/Default.css';
import '../../styles/About.css';
import '../../styles/MediaScreen.css';

export default function About() {

    return (<>
        <Section className={'section'} id={'about-scroll'}>
            <Container className={'container'}>

                <Div className={'section__header'}>
                    <TitleH3 className={'section__suptitle'}>What we do</TitleH3>
                    <TitleH2 className={'section__title'}>Story about us</TitleH2>
                    <Div className={'section__text'}>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
                    </Div>
                </Div>


                <Div className={'card'}>
                    <Div className={'card__item'}>
                        <Div className={'card__inner'}>
                            <Div className={'card__img'}>
                                <Img src={PhotoOne} alt={''} />
                            </Div>
                            <Div className={'card__text'}>super team</Div>
                        </Div>
                    </Div>



                        <Div className={'card__item'}>
                            <Div className={'card__inner'}>
                                <Div className={'card__img'}>
                                    <Img src={PhotoTwo} alt={''} />
                                </Div>
                                <Div className={'card__text'}>super team</Div>
                            </Div>
                        </Div>


                        <Div className={'card__item'}>
                            <Div className={'card__inner'}>
                                <Div className={'card__img'}>
                                    <Img src={PhotoThird} alt={''} />
                                </Div>
                                <Div className={'card__text'}>super team</Div>
                            </Div>
                    </Div>
                </Div>
            </Container>
        </Section>

    </>)
}