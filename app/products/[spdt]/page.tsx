import Suggestion from './suggestion';
import React from 'react'
import Spdtdesign from './spdtdesign';
import Navbar from '@/app/Components/navbar';
import Footer from '@/app/Components/footer';
import Navbar_on_other_pages from '@/app/Components/navbar_on_other_pages';
async function page({params}:{params:Promise<{spdt:string}>}) {
    const {spdt} =(await  params);
    const parts=spdt.split("-");
    const id=Number(parts[parts.length-1]);
   
  return (
    <>
    <Navbar_on_other_pages/>
   <Spdtdesign idval={id}/>
   <Suggestion idval={id}/>
   <Footer/>
    </>
  )
}

export default page