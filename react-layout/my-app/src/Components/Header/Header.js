import React from 'react';

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
                        <A className={'nav__link active'} href={'#'} text={'About'} />
                        <A className={'nav__link'} href={'#'} text={'Service'} />
                        <A className={'nav__link'} href={'#'} text={'Blog'} />
                        <A className={'nav__link'} href={'#'} text={'Work'} />
                        <A className={'nav__link'} href={'#'} text={'Contact'} />

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