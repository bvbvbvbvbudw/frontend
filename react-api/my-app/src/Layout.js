import React from 'react';
import Header from './Component/header/Header';
import Footer from './Component/footer/Footer';


export default function Layout ({children}) {


    return(<>
    
    <Header />
    {children}
    <Footer />
    
    </>)
}