import React from 'react'

import styles from './brandCard.module.css'

export default ({ data }) => (
  <div className={styles.brandCard_wrapper} style={{backgroundImage:`url(${process.env.PUBLIC_URL}/${data.img})`}}>
    <div className={styles.brandCard_menuOverlay} />
    <div className={styles.brandCard_menu}>
        All Phases
        Monitoring
        Amazon Cases

        <button>
          Dashboard
        </button>

        <button>
          Product Catalog
        </button>
    </div>


  </div>
)


// <img styles={styles.img} src={`${process.env.PUBLIC_URL}/${data.img}`} alt={`${data.name}-logo`} />
