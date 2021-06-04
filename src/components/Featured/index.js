import React from 'react';
import FeaturedPost from '../../assets/blog-images/laptop-on-table.jpg';
import './style.css'

/**
* @author
* @function Featured
**/

const Featured = (props) => {
  return (
    <div className='featured-home'>
    {/* <Card> */}
      <div className="card-header">
        <h1 className="featured-header-text">From Human Services to Coding</h1>
      </div>

        <div className="featured-image-container">
          <img className='featured-image' src={FeaturedPost} alt="laptop on a table"></img>
        </div>
        <div className="blog-text">
          <p>
            Computer Programming? That's not what I expected. This is what I heard often when I decided to change careers after working for five years as a behavioral therapist for children with autism. I was nervous and unsure of my decision at first, but little did I know this would be the start of an exciting journey into a new field that I love.
        </p>
          <p>
            I started doing a couple of crash courses in Python with a friend and an online course in JavaScript and HTML/CSS. I powered through despite initial doubts. 
            Problem solving and creating visible results was starting to get addicting and I looked forward to continue to learn. That's when I knew coding is what I wanted to do, so I signed up for a full-stack web development bootcamp through the University of Minnesota.
        </p>
          <p>
            The first week of the bootcamp was a pretty straight forward refresher on the HTML/CSS I had learned previously, but week-by-week things got more intense.
            We continued to build on technologies we had learned while new skills were being introduced.
            It was challenging but rewarding to learn novel skills so quickly and things continued to click each week and using the technologies together began to make a lot of sense. 
            Working in groups to complete projects was a great way to fill in some knowledge gaps with help from teammates as well as solidify concepts by demonstrating and talking through my own code with others.
        </p>
          <p>
            I thought about what projects I could work on after the bootcamp was finished. Maybe I'll make a blog site or help a friend make a website for their
            online business! The thought of being able to develop a website from scratch was empowering and I was excited to get started and continue learning. There hasn't been a day 
            that I haven't been grateful to have the opportunity to change careers and I am determined to do the best I can.
        </p>
        </div>

      {/* </Card> */}
      {/* <Card> */}
                <div className='technologies'>
                <div className='card-header'>
                    <h1 className="featured-header-text">Proficient Technologies</h1>
                </div>
                <h3 className="description featured-header-text">The following is list of technologies that I have worked with often and feel most proficient in. There are additional technlogies I have used, but did not include.</h3>
                    <ul className="tech-list">
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Mongo</li>
                        <li>Bootstrap</li>
                        <li>Git</li>
                    </ul>
                </div>
            {/* </Card> */}
  </div>



  )

}

export default Featured