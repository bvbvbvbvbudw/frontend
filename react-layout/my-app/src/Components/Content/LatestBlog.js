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

import BlogItem from "../../Elements/BlogItem";

import PhotoOne from '../../images/blog/1.jpg';
import PhotoTwo from '../../images/blog/2.jpg';
import PhotoThree from '../../images/blog/3.jpg';

import '../../styles/Default.css';
import '../../styles/LatestBlog.css';

export default function LatestBlog(){

    return(<>
    
    <Section className="section">
        <Container className="container">



            <SectionHeader suptitle={'Our stories'} title={'Latest Blog'}/>


            <div class="blog">

                <BlogItem links={'#'} src={PhotoOne} date={'15'} month={'Jan'} title={'Lorem ipsum dolor sit amet'} watching={'542'} comments={'17'} text={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} srcTwo={'#'}/>

                <BlogItem links={'#'} src={PhotoTwo} date={'15'} month={'Jan'} title={'Lorem ipsum dolor sit amet'} watching={'542'} comments={'17'} text={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} srcTwo={'#'}/>

                <BlogItem links={'#'} src={PhotoThree} date={'15'} month={'Jan'} title={'Lorem ipsum dolor sit amet'} watching={'542'} comments={'17'} text={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} srcTwo={'#'}/>

            </div>

        </Container>
    </Section>
    </>)
}