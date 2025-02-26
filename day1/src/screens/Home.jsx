import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import ProductCatalog from '../component/ProductCatalog'



const Home = () => {
  return (
    <div className='bg-[#F8F9FA]'>
        <Navbar />
        <Hero />
        <ProductCatalog />
              
      
    </div>
  )
}

export default Home