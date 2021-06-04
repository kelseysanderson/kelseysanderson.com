import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Test from './pages/Test';

import Header from './components/Header';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';


function App() {
  return (
    <Router>
      <Wrapper>
      <Header/>
      <div className="App">
 

        <main>
        <Route exact path="/test" component={Test} />

        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />

        <Route exact path="/contact" component={Contact} />
        </main>
      </div>
      <Footer/>
      </Wrapper>
      
    </Router>

  );
}

export default App;
