import './App.css';
import React from 'react';

import Navbar from './Components/Navbar';
import Partner from './Components/Partner';
import Home from './Components/Home';
import Testimonial from './Components/Testimonial';
import Service from './Components/Service';
import Case from './Components/Case';
import Cards from './Components/Cards';
import Transportation from './Components/Transportation';
import Awareness from './Components/Awareness';
import Footer from './Components/Footer';
import Buttons from './Components/Buttons';
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
        <Home/>
        <Buttons/>
        <Partner/>
        <Testimonial/>
        <Service />
        <Buttons/>
        <Case/>
        <Transportation/>
        <Cards/>
        <Awareness/>
        <Buttons/>
        <Footer/>
      </React.Fragment>
    </div>
  );
}

export default App;
