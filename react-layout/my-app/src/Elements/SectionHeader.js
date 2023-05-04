import React from 'react';

import Section from './Section';
import Div from './Div';
import TitleH2 from './TitleH2';
import TitleH3 from './TitleH3';

export default function SectionHeader({text, suptitle, title}) {

    return (<>
        <Section className="section__header">
            <TitleH3 className="section__suptitle">{suptitle}</TitleH3>
            <TitleH2 className="section__title">{title}</TitleH2>
            <Section className="section__text">
                <p>{text}</p>
            </Section>
        </Section>
        </>)
}