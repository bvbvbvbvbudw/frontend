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

import FooterInner from "./FooterInner";

import '../../styles/Default.css';
import '../../styles/Footer.css';

export default function Footer() {

    return (<>

        <footer className="footer">
            <Container className="container">

                <FooterInner />

                <div className="copyright">
                    © 2016 MoGo free PSD template by <span>Laaqiq</span>
                </div>

            </Container>
        </footer>

    </>)
}