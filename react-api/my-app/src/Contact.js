import React from 'react';
import Layout from './Layout/Layout';
import map from './images/map.png'

export default function Contact() {

    return (<>
        <Layout>
        <div>
            <p>Наш номер телефону: +380505513578</p>
            <p>Наша адреса: м. Кропивницький, вул. Волкова, 20к1 кв.61</p>
            <p>Відкриті цілодобово</p>
            <img src={map}/>
        </div>

        </Layout>
    </>)
}