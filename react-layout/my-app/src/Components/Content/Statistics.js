import React from 'react';

import Div from '../../Elements/Div';
import Container from '../../Elements/Container';
import StatsCountText from '../../Elements/StatsCountText';

import '../../styles/Default.css';
import '../../styles/Stats.css';
import '../../styles/MediaScreen.css';

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