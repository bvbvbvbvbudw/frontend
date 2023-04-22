// import Component from './homework-hook/Component';
// import ComponentTwo from './homework-hook/ComponentTwo';
// import ComponentThree from './homework-hook/ComponentThree';
// import ComponentFourth from './homework-hook/ComponentFourth';
// import ComponentFive from './homework-hook/ComponentFive';
// import ComponentSix from './homework-hook/ComponentSIx';
// import ComponentSeven from './homework-hook/ComponentSeven';
// import ComponentEigth from './homework-hook/ComponentEigth';
// import ComponentNine from './homework-hook/ComponentNine';
// import ComponentTen from './homework-hook/ComponentTen';
// import ForTS from './homework-state/ForTS'

import './App.css';
import React from 'react';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      {/* <ForTS /> */}

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


















