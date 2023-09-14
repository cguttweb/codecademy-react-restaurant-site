import React from 'react'

function Business(){
  const myBusiness = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Mama\'s Italian',
    address: '101 New York Way',
    city: 'New York',
    state: 'NY',
    zipCode: '11111',
    category: 'Italian',
    rating: 4.3,
    reviewCount: 40
  }

  return (
    <div>
    <h2>Business Component</h2>
      <img src={myBusiness.imageSrc} alt={myBusiness.name} />
      <p>{myBusiness.name}</p>
      <p>{myBusiness.address}</p>
      <p>{myBusiness.state}</p>
      <p>{myBusiness.city}</p>
      <p>{myBusiness.zipCode}</p>
      <p>{myBusiness.category}</p>
      <p>{myBusiness.rating}</p>
      <p>{myBusiness.reviewCount}</p>
    </div>
  )
}

export default Business