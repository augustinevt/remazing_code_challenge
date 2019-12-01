import React, { useState } from 'react'
import { faSearch, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BrandCard from '../components/BrandCard'
import styles from './brands.module.css'

export default ({ mockData }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const brands = searchTerm.length > 0
    ? mockData.filter(({ name }) => name.toLowerCase().match(searchTerm))
    : mockData

  return (
    <div>
      <div className={styles.titleBar}>
        <div>Brands</div>
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.searchContainer}>
          <div className={styles.dropDownContainer}>
            <div className={styles.dropDownValue}>Your Brands</div>
            <FontAwesomeIcon icon={faChevronUp} size="xs" color="#a5acb5" />
          </div>

          <div className={styles.searchBar}>
            <input placeholder="Search brands..." onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
            <FontAwesomeIcon icon={faSearch} color="#a5acb5" />
          </div>
        </div>


        <div className={styles.cardContainer}>
          {
            brands.length > 0
              ? brands.map((item) => (
                <BrandCard data={item} />
              ))
              : (
                <div className={styles.errorContainer}>
                  Your search returned no results.
                </div>
              )
          }
        </div>
      </div>
    </div>
  )
}
