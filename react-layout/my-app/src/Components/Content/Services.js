import React from "react";

import TitleH2 from '../../Elements/TitleH2';
import TitleH3 from '../../Elements/TitleH3';
import Div from '../../Elements/Div';
import Img from '../../Elements/Img';
import Section from '../../Elements/Section';

import PhotoOne from '../../images/services/photography.png';
import PhotoTwo from '../../images/services/webdesign.png';
import PhotoThird from '../../images/services/creativity.png';
import PhotoFour from '../../images/services/seo.png';
import PhotoFive from '../../images/services/css-html.png';
import PhotoSix from '../../images/services/digital.png';

import ServicesTextTitle from "../../Elements/ServicesTextTitle";


import '../../styles/Default.css';
import '../../styles/Services.css';
import '../../styles/MediaScreen.css';

export default function Services() {


    return (<>
        <Section className="section" id={'service-scroll'}>
            <Div className="container">

                <Div className="section__header">
                    <TitleH3 className="section__suptitle">We work with</TitleH3>
                    <TitleH2 className="section__title">Amazing Services</TitleH2>
                </Div>

                <Div className="services">
                    <Div className="services__item  services__item--border">
                        <Img className={"services__icon"} src={PhotoOne} alt={"" }/>
                        <ServicesTextTitle classNameOne={'services__title'} classNameTwo={'services__text'} textOne={'Photography'} textTwo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} />
                    </Div>
                    <Div className="services__item  services__item--border">
                        <Img className="services__icon" src={PhotoTwo} alt="" />
                            <ServicesTextTitle classNameOne={'services__title'} classNameTwo={'services__text'} textOne={'Web Design'} textTwo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} />
                    </Div>
                    <Div className="services__item  services__item--border">
                        <Img className="services__icon" src={PhotoThird} alt="" />
                        <ServicesTextTitle classNameOne={'services__title'} classNameTwo={'services__text'} textOne={'Creativity'} textTwo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} />
                    </Div>
                    <Div className="services__item">
                        <Img className="services__icon" src={PhotoFour} alt="" />
                        <ServicesTextTitle classNameOne={'services__title'} classNameTwo={'services__text'} textOne={'seo'} textTwo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} />
                    </Div>
                    <Div className="services__item">
                        <Img className="services__icon" src={PhotoFive} alt="" />
                        <ServicesTextTitle classNameOne={'services__title'} classNameTwo={'services__text'} textOne={'Css/Html'} textTwo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} />
                    </Div>
                    <Div className="services__item">
                        <Img className="services__icon" src={PhotoSix} alt="" />
                        <ServicesTextTitle classNameOne={'services__title'} classNameTwo={'services__text'} textOne={'Digital'} textTwo={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'} />
                    </Div>
                </Div>

            </Div>
        </Section>


    </>)
}