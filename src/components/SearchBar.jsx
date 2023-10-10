import React, { useState } from 'react'
import styles from './searchBar.module.css'

const searchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [sort, setSort] = useState('')

  function handleClickSort(e){
    setSort(e.target.textContent)
  }

  function handleClickSearch(e) {
    e.preventDefault()
    console.log(`Searching yelp with ${searchTerm} ${location} ${sort}`);
  }

  return (
    <div>
      <div>
        <ul className={styles.filterNav}>
          <li><a href="#" onClick={handleClickSort}>Best Match</a></li>
          <li><a href="#" onClick={handleClickSort}>Highest Rated</a></li>
          <li><a href="#" onClick={handleClickSort}>Most Reviewed</a></li>
        </ul>
      </div>
      <form action='#'>
        <input className={styles.search} type='text' name='search' id='search' placeholder='Search Businesses' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        <input className={styles.search} type='text' name='location' id='location' placeholder='Where?' value={location} onChange={e => setLocation(e.target.value)} />  
        <input className={styles.search} type="submit" value="Let's Go" onClick={handleClickSearch} />
      </form>
    </div>
  )
}

export default searchBar