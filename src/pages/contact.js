import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerPage from '../components/BannerPage'
import ContactForm from '../components/Contact'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Contact = (props) => (
    <div>
        <Helmet>
            <title>Contact - Danilo Zeković</title>
            <meta name="description" content="Contact Page" />
        </Helmet>

        <BannerPage
          title="Contact"
          description="Reach out to me if you have any ideas, questions or sugestions."
          />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Social Media</h2>
                    </header>
                    <ul>
                      <li><a href="https://www.facebook.com/danilo.zekovic.5" target="_blank" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                      <li><a href="https://github.com/Danilo-Zekovic" target="_blank" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                      <li><a href="https://www.linkedin.com/in/danilo-zekovic-7a85b7b9/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    </ul>
                </div>
            </section>
            <section id="two" className="spotlights">

            </section>
            <ContactForm />
        </div>

    </div>
)

export default Contact
