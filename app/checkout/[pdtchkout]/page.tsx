import React from 'react'
import CheckOut from "./checkoutpage"
async function page({params}:{params:Promise<{pdtchkout:string}>}) {
  const {pdtchkout} =(await  params);
  return (
    <>
      <CheckOut idval={parseInt(pdtchkout)} />
    </>
  )
}

export default page