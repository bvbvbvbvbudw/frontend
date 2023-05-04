import React from "react";

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
import ReviewsTextAuthor from '../../Elements/ReviewsTextAuthor';
import SectionHeader from "../../Elements/SectionHeader";
import Icon from "../../Elements/Icon";

import FooterBlog from "./FooterBlog";

import PhotoOne from '../../images/blog/1.jpg';
import PhotoTwo from '../../images/blog/2.jpg';
import PhotoThree from '../../images/blog/3.jpg'

export default function FooterBlogs() {

    return (<>

        <Container className="footer__col  footer__col--second">

            <div className="blogs">

                <FooterBlog src={PhotoOne} title={'Lorem ipsum dolor sit amet, consectetur adipiscing'} date={'Jan 9, 2016'}/>

                <FooterBlog src={PhotoTwo} title={'Lorem ipsum dolor sit amet, consectetur adipiscing'} date={'Jan 9, 2016'}/>

                <FooterBlog src={PhotoThree} title={'Lorem ipsum dolor sit amet, consectetur adipiscing'} date={'Jan 9, 2016'}/>

            </div>
        </Container>

    </>)
}