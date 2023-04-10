// import logo from './logo.svg';
// import image from './img/image.png';
import './App.css';
// import Mycompnonent from './Mycomponent';
// import Button from './Button';
import ComponentProps from './lesson35-react/ComponentProps';
import ComponentPropsTwo from './lesson35-react/ComponentPropsTwo';
import ComponentPropsThree from './lesson35-react/ComponentPropsThree';
import Main from './lesson35-react/Main';
import MainTwo from './lesson35-react/MainTwo';
import MainThree from './lesson35-react/MainThree';

function App() {
  return (
    <div className="App">
      <ComponentProps text="dwadaw"/>
      <ComponentPropsTwo color="black"/>
      <ComponentPropsThree/>
      <Main/>
      <MainTwo/>
      <MainThree/>
    </div>
  );
}

export default App;
