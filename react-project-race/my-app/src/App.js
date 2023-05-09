import logo from './logo.svg';
import './App.css';
import './Styles/style.css'

import Road from './Components/Road';
import Car from './Components/Car';
import Control from './Components/Control';
import Barrier from './Components/Barrier';


import Game from './Components/Game';

function App() {
  return (
    <div className="App">

      <Road>
        <Game />
      </Road>



      <div className="time"></div>
      <div className="score"></div>

      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>


    </div>
  );
}

export default App;
