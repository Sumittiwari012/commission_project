import React from 'react'
import Ccollection from './ccollection';
async function page({params}:{params:Promise<{campaigncollection:string}>}) {
    const {campaigncollection} =(await  params);
  return (
    <>
    <Ccollection campaign={campaigncollection} />
    </>
  )
}

export default page