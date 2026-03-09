import ProductPage from "./productpage"
import Navbar from "@/app/Components/navbar"
import Footer from "@/app/Components/footer"
function page() {
  return (
    <>
    <div className="bg-[#FAEBD7]">
      <Navbar/>
      <ProductPage />
      <Footer/>
    </div>
    </>
    
  )
}

export default page