import React from 'react';
import Layout from './Layout/Layout';
import './style/about.css'

import MainTitle from './Elements/MainTitle';
import FormAbout from './Elements/FormAbout'

export default function About() {

    return (<>
        <Layout>
            <MainTitle textTitle={'Про нас'} />
            <div className='container-about'>
                <div className='about-content'>
                    <p>Ми працюемо вже більше 10 років, в нас є велика колекція книжок
                        та фільмів на любий смак, якщо вам щось сподобалось, ви можете
                        нас підтримати по посиланню в підвалі сайту, також ви можете
                        використовувати наш API для особистих цілей, для цього, залиште свої контакти за формою нижче</p>
                </div>
                <div className='form-about'>
                    <FormAbout />
                </div>
            </div>
        </Layout>


    </>)
}