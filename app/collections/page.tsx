import React from 'react'
import Navbar from '../(landingpage)/Components/navbar'
import Footer from '../(landingpage)/Components/footer'
import ProductPage from '../products/productpage'
function page() {
    
  return (
    <>
     <Navbar/>
    <ProductPage />
    <Footer/>
    </>
  )
}

export default page