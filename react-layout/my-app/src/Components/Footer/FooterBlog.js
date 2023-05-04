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

export default function FooterBlog({src, title, date}) {

    return (<>

        <Container className="blogs__item">
            <Img className="blogs__img" src={src} alt="" />
                <div className="blogs__content">
                    <a className="blogs__title" href="#">{title}</a>
                    <div className="blogs__date">{date}</div>
                </div>
        </Container>

    </>)
}