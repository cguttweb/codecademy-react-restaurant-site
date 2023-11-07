const apiKey = import.meta.env.VITE_MY_API_KEY
const businessSearch = `https://api.yelp.com/v3/businesses/search`

function search (term, location, sortBy) {
  fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
}

search('italian', 'NYC', 'rating')