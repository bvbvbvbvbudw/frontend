import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import '../../style/movie.css'

export default function MovieApi() {

    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    const handleClick = (event) => {
        setSelectedGenre(event.target.id);
    };

    const privateKey = 'ba960f99f95b49563030216f8e7fc3fb2d57277f';
    const publicKey = 'b65f080af98133b89ebe1d0249d0abf5';
    const timestamp = Date.now().toString();
    const hash = md5(`${timestamp}${privateKey}${publicKey}`);

    useEffect(() => {
        axios
            .get(`http://gateway.marvel.com/v1/public/${selectedGenre}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
            .then(response => {
                setMovies(response.data.data.results);
                console.log(response)
            })
            .catch((error) => console.error(error));
    }, [selectedGenre]);


    return (
        <>
            <div className='choise-container-comics'>
                <div className='choise-content'>
                    <p style={{ color: selectedGenre === 'comics' ? 'black' : 'grey' }} id='comics' onClick={handleClick}>Комікси</p>
                    <p style={{ color: selectedGenre === 'characters' ? 'black' : 'grey' }} id='characters' onClick={handleClick}>Герої</p>
                    <p style={{ color: selectedGenre === 'creators' ? 'black' : 'grey' }} id='creators' onClick={handleClick}>Автори</p>
                    <p style={{ color: selectedGenre === 'events' ? 'black' : 'grey' }} id='events' onClick={handleClick}>Події</p>
                    <p style={{ color: selectedGenre === 'series' ? 'black' : 'grey' }} id='series' onClick={handleClick}>Серії</p>
                </div>
            </div>

            <div className='container-movies-api'>
                {movies.map(movie => (
                    <div key={movie.key} className='book-api'>
                        <img src={movie.thumbnail.path + '.' + movie.thumbnail.extension} className="movie-logo" />

                        <h2>{movie.title ? (
                            <h2>{movie.title}</h2>
                        ) : (
                            <h2>{movie.name}</h2>
                        )}</h2>

                        {selectedGenre === 'creators' ? `${movie.fullName}` : ''}
                        {['comics', 'creators', 'events', 'series'].includes(selectedGenre) ? (
                            <a href={movie.urls[0].url}><br />Читати зараз!<br /></a>
                        ) : (
                            <a href={movie.urls[movie.urls.length - 1].url}>Комікси з цим героєм!</a>
                        )}
                        {selectedGenre === 'comics' ? `${movie.prices[0].price === 0 ? 'Ціну не вказано' : `${movie.prices[0].price} $`}` : ''}
                    </div>
                ))}
            </div>
        </>
    );
}
