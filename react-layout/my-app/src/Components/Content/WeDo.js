import React, { useState, useEffect } from 'react';

import TitleH2 from '../../Elements/TitleH2';
import TitleH3 from '../../Elements/TitleH3';
import Div from '../../Elements/Div';
import Container from '../../Elements/Container';
import P from '../../Elements/P';
import Img from '../../Elements/Img';
import Section from '../../Elements/Section';

import PhotoOne from '../../images/wedo.jpg';
import PhotoTwo from '../../images/services/photography.png';
import PhotoThird from '../../images/services/creativity.png';
import PhotoFour from '../../images/services/webdesign.png';

import AccordionItem from '../../Elements/AccordionItem';

import '../../styles/Default.css';
import '../../styles/WeDo.css';
import '../../styles/MediaScreen.css';


export default function WeDo({ title, content, icon }) {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };


    useEffect(() => {
        const accordionItems = document.querySelectorAll('.accordion__item');
        const handleClick = (event) => {
            const { target } = event;
            if (target.classList.contains('active')) {
                target.classList.remove('active');
                return;
            }
            accordionItems.forEach((el) => {
                el.classList.remove('active');
            });
            target.classList.add('active');
        };
        accordionItems.forEach((item) => {
            item.addEventListener('click', handleClick);
        });
        return () => {
            accordionItems.forEach((item) => {
                item.removeEventListener('click', handleClick);
            });
        };
    }, []);
    return (<>

        <Section className="section" id={'blog-scroll'}>
            <Container className="container">

                <Div className="section__header">
                    <TitleH3 className="section__suptitle">Service</TitleH3>
                    <TitleH2 className="section__title">what we do</TitleH2>
                    <Div className="section__text">
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
                    </Div>
                </Div>

                <Div className="wedo">
                    <Div className="wedo__item">
                        <Img className="wedo__img" src={PhotoOne} alt="" />
                    </Div>

                    <Div className="wedo__item">

                        <Div className="accordion">
                            <AccordionItem
                                title="Photography"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                icon={PhotoTwo}
                            />

                            <AccordionItem
                                title="Creativity"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                icon={PhotoThird}
                            />

                            <AccordionItem
                                title="web design"
                                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                icon={PhotoFour}
                            />
                        </Div>

                    </Div>
                </Div>
            </Container>
        </Section>

    </>)
}