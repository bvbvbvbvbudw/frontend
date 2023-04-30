import React from 'react';
import Layout from './Layout/Layout';
import './style/blog.css';
import MainTitle from './Elements/MainTitle';
import news1 from './images/news1.webp';
import news2 from './images/news2.webp';
import news3 from './images/news3.webp';
import news4 from './images/news4.webp';

export default function Blog() {

    return (<>
        <Layout>
            <div>

                <MainTitle textTitle={'Блог та новини'} />
                <div className='news'>
                    <div>
                        <img src={news1} />
                        <p>Після публікації ключового арту серіалу Twisted Metal за мотивами однойменної ігрової серії для PlayStation виникли побоювання за якість шоу.
                            Однак нещодавній перший трейлер розвіяв сумніви. Ролик вийшов досить стильним і демонструє хаос укупі з веселощами, як основу атмосфери картини.</p>
                    </div>

                    <div>
                        <img src={news2} />
                        <p>Травень принесе глядачам біля "малих" екранів чимало нових цікавих серіалів в найрізноманітніших жанрах. Серед них – політична драма "Сантехніки Білого дому" з Вуді Гаррельсоном,
                            південнокорейський постапокаліптичний екшн "Чорний лицар" та перший серіал в кар'єрі легендарного Арнольда Шварценеггера "Фубар".</p>
                    </div>

                    <div>
                        <img src={news3} />
                        <p>Кінокомпанія Lionsgate випустила перший трейлер підліткової екшн-антиутопії "Голодні ігри: Балада про співочих пташок і змій"
                            (The Hunger Games: The Ballad of Songbirds and Snakes), який стане приквелом популярної серії фільмів "Голодні ігри" з Дженніфер Лоуренс.</p>
                    </div>

                    <div>
                        <img src={news4} />
                        <p>Кінокомпанія Lionsgate випустила перший трейлер підліткової екшн-антиутопії "Голодні ігри: Балада про співочих пташок і змій"
                            (The Hunger Games: The Ballad of Songbirds and Snakes), який стане приквелом популярної серії фільмів "Голодні ігри" з Дженніфер Лоуренс.</p>
                    </div>
                </div>


            </div>
        </Layout>


    </>)
}