import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Prices from './components/Prices/Prices';
import Services from './components/Services/Services';
import Team from './components/Team/Team';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Prices />
      <Team />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
