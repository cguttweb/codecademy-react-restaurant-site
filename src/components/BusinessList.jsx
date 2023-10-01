import React from 'react'
import Business from './Business'
import styles from './BusinessList.module.css'

function BusinessList(){
  return (
  <div className={styles.businessList}>
  {/* use map? to generate multiple version of business component */}
    <Business />
    <Business />
    <Business />
    <Business />
  </div>

  )
}

export default BusinessList