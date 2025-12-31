
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Reviews from "../Components/reviews";
import Styles from "../Components/styles";
import Welcome from "../Components/welcome";

import AddSection from "../Components/addsection";
function page() {
  return (
    <>
    <Navbar/>
    <Welcome/>
    <AddSection imgurl="https://images.squarespace-cdn.com/content/v1/63810cc8347e214d6a1808a3/8dcdf168-1f1e-42ab-95f3-4e34eac60264/family-mum-child-garden-photography-plymouth-devon-1" mobileImgUrl="https://images.pexels.com/photos/8562095/pexels-photo-8562095.jpeg"/>
    <Styles
      imgurl1="https://www.ukmodels.co.uk/wp-content/uploads/2020/08/shutterstock_1489165622-scaled.jpg"
      imgurl2="https://media.istockphoto.com/id/524161710/photo/portrait-of-a-cute-little-girl-in-fashionable-clothes.jpg?s=612x612&w=0&k=20&c=OdFuuFqGR2UWD0UL7SnAV5mPzsWTwD5OVQASQGPz9Yw="
      imgurl3="https://thumbs.dreamstime.com/b/young-girl-model-poses-to-photographer-female-kid-i-beautiful-dress-outside-young-girl-model-poses-to-photographer-female-kid-i-181764360.jpg"
      mobileImgUrl1="https://images.pexels.com/photos/32620521/pexels-photo-32620521.jpeg"
      mobileImgUrl2="https://images.pexels.com/photos/8421992/pexels-photo-8421992.jpeg"
      mobileImgUrl3="https://images.pexels.com/photos/6261907/pexels-photo-6261907.jpeg"
    />
    <Styles
      imgurl1="https://images.pexels.com/photos/3626313/pexels-photo-3626313.jpeg"
      imgurl2="https://images.pexels.com/photos/7035487/pexels-photo-7035487.jpeg"
      imgurl3="https://images.pexels.com/photos/32558179/pexels-photo-32558179.jpeg"
      mobileImgUrl1="https://images.pexels.com/photos/2587391/pexels-photo-2587391.jpeg"
      mobileImgUrl2="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
      mobileImgUrl3="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg"
    />
    <AddSection imgurl="https://media.macphun.com/img/uploads/customer/blog/2091/16990126006544dff8587af4.49926191.jpg?q=85&w=1680" mobileImgUrl="https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg"/>
    
    <Reviews/>
    <Footer/>
    </>
  )
}

export default page