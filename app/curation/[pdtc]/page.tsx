import Footer from '@/app/Components/footer'
import Navbar from '@/app/Components/navbar'
import React from 'react'
import CollectionPdt from './collectionpdt';
import Navbar_on_other_pages from '@/app/Components/navbar_on_other_pages';

async function page({params}:{params:Promise<{pdtc:string}>}) {
    const {pdtc} =(await  params);
  return (
    <>
    <div className="bg-[#FAEBD7]">
      
      <Navbar_on_other_pages/>
   <CollectionPdt category={pdtc} />
   <Footer/>
   </div>
    </>
  )
}

export default page