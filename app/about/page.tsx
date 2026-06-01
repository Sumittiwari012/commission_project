import React from 'react'
import About from "./about"  // Import the About component from about.tsx
import Navbar from '../Components/navbar'
import Navbar_on_other_pages from '../Components/navbar_on_other_pages'
function page() {
  return (
    <>
    <Navbar_on_other_pages/>
    <About/>
    </>
  )
}

export default page