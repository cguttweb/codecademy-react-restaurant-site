import React from 'react'
import styles from './Business.module.css'

const Business = (prop) => {

  return (
    <div>
      <h2>{prop.name}</h2>
      <img src={prop.imageSrc} alt={prop.name} />
      <p>Address: {prop.address}</p>
      <p>State: {prop.state}</p>
      <p>City: {prop.city}</p>
      <p>Zipcode: {prop.zipCode}</p>
      <p>Category: {prop.category}</p>
      <p>Rating: {prop.rating}</p>
      <p>Review Count: {prop.reviewCount}</p>
    </div>
  )
}

export default Business