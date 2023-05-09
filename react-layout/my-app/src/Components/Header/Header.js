import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import A from '../../Elements/A';
import Icon from '../../Elements/Icon';
import Container from '../../Elements/Container';
import Div from '../../Elements/Div';

import '../../styles/Default.css';
import '../../styles/Header.css';
import '../../styles/MediaScreen.css';

export default function Header() {

    return (<>
        <header className="header">
            <Container className={'container'}>

                <Div className={'header__inner'}>
                    <div className="header__logo">MoGo</div>

                    <nav className="nav">
                        <Link
                            activeClass="nav__link active"
                            to="about-scroll"
                            duration={500}
                            smooth={true}
                        ><A className={'nav__link active'} id={'about'} href={'#'} text={'About'} /></Link>

                        <Link
                            activeClass="nav__link"
                            to="service-scroll"
                            duration={500}
                            smooth={true}
                        ><A className={'nav__link'} id={'service'} href={'#'} text={'Service'} /></Link>

                        <Link
                            activeClass="nav__link"
                            to="blog-scroll"
                            duration={500}
                            smooth={true}
                        ><A className={'nav__link'} id={'blog'} href={'#'} text={'Blog'} /></Link>

                        <Link
                            activeClass="nav__link"
                            to="work-scroll"
                            duration={500}
                            smooth={true}
                        ><A className={'nav__link'} id={'work'} href={'#'} text={'Work'} /></Link>

                        <Link
                            activeClass="nav__link"
                            to="contact-scroll"
                            duration={500}
                            smooth={true}
                        ><A className={'nav__link'} id={'contact'} href={'#'} text={'Contact'} /></Link>


                        <A className={'nav__link'} href={'#'}>
                            <Icon className={'fas fa-shopping-cart'} />
                        </A>
                        <A className={'nav__link'} href={'#'}>
                            <Icon className={'fas fa-search'} />
                        </A>
                    </nav>
                </Div>
            </Container>
        </header>
    </>)
}