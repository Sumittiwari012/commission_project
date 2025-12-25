
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Reviews from "./Components/reviews";
import KShop from "./Components/kidshop";
import WShop from "./Components/womenshop";
import Welcome from "./Components/welcome";
import Gallery from "./Components/gallery";
function page() {
  return (
    <>
    <Navbar/>
    <Welcome/>
    <KShop/>
    <WShop/>
    <Gallery/>
    
    <Reviews/>
    <Footer/>
    </>
  )
}

export default page