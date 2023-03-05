
import React from 'react'
import './Banner.css'
import { Button } from '@mui/material'

function Banner() {
  return (
    <div className='banner'>
       
       <div className="banner_search">
        <Button className='banner_searchBtn' variant='contained'>
          Search Dates</Button>
       </div>
        
       <div className="banner_info">
         <h1>Get out and stretch your imagination</h1>
         <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>

         <Button variant='contained'>Explore Nearby</Button>
       </div>
       
    </div>
  )
}

export default Banner