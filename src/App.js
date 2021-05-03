import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Prices from './components/Prices/Prices';

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Prices />
    </div>
  );
}

export default App;
