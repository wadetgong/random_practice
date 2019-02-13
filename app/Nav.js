import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Random Practice
        </a>
        <div className="dropdown-menu">
          <Link className="dropdown-item" to="/">Home</Link>
          <Link className="dropdown-item" to="/problem1">Problem #1</Link>
        </div>
      </li>
    </nav>
  )
}

export default Nav
