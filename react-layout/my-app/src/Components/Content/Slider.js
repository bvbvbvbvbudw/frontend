import React, {useState, useEffect} from "react";

import Div from '../../Elements/Div';
import Container from '../../Elements/Container';
import SliderNumText from "../../Elements/SliderNumText";

import '../../styles/Intro.css';
import '../../styles/Default.css';
import '../../styles/MediaScreen.css';


export default function Slider() {

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((activeIndex + 1) % 4);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [activeIndex]);
    

    return (
        <Div className={'slider'}>
            <Container className={'container'}>
                <Div className={'slider__inner'}>
                    <div className={`slider__item ${activeIndex === 0 ? "active" : ""}`}>
                        <SliderNumText TextFirst={'01 '} TextSecond={'Intro'} classNameFirst={'slider__num'} classNameSecond={'slider__text'}/>
                    </div>
                    <div className={`slider__item ${activeIndex === 1 ? "active" : ""}`}>
                        <SliderNumText TextFirst={'02 '} TextSecond={'Work'} classNameFirst={'slider__num'} classNameSecond={'slider__text'}/>
                    </div>
                    <div className={`slider__item ${activeIndex === 2 ? "active" : ""}`}>
                        <SliderNumText TextFirst={'03 '} TextSecond={'About'} classNameFirst={'slider__num'} classNameSecond={'slider__text'}/>
                    </div>
                    <div className={`slider__item ${activeIndex === 3 ? "active" : ""}`}>
                        <SliderNumText TextFirst={'04 '} TextSecond={'Contacts'} classNameFirst={'slider__num'} classNameSecond={'slider__text'}/>
                    </div>
                </Div>
            </Container>
        </Div>
    );
}
