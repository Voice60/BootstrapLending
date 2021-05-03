import React from 'react'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <section className={`${styles.home}`}>
      <div className={styles.container}>
        <h1 className={`text-light ${styles.title}`}>Web development project</h1>
        <h5 className='text-light'>Very suitable to support all web development projects</h5>
        <div className={`mt-5 mb-5 d-flex gap-3 ${styles.buttons}`}>
          <button type="button" className="btn btn-primary btn-lg">Our Services</button>
          <button type="button" className="btn btn-outline-primary btn-lg">Here is now</button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class={`bi bi-caret-down ${styles.arrow}`} viewBox="0 0 16 16">
          <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
        </svg>
      </div>
    </section>
  )
}

export default Home
