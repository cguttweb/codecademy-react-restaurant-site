import React from 'react'
import styles from './searchBar.module.css'

function searchBar(){
  return (
    <div>
      <div>
        <ul className={styles.filterNav}>
          <li><a href="#">Best Match</a></li>
          <li><a href="#">Highest Rated</a></li>
          <li><a href="#">Most Reviewed</a></li>
        </ul>
      </div>
      <form action='#'>
        <input className={styles.search} type='text' name='search' id='search' placeholder='Search Businesses' />
        <input className={styles.search} type='text' name='location' id='location' placeholder='Where?' />

      </form>
    </div>
  )
}

export default searchBar