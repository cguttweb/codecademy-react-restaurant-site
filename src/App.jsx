import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './components/SearchBar'
import BusinessList from './components/BusinessList'
import './App.css'

export const myBusinesses = [
  {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Mama\'s Italian',
    address: '101 New York Way',
    city: 'New York',
    state: 'NY',
    zipCode: '11111',
    category: 'Italian',
    rating: 4.3,
    reviewCount: 40
  },
  {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Mexacana',
    address: '345 Super Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '11111',
    category: 'Mexican',
    rating: 4.3,
    reviewCount: 25
  },
  {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Pronto Pastazzia',
    address: '222 Beacon Hill',
    city: 'Boston',
    state: 'MA',
    zipCode: '12345',
    category: 'Italian',
    rating: 4.2,
    reviewCount: 35
  }
]

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ravenous Restaurant Search</h1>
      <SearchBar />
      <BusinessList />
    </>
  )
}

export default App
