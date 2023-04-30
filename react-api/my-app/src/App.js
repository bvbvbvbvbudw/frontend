import './App.css';
import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Blog from './Blog';
import Book from './Book';
import Movie from './Movie';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book' element={<Book />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/movie' element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}