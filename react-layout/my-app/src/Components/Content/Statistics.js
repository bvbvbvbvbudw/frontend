import React from 'react';

import TitleH1 from '../../Elements/TitleH1';
import TitleH2 from '../../Elements/TitleH2';
import TitleH3 from '../../Elements/TitleH3';
import Div from '../../Elements/Div';
import Container from '../../Elements/Container';
import A from '../../Elements/A';
import P from '../../Elements/P';
import Img from '../../Elements/Img';
import Span from '../../Elements/Span';
import Section from '../../Elements/Section';
import StatsCountText from '../../Elements/StatsCountText';

import '../../styles/Default.css';
import '../../styles/Stats.css';

export default function Statistics() {

    return (<>

        <Div className="statistics">
            <Container className="container">

                <Div className="stat">
                    <Div className="stat__item">
                        <StatsCountText classNameOne={'stat__count'} textOne={'42'} classNameTwo={'stat__text'} textTwo={'Web Design Projects'}/>
                    </Div>
                    <Div className="stat__item">
                        <StatsCountText classNameOne={'stat__count'} textOne={'123'} classNameTwo={'stat__text'} textTwo={'happy client'}/>
                    </Div>
                    <Div className="stat__item">
                        <StatsCountText classNameOne={'stat__count'} textOne={'15'} classNameTwo={'stat__text'} textTwo={'award winner'}/>
                    </Div>
                    <Div className="stat__item">
                        <StatsCountText classNameOne={'stat__count'} textOne={'99'} classNameTwo={'stat__text'} textTwo={'cup of coffe'}/>
                    </Div>
                    <Div className="stat__item">
                        <StatsCountText classNameOne={'stat__count'} textOne={'24'} classNameTwo={'stat__text'} textTwo={'members'}/>
                    </Div>
                </Div>

            </Container>
        </Div>

    </>)
}