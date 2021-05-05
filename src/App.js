import About from './components/About/About';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Prices from './components/Prices/Prices';
import Services from './components/Services/Services';
import Team from './components/Team/Team';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';

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
