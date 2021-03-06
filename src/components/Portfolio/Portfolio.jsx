import React from 'react'
import styles from './Portfolio.module.scss'
import photo1 from '../../images/Photo1.png'
import photo2 from '../../images/Photo2.png'
import photo3 from '../../images/Photo3.png'
import photo4 from '../../images/Photo4.png'
import photo5 from '../../images/Photo5.png'
import photo6 from '../../images/Photo6.png'

const Portfolio = () => {
  return (
    <section id='portfolio' className='container-xl paddingTB130px'>
      <h1 className='mb-5 text-center title'>Latest Works</h1>
      <p className='text-center paddingB130px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,</p>
      <div className='d-flex justify-content-evenly flex-wrap'>
        <div className={`position-relative ${styles.item}`}>
          <p className={`text-light position-absolute top-50 start-50 translate-middle ${styles.itemName}`}>Hand Watch</p>
          <img src={photo1} className={styles.photo} alt="Hand Watch" />
        </div>
        <div className={`position-relative ${styles.item}`}>
          <p className={`text-light position-absolute top-50 start-50 translate-middle ${styles.itemName}`}>Package</p>
          <img src={photo2} className={styles.photo} alt="Package" />
        </div>
        <div className={`position-relative ${styles.item}`}>
          <p className={`text-light position-absolute top-50 start-50 translate-middle ${styles.itemName}`}>Pack</p>
          <img src={photo3} className={styles.photo} alt="Pack" />
        </div>
        <div className={`position-relative ${styles.item}`}>
          <p className={`text-light position-absolute top-50 start-50 translate-middle ${styles.itemName}`}>Flask</p>
          <img src={photo4} className={styles.photo} alt="Flack" />
        </div>
        <div className={`position-relative ${styles.item}`}>
          <p className={`text-light position-absolute top-50 start-50 translate-middle ${styles.itemName}`}>Wine</p>
          <img src={photo5} className={styles.photo} alt="Wine" />
        </div>
        <div className={`position-relative ${styles.item}`}>
          <p className={`text-light position-absolute top-50 start-50 translate-middle ${styles.itemName}`}>Handbag</p>
          <img src={photo6} className={styles.photo} alt="Handbag" />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
