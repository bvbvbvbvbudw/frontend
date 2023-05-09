import React from 'react';
import { Helmet } from 'react-helmet'

import Div from './Div';
import A from './A';
import Icon from './Icon';

// import '../styles/icons.css'
import '../styles/Default.css';
import '../styles/Social.css';


export default function IconsTeams() {

    return (<>
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Montserrat:300i,400,700&amp;subset=cyrillic-ext" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
        </Helmet>
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