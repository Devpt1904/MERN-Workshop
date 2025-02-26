import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import ProductCatalog from '../component/ProductCatalog'
import Footer from '../component/Footer'



const Home = () => {
  return (
    <div className='bg-[#F8F9FA]'>
        <Navbar />
        <Hero />
        <ProductCatalog />
        <Footer />
              
      
    </div>
  )
}

export default Home