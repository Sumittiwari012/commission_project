import React from 'react'
import ShopPage from './shoppage'
import Navbar from '../Components/navbar'
import Navbar_on_other_pages from '../Components/navbar_on_other_pages'
function page() {
  return (
    <>
    <Navbar_on_other_pages/>
    <ShopPage/>
    </>
  )
}

export default page