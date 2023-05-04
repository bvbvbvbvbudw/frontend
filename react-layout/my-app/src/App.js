import './App.css';
import Header from './Components/Header/Header';
import Intro from './Components/Content/Intro';
import About from './Components/Content/About';
import Statistics from './Components/Content/Statistics';
import Services from './Components/Content/Services';
import Devices from './Components/Content/Devices';
import WeDo from './Components/Content/WeDo';
import Reviews from './Components/Content/Reviews';
import Teams from './Components/Content/Teams';
import Brands from './Components/Content/Brands';
import Gallery from './Components/Content/Gallery';
import PeopleSay from './Components/Content/PeopleSay';
import LatestBlog from './Components/Content/LatestBlog';
import Map from './Components/Content/Map';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Statistics/>
      <Services/>
      <Devices/>
      <WeDo/>
      <Reviews/>
      <Teams/>
      <Brands/>
      <Gallery/>
      <Reviews/>
      <PeopleSay/>
      <LatestBlog/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
