import React from 'react'

const Main = () => {
  return(
    <div>
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
            <a className="dropdown-item" href="#">Problem #1</a>
          </div>
        </li>
      </nav>
    </div>
  )
}

export default Main
