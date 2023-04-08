import logo from './logo.svg';
import image from './img/image.png';
import './App.css';
import Mycompnonent from './Mycomponent';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Mycompnonent color="purple" text="hellow"/>
      <Button/>
      <Button/>
      <header className="App-header">
        <img src ={image}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
