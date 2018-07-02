import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerPage from '../components/BannerPage'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const About = (props) => (
    <div>
        <Helmet>
            <title>About - Danilo Zeković</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <BannerPage
          title="About Me"
          description="Learn something you might not know about me."
          />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>I was born and raised in Novi Sad, Serbia. Most of my childhood I spent on the banks of river Danube, which was and still is a big part of my life. At the age of 7 I started playing basketball and played it for 16 years, winning the Serbian U18 championship in 2010. Also, I had a 4 year basketball college carrear. <br/>From the young age I showed intreset in mathematics and technology, mostly tahnks to both of my grandfathers. Both of them were engeeners and thought me how to use many diferent tools and how to build stuff. Everything that they thought me lead to me discovering computers, but it wasnt until professor Brian Capouch that I entirely fell in love with coding. Since then I dedicated my time to improving myself and creating software. </p>

                    <p>My work and presentations can be found on the pages Work and Speaker:</p>

                    <Link to="/work" className="button">
                        <p>Work</p>
                    </Link>
                    <Link to="/speaker" className="button">
                        <p>Speaker</p>
                    </Link>

                </div>
            </section>
            <section id="two">
                <div className="inner">
                    <header className="major">
                        <h2>Education</h2>
                    </header>
                    <h3><b>Saint Joseph's College</b>, <i>Rensselaer, IN, USA</i></h3>
                    <h4>Bachelor of Science in Computer Science</h4>
                    <h5>2012-2016</h5>
                    <hr/>
                    <h3><b>University of Novi Sad, Faculty of Technical Science</b>, <i>Novi Sad, Serbia</i></h3>
                    <h4>Master's in Software Engineering and Informational Technologies</h4>
                    <h5>2017-Present</h5>
                </div>
            </section>
            <section id="three">
                <div className="inner">
                    <header className="major">
                        <h2>Skills</h2>
                    </header>
                    <ul>
                      <li>Programing Languages: JavaScript, Java, Python, C, HTML, CSS</li>
                      <li>Conversant with Linux shell, edit, and build systems</li>
                      <li>Full-stack web app development tools, e.g. React, Node, Bootstrap, Atom</li>
                      <li>Experience with: Express, MongoDB, GraphQL, Apollo, Webpack, Babel, JSON, jQuery, Angular, Docker, Travis CI</li>
                      <li>Single-page Applications (SPA) concepts and fundamentals</li>
                      <li>Progressive Web Applications (PWA) concepts and fundamentals</li>
                      <li>Excellent communication and people skills</li>
                      <li>Fluent in Serbian and English, good in Hungarian</li>
                      <li>Driver's Licence B category (active driver)</li>
                    </ul>
                </div>
            </section>
            {/*<section id="four" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>*/}
        </div>

    </div>
)

export default About
