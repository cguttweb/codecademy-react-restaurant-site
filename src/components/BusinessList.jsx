import React from 'react'
import Business from './Business'
import styles from './BusinessList.module.css'
import { myBusinesses } from '../App'


const BusinessList = () => {
  return (
  <div className={styles.businessList}>
  {/* use map? to generate multiple version of business component */}

  {myBusinesses.map(business => {

    return <Business 
      name={business.name} 
      img={business.imageSrc}
      address={business.address} 
      city={business.city} 
      zipCode={business.zipCode} 
      state={business.state} 
      category={business.category} 
      rating={business.rating} 
      reviewCount={business.reviewCount} 
      key={business.name} />
  })}

  </div>
  )
}

export default BusinessList