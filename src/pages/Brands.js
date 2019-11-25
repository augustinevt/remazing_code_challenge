import React, { useState } from 'react'

import { faSearch, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
        <h3>Brands</h3>
      </div>

      <div className={styles.brandGrid}>
        <div className={styles.brandSearchContainer}>
          <div className={styles.brandDropDownConatiner}>
            Your Brands
            <FontAwesomeIcon icon={faChevronUp} />
          </div>

          <div className={styles.brandSearchBar}>
            <input placeholder="Search brands..." onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
            <FontAwesomeIcon icon={faSearch} />
          </div>

        </div>

        <div className={styles.brandLayout_cardContainer}>
          {
            brands.length > 0
              ? brands.map((item) => (
                <div key={item.id}>
                  <BrandCard data={item} />
                </div>
              ))
              : 'Your search returned not results'
          }
      </div>
      </div>


    </div>
  )
}
