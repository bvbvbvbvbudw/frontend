import React from "react";

import FooterLinksInst from "./FooterLinksInst";

import PhotoOne from '../../images/instagram/1.jpg';
import PhotoTwo from '../../images/instagram/2.jpg';
import PhotoThree from '../../images/instagram/3.jpg';
import PhotoFour from '../../images/instagram/4.jpg';
import PhotoFive from '../../images/instagram/5.jpg';
import PhotoSix from '../../images/instagram/6.jpg';
import PhotoSeven from '../../images/instagram/7.jpg';
import PhotoEight from '../../images/instagram/8.jpg';
import PhotoNine from '../../images/instagram/9.jpg';


export default function FooterInstagram() {

    return (<>

        <div className="footer__col  footer__col--third">
            <div className="footer__title">Instagram</div>

            <div className="instagram">
                <FooterLinksInst src={PhotoOne}/>
                <FooterLinksInst src={PhotoTwo}/>
                <FooterLinksInst src={PhotoThree}/>
                <FooterLinksInst src={PhotoFour}/>
                <FooterLinksInst src={PhotoFive}/>
                <FooterLinksInst src={PhotoSix}/>
                <FooterLinksInst src={PhotoSeven}/>
                <FooterLinksInst src={PhotoEight}/>
                <FooterLinksInst src={PhotoNine}/>


            </div>
        </div>

    </>)
}