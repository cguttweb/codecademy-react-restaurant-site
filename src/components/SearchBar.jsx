import React from 'react'
import styles from './searchBar.module.css'

function searchBar(){
  return (
    <div>
      <ul className={styles.filterNav}>
        <li><a href="#">Best Match</a></li>
        <li><a href="#">Highest Rated</a></li>
        <li><a href="#">Most Reviewed</a></li>
      </ul>
      <input className={styles.search} type='text' name='search' id='search' placeholder='Search Businesses' />
      <input className={styles.search} type='text' name='location' id='location' placeholder='Where?' />
    </div>
  )
}

export default searchBar