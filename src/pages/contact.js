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
                        <h2>Sed amet aliquam</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
            </section>
            <section id="two" className="spotlights">

            </section>
            <ContactForm />
        </div>

    </div>
)

export default Contact
