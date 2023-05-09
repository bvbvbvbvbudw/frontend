import React from "react";

import Container from '../../Elements/Container';
import Img from '../../Elements/Img';

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