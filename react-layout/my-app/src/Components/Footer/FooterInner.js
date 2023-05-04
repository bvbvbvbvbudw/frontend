import React from 'react';
import FooterSocial from './FooterSocial';
import Form from '../../Elements/Form';
import FooterBlogs from './FooterBlogs';
import FooterInstagram from './FooterInstagram';

export default function FooterInner() {
    return (<>


        <div className="footer__inner">
            <div className="footer__col  footer__col--first">
                <div className="footer__logo">MoGo</div>
                <div className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

                <FooterSocial/>

                <Form />
            </div>

            <div className="footer__col  footer__col--second">
                <div className="footer__title">Blogs</div>

                <FooterBlogs/>
            </div>

            <FooterInstagram/>

        </div>

    </>)
}