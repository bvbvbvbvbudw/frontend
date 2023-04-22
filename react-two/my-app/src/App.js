import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';


function App() {

  return (
    <div>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;