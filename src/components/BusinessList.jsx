import React from 'react'
import Business from './Business'

function BusinessList(){
  return (
  <div>
  {/* use map? to generate multiple version of business component */}
    <Business />
    <Business />
  </div>

  )
}

export default BusinessList