import React from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
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