import React from "react";

import Container from '../../Elements/Container';
import Section from '../../Elements/Section';
import SectionHeader from "../../Elements/SectionHeader";

import BlogItem from "../../Elements/BlogItem";

import PhotoOne from '../../images/blog/1.jpg';
import PhotoTwo from '../../images/blog/2.jpg';
import PhotoThree from '../../images/blog/3.jpg';

import '../../styles/Default.css';
import '../../styles/LatestBlog.css';
import '../../styles/MediaScreen.css';

export default function LatestBlog(){

    return(<>
    
    <Section className="section">
        <Container className="container">



            <SectionHeader suptitle={'Our stories'} title={'Latest Blog'}/>


            <div className="blog">

                <BlogItem links={'#'} src={PhotoOne} date={'15'} month={'Jan'} title={'Lorem ipsum dolor sit amet'} watching={'542'} comments={'17'} text={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} srcTwo={'#'}/>

                <BlogItem links={'#'} src={PhotoTwo} date={'15'} month={'Jan'} title={'Lorem ipsum dolor sit amet'} watching={'542'} comments={'17'} text={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} srcTwo={'#'}/>

                <BlogItem links={'#'} src={PhotoThree} date={'15'} month={'Jan'} title={'Lorem ipsum dolor sit amet'} watching={'542'} comments={'17'} text={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} srcTwo={'#'}/>

            </div>

        </Container>
    </Section>
    </>)
}