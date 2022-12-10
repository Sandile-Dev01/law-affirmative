import React from 'react';
import './main.css';

import { Home, Law, Feedback, Footer } from './containers';
import { Navbar, Practices, Services, Contact} from './components';

const App = () => {
  return (
    <div className="App">
        
          <Navbar />
          <Home />
          <Law />
          <Practices />
          <Services />
          <Feedback />
          <Contact />
          <Footer />
    </div>
  )
}

export default App