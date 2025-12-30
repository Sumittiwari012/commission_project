import Footer from '@/app/(landingpage)/Components/footer'
import Navbar from '@/app/(landingpage)/Components/navbar'
import React from 'react'
import CollectionPdt from './collectionpdt';

async function page({params}:{params:Promise<{pdtc?:string}>}) {
    const {pdtc} =(await  params);
  return (
    <>
      <Navbar/>
   <CollectionPdt category={pdtc} />
   <Footer/>
    </>
  )
}

export default page