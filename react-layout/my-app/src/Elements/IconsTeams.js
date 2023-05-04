import React from 'react';

import TitleH1 from './TitleH1';
import TitleH2 from './TitleH2';
import TitleH3 from './TitleH3';
import Div from './Div';
import Container from './Container';
import A from './A';
import P from './P';
import Img from './Img';
import Span from './Span';
import Section from './Section';
import Icon from './Icon';

export default function IconsTeams() {

    return (<>
            <Div className="social">
                <A className="social__item" href="#" target="_blank">
                    <Icon className="fab fa-facebook-f"></Icon>
                </A>
                <A className="social__item" href="#" target="_blank">
                    <Icon className="fab fa-twitter"></Icon>
                </A>
                <A className="social__item" href="#" target="_blank">
                    <Icon className="fab fa-pinterest-p"></Icon>
                </A>
                <A className="social__item" href="#" target="_blank">
                    <Icon className="fab fa-instagram"></Icon>
                </A>
            </Div>
    </>)
}