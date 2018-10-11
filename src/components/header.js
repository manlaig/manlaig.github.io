import React from 'react'
import { Link } from 'gatsby'

import './navbar.css'

const Header = ({ siteTitle }) => (
  <div class="nav"
    style={{
      background: "#363640",
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.5rem 1rem',
      }}
    >
      <h3 style={{ margin: 0 }} class="item name">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <p style={{ margin: 0 }} class="item top-right-menu">
        <Link
          to="/blog"
          style={{
            color: 'rgba(255,255,255,0.75)',
            textDecoration: 'none',
          }}
        >
          Blog
        </Link>
      </p>
      <p style={{ margin: 0 }} class="item top-right-menu">
        <Link
          to="/projects"
          style={{
            color: 'rgba(255,255,255,0.75)',
            textDecoration: 'none',
          }}
        >
          Projects
        </Link>
      </p>
      <p style={{ margin: 0 }} class="item top-right-menu">
        <Link
          to="/about"
          style={{
            color: 'rgba(255,255,255,0.75)',
            textDecoration: 'none',
          }}
        >
          About
        </Link>
      </p>
    </div>
  </div>
  
)

export default Header
