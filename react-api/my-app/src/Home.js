import React from 'react';
import Layout from './Layout/Layout';
import { Link } from 'react-router-dom';

import MainTitle from './Elements/MainTitle';
import Button from './Elements/Button';
import imgHome from './images/content-home-image.jpg';
import Avatar from './Elements/Avatar';

import './style/home.css'
import Main from './Components/content/Main';
import CarouselImage from './Elements/CarouselImage'

export default function Home({ textTitle}) {

    return (<>
        <Layout>
            <main>
                <div className='container-home-content'>
                    <div>
                        <MainTitle textTitle={'Про що цей сайт?'} />
                        <p>Ми даемо змогу читати книжки та переглядати улюблені фільми безкоштовно</p>
                        <p>І це все на одному сайті!</p>
                        <p>Переглядай в любому місці та коли захочеш</p>
                        <div className='container-button'>
                            <Link to="./Movie">
                                <Button textButton={'Переглянути про Марвел'} />
                            </Link>
                            <Link to="./Book">
                            <Button textButton={'Переглянути про книги'} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <img src={imgHome} className='img-home' />
                        <p>Якщо з'явилися питання, не соромся, запитуй! Всі відповіді знайдете внизу сайта </p>
                    </div>
                </div>

                <div className='container-reviews-home'>
                    <MainTitle textTitle={"Відгуки про нас"} />
                    <div className='container-reviews-home-content'>
                        <div>
                            <div className='reviews'>
                                <Avatar numAv={1} />
                                <p>Неймовірний сайт для перегляду фільмів!</p>
                                <p>3 години тому</p>
                            </div>

                            <div className='reviews'>
                                <Avatar numAv={2} />
                                <p>Неймовірний сайт для перегляду фільмів!</p>
                                <p>3 години тому</p>
                            </div>
                        </div>

                        <div>
                            <div className='reviews'>
                                <Avatar numAv={3} />
                                <p>Неймовірний сайт для перегляду фільмів!</p>
                                <p>3 години тому</p>
                            </div>

                            <div className='reviews'>
                                <Avatar numAv={4} />
                                <p>Неймовірний сайт для перегляду фільмів!</p>
                                <p>3 години тому</p>
                            </div>
                        </div>

                        <div>
                            <div className='reviews'>
                                <Avatar numAv={3} />
                                <p>Неймовірний сайт для перегляду фільмів!</p>
                                <p>3 години тому</p>
                            </div>

                            <div className='reviews'>
                                <Avatar numAv={4} />
                                <p>Неймовірний сайт для перегляду фільмів!</p>
                                <p>3 години тому</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-carousel'>
                    <MainTitle textTitle={'Новинки цього тижня! Дивіться зараз'} />
                    <CarouselImage />
                </div>
            </main>
        </Layout>
    </>)
}