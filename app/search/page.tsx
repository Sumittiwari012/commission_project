import React from 'react'
import Navbar from '../Components/navbar'
import Search from './search'
import Navbar_on_other_pages from '../Components/navbar_on_other_pages'
function page() {
  return (
    <>
    <Navbar_on_other_pages/>
    <Search/>
    </>
  )
}

export default page