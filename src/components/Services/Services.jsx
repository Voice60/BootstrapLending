import React, { useEffect, useState } from 'react'

import styles from './Services.module.scss'

const CardFlex = () => {
  return (
    <div className={`d-flex justify-content-evenly w-100 flex-wrap ${styles.itemsGroup}`}>
      <div className={styles.card}>
        <div className={`position-relative ${styles.cardTop}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className={`bi bi-search mx-auto position-absolute top-50 start-50 translate-middle ${styles.icon}`} viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <div className={`d-flex flex-column position-relative ${styles.cardBottom}`}>
          <h1 className={`fles-grow-1 mb-3 ${styles.cardTitle}`}>Research</h1>
          <p className={`${styles.cardText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button type="button" className={`btn btn-outline-dark position-absolute ${styles.button}`}>Read More</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={`position-relative ${styles.cardTop}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className={`bi bi-briefcase mx-auto position-absolute top-50 start-50 translate-middle ${styles.icon}`} viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
          </svg>
        </div>
        <div className={`d-flex flex-column position-relative ${styles.cardBottom}`}>
          <h1 className={`fles-grow-1 mb-3 ${styles.cardTitle}`}>Portfolio</h1>
          <p className={`${styles.cardText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button type="button" className={`btn btn-outline-dark position-absolute ${styles.button}`}>Read More</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={`position-relative ${styles.cardTop}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className={`bi bi-headset mx-auto position-absolute top-50 start-50 translate-middle ${styles.icon}`} viewBox="0 0 16 16">
            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
          </svg>
        </div>
        <div className={`d-flex flex-column position-relative ${styles.cardBottom}`}>
          <h1 className={`fles-grow-1 mb-3 ${styles.cardTitle}`}>Support</h1>
          <p className={`${styles.cardText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button type="button" className={`btn btn-outline-dark position-absolute ${styles.button}`}>Read More</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={`position-relative ${styles.cardTop}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className={`bi bi-paperclip mx-auto position-absolute top-50 start-50 translate-middle ${styles.icon}`} viewBox="0 0 16 16">
            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
          </svg>
        </div>
        <div className={`d-flex flex-column position-relative ${styles.cardBottom}`}>
          <h1 className={`fles-grow-1 mb-3 ${styles.cardTitle}`}>Documentation</h1>
          <p className={`${styles.cardText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button type="button" className={`btn btn-outline-dark position-absolute ${styles.button}`}>Read More</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={`position-relative ${styles.cardTop}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className={`bi bi-laptop mx-auto position-absolute top-50 start-50 translate-middle ${styles.icon}`} viewBox="0 0 16 16">
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
          </svg>
        </div>
        <div className={`d-flex flex-column position-relative ${styles.cardBottom}`}>
          <h1 className={`fles-grow-1 mb-3 ${styles.cardTitle}`}>Development</h1>
          <p className={`${styles.cardText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button type="button" className={`btn btn-outline-dark position-absolute ${styles.button}`}>Read More</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={`position-relative ${styles.cardTop}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className={`bi bi-brush-fill mx-auto position-absolute top-50 start-50 translate-middle ${styles.icon}`} viewBox="0 0 16 16">
            <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z" />
          </svg>
        </div>
        <div className={`d-flex flex-column position-relative ${styles.cardBottom}`}>
          <h1 className={`fles-grow-1 mb-3 ${styles.cardTitle}`}>Design</h1>
          <p className={`${styles.cardText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button type="button" className={`btn btn-outline-dark position-absolute ${styles.button}`}>Read More</button>
        </div>
      </div>
    </div>
  )
}

const CardCarousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide w-100" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-100">
            <div className={`mt-2 mx-auto ${styles.card}`}>
              <div className={`position-relative ${styles.cardTop}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className={`bi bi-search mx-auto position-absolute top-50 start-50 translate-middle ${styles.icon}`} viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <div className={`d-flex flex-column position-relative ${styles.cardBottom}`}>
                <h1 className={`fles-grow-1 mb-3 ${styles.cardTitle}`}>Research</h1>
                <p className={`${styles.cardText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button type="button" className={`btn btn-outline-dark position-absolute ${styles.button}`}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="100000000">
          <div className="d-block w-100">
            <div className={`mt-2 mx-auto ${styles.card}`}>
              <div className={`position-relative ${styles.cardTop}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className={`bi bi-briefcase mx-auto position-absolute top-50 start-50 translate-middle ${styles.icon}`} viewBox="0 0 16 16">
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                </svg>
              </div>
              <div className={`d-flex flex-column position-relative ${styles.cardBottom}`}>
                <h1 className={`fles-grow-1 mb-3 ${styles.cardTitle}`}>Portfolio</h1>
                <p className={`${styles.cardText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button type="button" className={`btn btn-outline-dark position-absolute ${styles.button}`}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="100000000">
          <div className="d-block w-100">
            <div className={`mt-2 mx-auto ${styles.card}`}>
              <div className={`position-relative ${styles.cardTop}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className={`bi bi-headset mx-auto position-absolute top-50 start-50 translate-middle ${styles.icon}`} viewBox="0 0 16 16">
                  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                </svg>
              </div>
              <div className={`d-flex flex-column position-relative ${styles.cardBottom}`}>
                <h1 className={`fles-grow-1 mb-3 ${styles.cardTitle}`}>Support</h1>
                <p className={`${styles.cardText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button type="button" className={`btn btn-outline-dark position-absolute ${styles.button}`}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="100000000">
          <div className="d-block w-100">
            <div className={`mt-2 mx-auto ${styles.card}`}>
              <div className={`position-relative ${styles.cardTop}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className={`bi bi-paperclip mx-auto position-absolute top-50 start-50 translate-middle ${styles.icon}`} viewBox="0 0 16 16">
                  <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                </svg>
              </div>
              <div className={`d-flex flex-column position-relative ${styles.cardBottom}`}>
                <h1 className={`fles-grow-1 mb-3 ${styles.cardTitle}`}>Documentation</h1>
                <p className={`${styles.cardText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button type="button" className={`btn btn-outline-dark position-absolute ${styles.button}`}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="100000000">
          <div className="d-block w-100">
            <div className={`mt-2 mx-auto ${styles.card}`}>
              <div className={`position-relative ${styles.cardTop}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className={`bi bi-laptop mx-auto position-absolute top-50 start-50 translate-middle ${styles.icon}`} viewBox="0 0 16 16">
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                </svg>
              </div>
              <div className={`d-flex flex-column position-relative ${styles.cardBottom}`}>
                <h1 className={`fles-grow-1 mb-3 ${styles.cardTitle}`}>Development</h1>
                <p className={`${styles.cardText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button type="button" className={`btn btn-outline-dark position-absolute ${styles.button}`}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="100000000">
          <div className="d-block w-100">
            <div className={`mt-2 mx-auto ${styles.card}`}>
              <div className={`position-relative ${styles.cardTop}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className={`bi bi-brush-fill mx-auto position-absolute top-50 start-50 translate-middle ${styles.icon}`} viewBox="0 0 16 16">
                  <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z" />
                </svg>
              </div>
              <div className={`d-flex flex-column position-relative ${styles.cardBottom}`}>
                <h1 className={`fles-grow-1 mb-3 ${styles.cardTitle}`}>Design</h1>
                <p className={`${styles.cardText}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button type="button" className={`btn btn-outline-dark position-absolute ${styles.button}`}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={`carousel-control-prev ${styles.buttonPrev}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className={`carousel-control-next ${styles.buttonNext}`} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}



const Services = () => {

  const [windowWidth, setWindowWidth] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id='services' className={`paddingTB130px ${styles.services}`}>
      <div className='container-xl d-flex flex-column align-items-center'>
        <h1 className='mb-5 text-center title'>Our services</h1>
        <p className='text-center paddingB130px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,</p>
        {windowWidth > 700
          ? <CardFlex />
          : <CardCarousel />}
      </div>
    </section>
  )
}

export default Services
