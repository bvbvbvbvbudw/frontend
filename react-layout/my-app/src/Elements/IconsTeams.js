import React from 'react';
import {Helmet} from 'react-helmet'

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

// import '../styles/icons.css'


export default function IconsTeams() {

    return (<>
          <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Montserrat:300i,400,700&amp;subset=cyrillic-ext" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
      </Helmet>
            <Div className="social">
                <a className="social__item" href="#" target="_blank">
                    <Icon className="fab fa-facebook-f"></Icon>
                </a>
                <a className="social__item" href="#" target="_blank">
                    <Icon className="fab fa-twitter"></Icon>
                </a>
                <a className="social__item" href="#" target="_blank">
                    <Icon className="fab fa-pinterest-p"></Icon>
                </a>
                <a className="social__item" href="#" target="_blank">
                    <Icon className="fab fa-instagram"></Icon>
                </a>
            </Div>
    </>)
}