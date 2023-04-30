import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style/book.css'

export default function BookApi() {

    const [books, setBooks] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    const handleClick = (event) => {
        setSelectedGenre(event.target.id);
    };

    useEffect(() => {
        axios
            .get(`https://openlibrary.org/subjects/${selectedGenre}.json`)
            .then(response => {
                setBooks(response.data.works);
                console.log(response)
            })
            .catch((error) => console.error(error));
        console.log()
    }, [selectedGenre]);


    return (
        <>
            <div className='choise-container-book'>
                <div className='choise-content'>
                    <p style={{color: selectedGenre === 'mystery_and_detective_stories' ? 'black' : 'grey'}} id='mystery_and_detective_stories' onClick={handleClick}>Містика та детективні історії</p>
                    <p style={{color: selectedGenre === 'romance' ? 'black' : 'grey'}} id='romance' onClick={handleClick}>Романи</p>
                    <p style={{color: selectedGenre === 'science_fiction' ? 'black' : 'grey'}} id='science_fiction' onClick={handleClick}>Научна фантастика</p>
                    <p style={{color: selectedGenre === 'horror' ? 'black' : 'grey'}} id='horror' onClick={handleClick}>Хорор</p>
                    <p style={{color: selectedGenre === 'thriller' ? 'black' : 'grey'}} id='thriller' onClick={handleClick}>Трилери</p>
                </div>
            </div>

            <div className='container-books-api'>
                {books.map(book => (
                    <div key={book.key} className='book-api'>
                        <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} className='logo-book-content'/>
                        <h2>{book.title}</h2>
                        <p>Автор: {book.authors[0].name}</p>
                        <p>Рік першого видання: {book.first_publish_year}</p>
                        <a href={`https://openlibrary.org/subjects/${book.cover_edition_key}`}>Читати зараз!</a>
                    </div>
                ))}
            </div>
        </>
    );
}
