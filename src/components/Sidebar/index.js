import React from 'react';
import './style.css';
import Card from '../Card';
import portrait from '../../assets/portrait/23847-1.png';
import pickleball from '../../assets/current-likes/pickleball.png';
import canasta from '../../assets/current-likes/canasta.png';
import tea from '../../assets/current-likes/tea.png';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <Card>
                <div className='card-header'>
                    <h1>ABOUT ME</h1>
                </div>
                <div className='portrait-container'>
                    <img src={portrait} alt='portrait' className='portrait' />
                </div>
                <div className='card-body'>
                    <p>My name is Kelsey Sanderson. I am a full stack web developer from Minneapolis, MN. </p>
                </div>
            </Card>
            <Card>
                <div className='recent-likes'>
                <div className='card-header'>
                    <h1 className="favorites-header">Hobbies</h1>
                </div>
                <h3 className="description">Below are some of my hobbies, they are ever-changing but these are my current go-tos.</h3>
                    <ul className="favorites-list">
                        <li className="favorites-list-item">
                            <h3 className="current-favorite-header">Pickleball</h3>
                            <a className="recent-likes-link" href="https://www.pickleball.com/rules-how-to-play-pickleball-s/106.htm">
                            <img src={pickleball} alt="woman standing on pickleball court"/>
                            If you're interested, check out how to play!</a>
                        </li>
                        <li className="favorites-list-item">
                            <h3 className="current-favorite-header">Canasta</h3>
                            <a className="recent-likes-link" href="https://www.canasta-palace.com/">
                            <img src={canasta} alt="person shuffling a deck of cards"/>
                            Play Online</a>
                        </li>
                        <li className="favorites-list-item">
                            <h3 className="current-favorite-header">Tea</h3>
                            <a className="recent-likes-link" href="https://www.teasource.com/products/roasted-chestnut-black-tea-blend">
                            <img src={tea} alt="tea pot and cup"/>
                            Here is a link to my favorite tea!</a>
                        </li>
                    </ul>
                </div>
            </Card>
            
        </div>
    )

}

export default Sidebar