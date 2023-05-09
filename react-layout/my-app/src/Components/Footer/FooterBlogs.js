import React from "react";

import Container from '../../Elements/Container';

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