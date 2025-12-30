import Suggestion from './suggestion';
import React from 'react'
import Spdtdesign from './spdtdesign';
import Navbar from '@/app/(landingpage)/Components/navbar';
import Footer from '@/app/(landingpage)/Components/footer';
async function page({params}:{params:Promise<{spdt:string}>}) {
    const {spdt} =(await  params);
    const parts=spdt.split("-");
    const id=Number(parts[parts.length-1]);
   
  return (
    <>
    <Navbar/>
   <Spdtdesign idval={id}/>
   <Suggestion idval={id}/>
   <Footer/>
    </>
  )
}

export default page