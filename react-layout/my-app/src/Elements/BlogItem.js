import React from 'react';

import TitleH1 from './TitleH1';
import TitleH2 from './TitleH2';
import TitleH3 from './TitleH3';
import Div from './Div';
import Container from './Container';
import A from './A';
import P from './P';
import Img from './Img';
import Span from './Span';
import Section from './Section';
import Icon from './Icon';

import '../styles/LatestBlog.css'

export default function BlogItem({ links, src, date, month, title, watching ,comments, text, srcTwo}) {

    return (<>
        <Div className="blog__item">
            <Div className="blog__header">
                <a href={links}>
                    <img className="blog__photo" src={src} alt="" />
                </a>
                <Div className="blog__date">
                    <Div className="blog__date-day">{date}</Div>
                    {month}
                </Div>
            </Div>
            <Div className="blog__content">
                <Div className="blog__title">
                    <a href={srcTwo}>{title}</a>
                </Div>
                <Div className="blog__text">{text}</Div>
            </Div>
            <Div className="blog__footer">
                <Div className="blog-stat">
                    <Span className="blog-stat__item">
                        <Icon className="far fa-eye"></Icon> {watching}
                    </Span>
                    <Span className="blog-stat__item">
                        <Icon className="far fa-comment-dots"></Icon> {comments}
                    </Span>
                </Div>
            </Div>
        </Div>
    </>)
}