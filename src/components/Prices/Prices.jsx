import React from 'react'
import styles from './Prices.module.scss'

const Prices = () => {
  return (
    <section className={` ${styles.prices}`}>
      <div className='container-xl paddingTB130px text-center'>
        <h1 className='fw-bold mb-5 text-center fontSize3r'>Pricing Plan</h1>
        <p className='text-center paddingB130px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,</p>
        <div className={styles.itemsGroup}>
          <div className={`shadow-sm card ${styles.item}`}>
            <div className={`text-light ${styles.itemTop}`}>
              <h2 className='mb-5'>Free Trail</h2>
              <div className={styles.priceText}>
                <span className={styles.dol}>$ </span><span className={`text-warning ${styles.itemPrice}`}>00</span> per Month
              </div>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionItem}>5 Free Trail</p>
              <p className={styles.descriptionItem}>1 Free Project</p>
              <p className={styles.descriptionItem}>PHP 5 disabled</p>
              <p className={styles.descriptionItem}>24/7 support</p>
              <button type="button" className={`btn btn-outline-primary stretched-link ${styles.button}`}>Order now</button>
            </div>
          </div>
          <div className={`shadow-sm card ${styles.item}`}>
            <div className={`text-light ${styles.itemTop}`}>
              <h2 className='mb-5'>Basic</h2>
              <div className={styles.priceText}>
                <span className={styles.dol}>$ </span><span className={`text-warning ${styles.itemPrice}`}>50</span> per Month
              </div>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionItem}>10 Free Trail</p>
              <p className={styles.descriptionItem}>5 Free Project</p>
              <p className={styles.descriptionItem}>PHP 5 enabled</p>
              <p className={styles.descriptionItem}>24/7 support</p>
              <button type="button" className={`btn btn-outline-primary stretched-link ${styles.button}`}>Order now</button>
            </div>
          </div>
          <div className={`shadow-sm card ${styles.item}`}>
            <div className={`text-light ${styles.itemTop}`}>
              <h2 className='mb-5'>Ultimates</h2>
              <div className={styles.priceText}>
                <span className={styles.dol}>$ </span><span className={`text-warning ${styles.itemPrice}`}>99</span> per Month
              </div>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptionItem}>30 Free Trail</p>
              <p className={styles.descriptionItem}>10 Free Project</p>
              <p className={styles.descriptionItem}>PHP 5 enabled</p>
              <p className={styles.descriptionItem}>24/7 support</p>
              <button type="button" className={`btn btn-outline-primary stretched-link ${styles.button}`}>Order now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices
