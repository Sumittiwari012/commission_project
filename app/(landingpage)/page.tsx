import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Reviews from "../Components/reviews";
import Newcollectionad from "../Components/newcollectionad";
import Welcome from "../Components/welcome";
import Campaignad from "../Components/campaignad";
import Women_And_Kids from "../Components/women_and_kids";
import Pdtgallery from "../Components/pdtgallery";
import Curatelook from "../Components/curatelook";
import Bestseller from "../Components/bestseller";

function page() {
  return (
    <>
      <div className="bg-[#FAEBD7]">
        <Navbar />
        <Welcome />
        
        <Women_And_Kids
          imgurl="https://drive.google.com/thumbnail?id=11wNjGJHQAnD5cGRCpbkt5IHVxjraHbi8&sz=w1920-h1080"
          mobileImgUrl="https://drive.google.com/thumbnail?id=1dgTQ7-kSQaVd4EpELf60XIDUi_QUZ3mh&sz=w1920-h1080"
        />
        
        <Newcollectionad
          imgurl1="https://drive.google.com/thumbnail?id=1PFky0SmU8DNLtIEI3FCpSmLw6DngL2UR&sz=w1920-h1080"
          imgurl2="https://media.istockphoto.com/id/524161710/photo/portrait-of-a-cute-little-girl-in-fashionable-clothes.jpg?s=612x612&w=0&k=20&c=OdFuuFqGR2UWD0UL7SnAV5mPzsWTwD5OVQASQGPz9Yw="
          imgurl3="https://thumbs.dreamstime.com/b/young-girl-model-poses-to-photographer-female-kid-i-beautiful-dress-outside-young-girl-model-poses-to-photographer-female-kid-i-181764360.jpg"
          mobileImgUrl1="https://drive.google.com/thumbnail?id=1i8CKSDUubs89AlJwdN0QlJrEz5ohliSb&sz=w1920-h1080"
          mobileImgUrl2="https://images.pexels.com/photos/8421992/pexels-photo-8421992.jpeg"
          mobileImgUrl3="https://images.pexels.com/photos/6261907/pexels-photo-6261907.jpeg"
        />
        
        <Campaignad
          imgurl1="https://drive.google.com/thumbnail?id=1KmB1vrWyHD8tnMBLAbEh7l-4QvScGCAH&sz=w1920-h1080"
          imgurl2="https://images.pexels.com/photos/7035487/pexels-photo-7035487.jpeg"
          imgurl3="https://images.pexels.com/photos/32558179/pexels-photo-32558179.jpeg"
          mobileImgUrl1="https://drive.google.com/thumbnail?id=1pXk4oqVhfdb4Euh9bsjVynA-oKHlQT4B&sz=w1920-h1080"
          mobileImgUrl2="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
          mobileImgUrl3="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg"
        />
        <Pdtgallery
          imgurl1="https://images.pexels.com/photos/10584386/pexels-photo-10584386.jpeg"
          imgurl2="https://images.pexels.com/photos/14610788/pexels-photo-14610788.jpeg"
          imgurl3="https://images.pexels.com/photos/15235484/pexels-photo-15235484.jpeg"
          imgurl4="https://images.pexels.com/photos/2364593/pexels-photo-2364593.jpeg"
          imgurl5="https://images.pexels.com/photos/9132079/pexels-photo-9132079.jpeg"
          imgurl6="https://images.pexels.com/photos/16825855/pexels-photo-16825855.jpeg"
          imgurl7="https://images.pexels.com/photos/11326482/pexels-photo-11326482.jpeg"
          imgurl8="https://images.pexels.com/photos/20323806/pexels-photo-20323806.jpeg"
          imgurl9="https://images.pexels.com/photos/10572289/pexels-photo-10572289.jpeg"
        />
        <Curatelook />
        <Bestseller />
        <Reviews />
        <Footer />
      </div>
    </>
  );
}

export default page;