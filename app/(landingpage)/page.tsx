
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Reviews from "../Components/reviews";
import KShop from "../Components/kidshop";
import WShop from "../Components/womenshop";
import Welcome from "../Components/welcome";
import Gallery from "../Components/gallery";
import AddSection from "../Components/addsection";
function page() {
  return (
    <>
    <Navbar/>
    <Welcome/>
    <AddSection imgurl="https://images.squarespace-cdn.com/content/v1/63810cc8347e214d6a1808a3/8dcdf168-1f1e-42ab-95f3-4e34eac60264/family-mum-child-garden-photography-plymouth-devon-1"/>
    <KShop/>
    <WShop/>
    <AddSection imgurl="https://media.macphun.com/img/uploads/customer/blog/2091/16990126006544dff8587af4.49926191.jpg?q=85&w=1680"/>
    <Gallery/>
    <Reviews/>
    <Footer/>
    </>
  )
}

export default page