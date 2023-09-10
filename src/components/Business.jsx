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
      <img src='https://via.placeholder.com/400x200' />
      <p>name</p>
      <p>address</p>
      <p>state</p>
      <p>city</p>
      <p>zipCode</p>
      <p>category</p>
      <p>rating</p>
      <p>review count</p>
    </div>
  )
}

export default Business