import React from 'react';

import Div from './Div';
import A from './A';
import Span from './Span';
import Icon from './Icon';

import '../styles/Default.css';
import '../styles/LatestBlog.css';
import '../styles/MediaScreen.css';

export default function BlogItem({ links, src, date, month, title, watching ,comments, text, srcTwo}) {

    return (<>
        <Div className="blog__item">
            <Div className="blog__header">
                <A href={links}>
                    <img className="blog__photo" src={src} alt="" />
                </A>
                <Div className="blog__date">
                    <Div className="blog__date-day">{date}</Div>
                    {month}
                </Div>
            </Div>
            <Div className="blog__content">
                <Div className="blog__title">
                    <A href={srcTwo}>{title}</A>
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