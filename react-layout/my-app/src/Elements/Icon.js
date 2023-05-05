import React from "react";
import { Helmet } from 'react-helmet'


export default function Icon({ className }) {

    return (<>
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Montserrat:300i,400,700&amp;subset=cyrillic-ext" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
        </Helmet>
        <i className={className}></i>

    </>)
}