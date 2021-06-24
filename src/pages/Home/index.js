import React from 'react';
import Sidebar from '../../components/Sidebar';
import Featured from '../../components/Featured';
import './style.css';


const Home = (props) => {
  return (

    <div className="home-container">
      <Sidebar />
      <Featured />
    </div>

  )
}

export default Home