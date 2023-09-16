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
      <h2>Name: {myBusiness.name}</h2>
      <img src={myBusiness.imageSrc} alt={myBusiness.name} />
      <p>Name: {myBusiness.name}</p>
      <p>Address: {myBusiness.address}</p>
      <p>State: {myBusiness.state}</p>
      <p>City: {myBusiness.city}</p>
      <p>Zipcode: {myBusiness.zipCode}</p>
      <p>Category: {myBusiness.category}</p>
      <p>Rating: {myBusiness.rating}</p>
      <p>Review Count: {myBusiness.reviewCount}</p>
    </div>
  )
}

export default Business