import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Reviews from "../Components/reviews";
import Styles from "../Components/newcollectionad";
import Welcome from "../Components/welcome";
import WomenStyle from "../Components/campaignad";
import Women_And_Kids from "../Components/women_and_kids";
import Pdtgallery from "../Components/pdtgallery";
import Curatelook from "../Components/curatelook";
import Bestseller from "../Components/bestseller";

function page() {
  return (
    <>
      <div className="bg-slate-300">
        <Navbar />

       {/* ── Logo Band ── */}
<div className="fixed top-17 left-0 w-full z-[60] flex items-center justify-center pointer-events-none">
          
          {/* High-Visibility Horizontal Line */}
          <div className="absolute left-0 right-0 h-[2px] bg-black/40 shadow-sm w-full"></div>

          {/* Properly Visible Logo sitting on the line */}
          <div className="relative z-10 px-6  pointer-events-auto">
            <img
              src="https://i.ibb.co/gFZbsc05/Wrii-LOGO-website.png"
              alt="WRII Studio"
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-md"
            />
          </div>
        </div>
{/* ── End Logo Band ── */}
        {/* ── End Logo Band ── */}

        <Welcome />
        <Women_And_Kids
          imgurl="https://images.squarespace-cdn.com/content/v1/63810cc8347e214d6a1808a3/8dcdf168-1f1e-42ab-95f3-4e34eac60264/family-mum-child-garden-photography-plymouth-devon-1"
          mobileImgUrl="https://images.pexels.com/photos/8562095/pexels-photo-8562095.jpeg"
        />
        <Styles
          imgurl1="https://www.ukmodels.co.uk/wp-content/uploads/2020/08/shutterstock_1489165622-scaled.jpg"
          imgurl2="https://media.istockphoto.com/id/524161710/photo/portrait-of-a-cute-little-girl-in-fashionable-clothes.jpg?s=612x612&w=0&k=20&c=OdFuuFqGR2UWD0UL7SnAV5mPzsWTwD5OVQASQGPz9Yw="
          imgurl3="https://thumbs.dreamstime.com/b/young-girl-model-poses-to-photographer-female-kid-i-beautiful-dress-outside-young-girl-model-poses-to-photographer-female-kid-i-181764360.jpg"
          mobileImgUrl1="https://images.pexels.com/photos/32620521/pexels-photo-32620521.jpeg"
          mobileImgUrl2="https://images.pexels.com/photos/8421992/pexels-photo-8421992.jpeg"
          mobileImgUrl3="https://images.pexels.com/photos/6261907/pexels-photo-6261907.jpeg"
        />
        <WomenStyle
          imgurl1="https://images.pexels.com/photos/3626313/pexels-photo-3626313.jpeg"
          imgurl2="https://images.pexels.com/photos/7035487/pexels-photo-7035487.jpeg"
          imgurl3="https://images.pexels.com/photos/32558179/pexels-photo-32558179.jpeg"
          mobileImgUrl1="https://images.pexels.com/photos/2587391/pexels-photo-2587391.jpeg"
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