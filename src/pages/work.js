import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerWork from '../components/BannerWork'

import cps from '../assets/images/pic08.jpg'
import crm from '../assets/images/pic09.jpg'

const Work = (props) => (
    <div>
        <Helmet>
            <title>Work</title>
            <meta name="description" content="My Work Page" />
        </Helmet>

        <BannerWork />

        <div id="main">
            <section id="one" className="spotlights">
                <section>
                    {/*<Link to="/generic" className="image">*/}
                        <img src={cps} alt="" />
                    {/*</Link>*/}
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Compass Payment Services (CPS)</h3>
                            </header>
                            <p>CPS is the fuel card and fleet management system in the United States and Canada. It provides customers with fuel cards that drivers can use on gas stations including Pilot and Flying J.
Built with Javascript, JQuery, and Bootstrap on the frontend and Node.js, Express.js and MongoDB on the backend. <br/><br/>
<i>Technology stack: Javascript, JQuery, Node.js, Express.js, MongoDB</i>
</p>
                            <ul className="actions">
                                <li><a href="https://compasspaymentservices.com/" target="_blank" className="button">Visit Web Presentation</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    {/*<Link to="/generic" className="image">*/}
                        <img src={crm} alt="" />
                    {/*</Link>*/}
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Customer Relationship Menagment (CRM)</h3>
                            </header>
                            <p>"System for managing company's interaction with potential and current customers.
Frontend built with JQuery and Javascript, while the backend was implemented with Express.js, Node.js and MongoDB.
Danilo worked as a full stack developer, building new functionalities from requirements as well as adding the necessary database architecture to support that. He also worked on integrating Adobe Sign into the app, client specific data scripts and bug fixing."<br/><br/>
<i>Technology stack: Javascript, JQuery, Node.js, Express.js, MongoDB</i>
</p>
                            <ul className="actions">
                                <li><a href="https://www.compassholding.net/" className="button">Visit Company Web Page</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

            </section>
        </div>

    </div>
)

export default Work
