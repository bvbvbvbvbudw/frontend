import React from "react";

import Container from '../../Elements/Container';

import FooterInner from "./FooterInner";

import '../../styles/Default.css';
import '../../styles/Footer.css';

export default function Footer() {

    return (<>

        <footer className="footer" id="contact-scroll">
            <Container className="container">

                <FooterInner />

                <div className="copyright">
                    © 2016 MoGo free PSD template by <span>Laaqiq</span>
                </div>

            </Container>
        </footer>

    </>)
}