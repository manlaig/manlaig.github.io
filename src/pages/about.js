import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
    <Layout>
        <h1>Hello World</h1>
        <p>I love to learn about technology</p>
        <p>I created this website with purpose to share my ideas and projects with others</p>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default About
