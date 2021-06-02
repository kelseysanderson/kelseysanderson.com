import React from 'react';
import Card from '../Card';
import FeaturedPost from '../../assets/blog-images/laptop-on-table.jpg';
import './style.css'

/**
* @author
* @function Featured
**/

const Featured = (props) => {
  return (
    <div className='featured-home'>
    <Card>
        <h1 className="featured-header card-header">
          From Human Services to Coding
        </h1>
        <div className="featured-image-container">
          <img className='featured-image' src={FeaturedPost} alt="laptop on a table"></img>
        </div>
        <div className="blog-text">
          <p>
            Computer Programming? Well, that is quite the change. This is what I heard often when I decided to change careers after working for five years out of college as a behavioral therapist for children with autism. Little did I know this would be the start of an exciting journey into a new field that I love.
        </p>
          <p>
            I started doing a couple of crash courses in Python with a friend and did an online course in JavaScript and HTML/CSS.
            Problem solving was exciting and seeing my code create visible results was so satisfying. That's when I decided coding is what I wanted to do, so I signed up for a full-stack web development bootcamp through the University of Minnesota.
        </p>
          <p>
            The first week of the bootcamp was a pretty straight forward refresher on the HTML/CSS I had learned previously, but week-by-week things got more intense.
            It was challenging learning novel skills so quickly. One week we learned Node and Express, then began to incorporate MySQL.
            "What have I gotten myself into?" is a thought that often popped into my head, but things continued to click each week and using the technologies together began to make a lot of sense.
        </p>
          <p>
            The further we got, the more I thought about what projects I could work on after the class was finished. Maybe I'll make a blog site or help a friend make a website for their
            online business! I felt like I had a (not-so-secret) superpower up my sleeves.
        </p>
          <p>
            There has not been a day where I have regretted my decision to tackle a new career in web development. It is exactly the work I want to be doing. I am still eager to keep learning
            and have more of those "Aha!" moments.
        </p>
        </div>

      </Card>
      <Card>
                <div className='technologies'>
                <div className='card-header'>
                    <h1>Proficient Technologies</h1>
                </div>
                <h3 className="description">The following is list of technologies that I have worked with often and feel most proficient in. There are additional technlogies I have used, but did not include.</h3>
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
            </Card>
  </div>



  )

}

export default Featured