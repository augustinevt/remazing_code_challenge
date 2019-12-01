import React from 'react'

import styles from './brandCard.module.css'

export default ({ data }) => (
  <div
    className={styles.brandCard_wrapper}
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${data.img})` }}
  >
    <div className={styles.brandCard_menuOverlay} />
    <div className={styles.brandCard_menu}>
      <div className={styles.brandCard_menuItems}>
        <a
          href="./#"
          className={styles.menuItem}
        >
          All Phases
        </a>
        <a
          href="./#"
          className={styles.menuItem}
        >
          Monitoring
        </a>
        <a
          href="./#"
          className={styles.menuItem}
        >
          Amazon Cases
        </a>
        <a
          href="./#"
          className={styles.dashboardBtn}
        >
          <button type="button">
            Dashboard
          </button>
        </a>
        <a
          href="./#"
          className={styles.menuItem}
        >
          <button type="button">
            Product Catalog
          </button>
        </a>
      </div>
    </div>
  </div>
)
