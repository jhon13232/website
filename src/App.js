import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Skills from './Component/Skills/Skills';
import Work from './Component/Work/Work';
import Servicie from './Component/Servicie/Servicie';
import Contacto from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Navbars from './Component/Navbar/Navbars';
import Home from './Component/Home/Home';

function App() {
  return (

    <Router>
      <Navbars/>
      <Route path='/' exact component={Home}/>
      <Route path='/home' exact component={Home}/>
      <Route path='/work' exact component={Work}/>
      <Route path='/skills' exact component={Skills}/>
      <Route path='/servicie' exact component={Servicie}/>
      <Route path='/contact' exact component={Contacto}/>
      <Footer/>
  
    </Router>
   
  );
}

export default App;
