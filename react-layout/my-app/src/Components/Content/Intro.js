import React from 'react';

import TitleH1 from '../../Elements/TitleH1';
import TitleH2 from '../../Elements/TitleH2';
import TitleH3 from '../../Elements/TitleH3';
import Div from '../../Elements/Div';
import Container from '../../Elements/Container';
import A from '../../Elements/A';
import Span from '../../Elements/Span';

import Slider from './Slider';

import '../../styles/Default.css';
import '../../styles/Intro.css';

export default function Intro() {

    return (<>

        <div className="intro">


            <Container className={'container'}>
                <Div className={'intro__inner'}>
                    <TitleH2 className={"intro__suptitle"}>Creative Template</TitleH2>
                    <TitleH1 className={"intro__title"}>Welcome to MoGo</TitleH1>

                    <A className={"btn"} href={"#"} text={"Learn More"} />
                </Div>
            </Container>


            <Slider/>

        </div>

    </>)
}