import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default class IndexPage extends Component
{
  render()
  {
    return (<Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>);
  }
}
