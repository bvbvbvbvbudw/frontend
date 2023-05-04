import React from "react";

import TitleH1 from '../../Elements/TitleH1';
import TitleH2 from '../../Elements/TitleH2';
import TitleH3 from '../../Elements/TitleH3';
import Div from '../../Elements/Div';
import Container from '../../Elements/Container';
import A from '../../Elements/A';
import Span from '../../Elements/Span';
import SliderNumText from "../../Elements/SliderNumText";


export default function Slider() {

    return (<>

        <Div className={'slider'}>
            <Container className={'container'}>
                    <Div className={'slider__inner'}>
                        <div className="slider__item active">
                            <SliderNumText TextFirst={'01 '} TextSecond={'Intro'} classNameFirst={'slider__num'} classNameSecond={'slider__text'}/>
                        </div>
                        <div className="slider__item">
                        <SliderNumText TextFirst={'02 '} TextSecond={'Work'} classNameFirst={'slider__num'} classNameSecond={'slider__text'}/>

                        </div>
                        <div className="slider__item">
                        <SliderNumText TextFirst={'03 '} TextSecond={'About'} classNameFirst={'slider__num'} classNameSecond={'slider__text'}/>

                        </div>
                        <div className="slider__item">
                        <SliderNumText TextFirst={'04 '} TextSecond={'Contacts'} classNameFirst={'slider__num'} classNameSecond={'slider__text'}/>

                        </div>
                    </Div>
            </Container>
        </Div>

    </>)
}