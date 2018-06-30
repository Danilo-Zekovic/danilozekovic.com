import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerPage from '../components/BannerPage'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Speaker = (props) => (
    <div>
        <Helmet>
            <title>Speaker - Danilo Zeković</title>
            <meta name="description" content="Speaker Page" />
        </Helmet>

        <BannerPage
          title="Speaker"
          description="Here you will find description of topics and conventions on which I spoke."
          />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>How It All Started</h2>
                    </header>
                    <p>After my first visit and presentation at the OSCON in 2016, I became addicted to conventions. All the people I met, sessions I attended, and all the knowlege I got made me feel amazing. And since then I wish to return every year. Bellow you will find three of my visits and presentations at Open Source Convention (OSCON). </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header style={{margin:`0 0 0.3em 0`}} className="major">
                                <h3>Fundamentals of GraphQL</h3>
                                <h4 style={{margin:`0 0 0.3em 0`}}><i>Tutorial</i></h4>
                            </header>
                            <p style={{margin:`0 0 0.4em 0`}}>
                              <b> Convention:</b><i> <a href="https://conferences.oreilly.com/oscon" target="_blank">Open Source Convention (OSCON)</a></i>;
                              <b> Presenters:</b><i> Brian Capouch, Danilo Zeković</i>;
                              <b> Date:</b><i> Luly 17, 2018</i>
                            </p>
                            <p>"GraphQL—a schema-based, client-centric model for data interchange—offers web programmers an alternative to REST. Brian Capouch and Danilo Zekovic offer an overview of GraphQL basic concepts, its data types and schema, and the GraphiQL debugging interface and walk you through using a GraphQL starter kit to gain hands-on experience..."</p>
                            <ul className="actions">
                                <li><a href="https://conferences.oreilly.com/oscon/oscon-or/public/schedule/detail/67508" target="_blank" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header style={{margin:`0 0 0.3em 0`}} className="major">
                                <h3>Progressive Web Applications (PWA)</h3>
                                <h4 style={{margin:`0 0 0.3em 0`}}><i>Session</i></h4>
                            </header>
                            <p style={{margin:`0 0 0.4em 0`}}>
                              <b> Convention:</b><i> <a href="https://conferences.oreilly.com/oscon" target="_blank">Open Source Convention (OSCON)</a></i>;
                              <b> Presenters:</b><i> Brian Capouch, Danilo Zeković</i>;
                              <b> Date:</b><i> May 11, 2017</i>
                            </p>
                            <p>"Brian Capouch and Danilo Zekovic offer a high-level overview of the emerging architecture of progressive web applications, examining code snippets that implement various components and functions and exploring the tools that provide the PWA developer with information about the application, in terms of its adherence to best practices and performance under real-world conditions..."</p>
                            <ul className="actions">
                                <li><a href="https://conferences.oreilly.com/oscon/oscon-tx/public/schedule/detail/57178" target="_blank" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header style={{margin:`0 0 0.3em 0`}} className="major">
                                <h3>SPA Boot Camp</h3>
                                <h4 style={{margin:`0 0 0.3em 0`}}><i>Tutorial</i></h4>
                            </header>
                            <p style={{margin:`0 0 0.4em 0`}}>
                              <b> Convention:</b><i> <a href="https://conferences.oreilly.com/oscon" target="_blank">Open Source Convention (OSCON)</a></i>;
                              <b> Presenters:</b><i> Brian Capouch, Ben Devisson, Danilo Zeković</i>;
                              <b> Date:</b><i> May 17, 2016</i>
                            </p>
                            <p>"Brian Capouch, Danilo Zekovic, and Ben Davisson offer an introduction to single-page apps, presenting an overview of concepts and techniques focused on practical familiarity with this technology. Brian, Danilo, and Ben review frameworks and toolkits, but their approach remains intensely vendor agnostic..."</p>
                            <ul className="actions">
                                <li><a href="https://conferences.oreilly.com/oscon/oscon-tx-2016/public/schedule/detail/49308" target="_blank" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>

            </section>
        </div>

    </div>
)

export default Speaker
