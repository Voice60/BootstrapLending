import React from 'react'
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <nav className="fixed-top navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-xl">
        <a className="navbar-brand" href="#">WDP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${styles.nav}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Servicing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#prices">Prices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">Our Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
