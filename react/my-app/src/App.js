// import logo from './logo.svg';
// import image from './img/image.png';
import './App.css';
import Component from './lesson36-hook/Component';
import ComponentTwo from './lesson36-hook/ComponentTwo';
import ComponentThree from './lesson36-hook/ComponentThree';
// import Mycompnonent from './Mycomponent';
// import Button from './Button';
// import ComponentProps from './lesson35-react/ComponentProps';
// import ComponentPropsTwo from './lesson35-react/ComponentPropsTwo';
// import ComponentPropsThree from './lesson35-react/ComponentPropsThree';
// import Main from './lesson35-react/Main';
// import MainTwo from './lesson35-react/MainTwo';
// import MainThree from './lesson35-react/MainThree';
// import RandomText from './homework/RandomText';
// import MagicBall from './homework/MagicBall';
// import magic from './homework/magic-ball-img-two-removebg-preview.png'

function App() {
  return (
    <div className="App">
      {/* <ComponentProps text="dwadaw"/> */}
      {/* <ComponentPropsTwo color="black"/> */}
      {/* <ComponentPropsThree/> */}
      {/* <Main/> */}
      {/* <MainTwo/> */}
      {/* <MainThree/> */}
      {/* <p>dwadwad</p> */}
      {/* <div className='container-image-magic-ball'>
        <MagicBall/>
      </div>
      <RandomText/> */}

      <Component start={1}/>
      <hr/><br/><br/><br/>
      <ComponentTwo />

      <ComponentThree/>
    </div>
  );
}

export default App;
