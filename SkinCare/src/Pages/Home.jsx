import BestSellingProducts from "../components/BestSellingProducts/BestSellingProduct";
import FaqSection from "../components/FaqSection/Faq";
import FilteredProduct from "../components/FilteredProduct/FilteredProduct";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import WhyOurProducts from "../components/WhyOurProducts/WhyOurProducts";

function Home(){


    return (
        <>
            <Navbar />
            <HeroSection />
            <WhyOurProducts/>
            <BestSellingProducts/>
            <PromoBanner/>
            <FilteredProduct/>
            <FaqSection/>
            <Footer/>
        </>
    );
}

export default Home;

// // background: #FEFFF4;
// loading effect is applied on herosection not here --
// import { useEffect } from "react";
// import gsap from "gsap";

// import BestSellingProducts from "../components/BestSellingProducts/BestSellingProduct";
// import FaqSection from "../components/FaqSection/Faq";
// import FilteredProduct from "../components/FilteredProduct/FilteredProduct";
// import Footer from "../components/Footer/Footer";
// import HeroSection from "../components/HeroSection/HeroSection";
// import Navbar from "../components/Navbar/Navbar";
// import PromoBanner from "../components/PromoBanner/PromoBanner";
// import WhyOurProducts from "../components/WhyOurProducts/WhyOurProducts";

// function Home() {
//     useEffect(function () {
//         const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//         // Hero enters from left
//         tl.fromTo(
//             ".hero-animate",
//             {
//                 opacity: 0,
//                 x: -100,
//             },
//             {
//                 opacity: 1,
//                 x: 0,
//                 duration: 1.5,
//             }
//         );

//         // Other sections fade in from bottom
//         tl.fromTo(
//             ".fade-in-section",
//             {
//                 opacity: 0,
//                 y: 40,
//             },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 9,
//                 stagger: 0.2,
//             },
//             "-=1" 
//         );
//     }, []);

//     return (
//         <>
//             <Navbar />
//             <div className="bg-[#FEFFF4]">
//                 <div className="hero-animate"><HeroSection /></div>
//                 <div className="fade-in-section"><WhyOurProducts /></div>
//                 <div className="fade-in-section"><BestSellingProducts /></div>
//                 <div className="fade-in-section"><PromoBanner /></div>
//                 <div className="fade-in-section"><FilteredProduct /></div>
//                 <div className="fade-in-section"><FaqSection /></div>
//                 <div className="fade-in-section"><Footer /></div>
//             </div>
//         </>
//     );
// }

// export default Home;

