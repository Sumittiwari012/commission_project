import Footer from '@/app/Components/footer'
import Navbar from '@/app/Components/navbar'
import React from 'react'
import CollectionPdt from './collectionpdt';

async function page({params}:{params:Promise<{pdtc:string}>}) {
    const {pdtc} =(await  params);
  return (
    <>
    <div className="bg-[#FAEBD7]">
      <Navbar/>
   <CollectionPdt category={pdtc} />
   <Footer/>
   </div>
    </>
  )
}

export default page