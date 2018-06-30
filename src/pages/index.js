import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import Contact from '../components/Contact'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import zeka from '../assets/images/zeka.jpg'
import oscon from '../assets/images/oscon.jpg'

import octocat from '../assets/images/octocat.png'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${zeka})`}}>
                            <header className="major">
                                <h3>About</h3>
                                <p>Learn more about me.</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Work</h3>
                                <p>Learn in more detail about my corporate and customer work.</p>
                            </header>
                            <Link to="/work" className="link primary"></Link>
                        </article>

                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>GitHub</h2>
                            </header>
                            <p>Some of my personal work can be found on GitHub. Also, there you will find my school work as well.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/Danilo-Zekovic" target="_blank" className="button next">Visit My GitHub</a></li>
                            </ul>
                        </div>
                    </section>
                    <section id="three" className="tiles">
                        <article style={{backgroundImage: `url(${oscon})`, width:`100%`}}>
                            <header className="major">
                                <h3>Speaker</h3>
                                <p>I spoke multiple times at the conventions, find out more about it.</p>
                            </header>
                            <Link to="/speaker" className="link primary"></Link>
                        </article>

                    </section>
                </div>
                <Contact/>
            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
