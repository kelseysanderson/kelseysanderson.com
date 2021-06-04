import React from 'react';
import Sidebar from '../../components/Sidebar';
import Featured from '../../components/Featured';
import './style.css';


const Home = (props) => {
  document.querySelector('#home-link')?.classList.add('active-nav')
  document.querySelector('#resume-link')?.classList.remove('active-nav')
  document.querySelector('#work-link')?.classList.remove('active-nav')
  document.querySelector('#contact-link')?.classList.remove('active-nav')

  return (

    <div className="home-container">
      <Sidebar />
      <Featured />
    </div>

  )
}

export default Home