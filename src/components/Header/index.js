import React from 'react';
import Navbar from '../Navbar';
import './style.css';

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="row">
        <div className="col-12">
          <header className="header">
            <h1 className="header-text">Kelsey Sanderson</h1>
            <Navbar />
          </header>
        </div>
      </div>
    </div>

  )

}

export default Header