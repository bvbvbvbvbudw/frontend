import React from 'react';

import TitleH2 from '../../Elements/TitleH2';
import TitleH3 from '../../Elements/TitleH3';
import Div from '../../Elements/Div';
import Img from '../../Elements/Img';
import Section from '../../Elements/Section';
import ReviewsTextAuthor from '../../Elements/ReviewsTextAuthor';

import IconsTeams from '../../Elements/IconsTeams';

import PhotoOne from '../../images/team/1.jpg';
import PhotoTwo from '../../images/team/2.jpg';
import PhotoThird from '../../images/team/3.jpg';

import '../../styles/MediaScreen.css';

export default function Teams() {

    return (<>

        <Section className="section" id={'work-scroll'}>
            <Div className="container">

                <Div className="section__header">
                    <TitleH3 className="section__suptitle">Who we are</TitleH3>
                    <TitleH2 className="section__title">Meet our team</TitleH2>
                    <Div className="section__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </Div>
                </Div>

                <Div className="card">
                    <Div className="card__item">
                        <Div className="card__inner">
                            <Div className="card__img">
                                <Img src={PhotoOne} alt="" />
                            </Div>

                            <Div className="card__text">
                                <IconsTeams />
                            </Div>

                        </Div>
                        <Div className="card__info">
                            <ReviewsTextAuthor classNameOne={'card__name'} classNameTwo={'card__prof'} textOne={'Matthew Div'} textTwo={'Graphic Design'} />
                        </Div>
                    </Div>

                    <Div className="card__item">
                        <Div className="card__inner">
                            <Div className="card__img">
                                <Img src={PhotoTwo} alt="" />
                            </Div>
                            <Div className="card__text">
                                <IconsTeams />
                            </Div>
                        </Div>
                        <Div className="card__info">
                            <ReviewsTextAuthor classNameOne={'card__name'} classNameTwo={'card__prof'} textOne={'Christopher Campbell'} textTwo={'Branding/UX design'} />
                        </Div>
                    </Div>

                    <Div className="card__item">
                        <Div className="card__inner">
                            <Div className="card__img">
                                <Img src={PhotoThird} alt="" />
                            </Div>
                            <Div className="card__text">
                                <IconsTeams />
                            </Div>
                        </Div>
                        <Div className="card__info">
                            <ReviewsTextAuthor classNameOne={'card__name'} classNameTwo={'card__prof'} textOne={'Michael Fertig'} textTwo={'Developer'} />
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Section>

    </>)
}