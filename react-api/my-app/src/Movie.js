import React from 'react';
import Layout from './Layout/Layout';
import MovieApi from './Components/api-js/MovieApi'

export default function Movie() {

    return (<>
        <Layout>
            <MovieApi/>
        </Layout>


    </>)
}