
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Button from "../Button/Button";
// import OverlayCard from "../OverlayCard/OverlayCard";

// gsap.registerPlugin(ScrollTrigger);

// function HeroSection() {
//     const paragraphRef = useRef(null);

//     useEffect(function () {
//         const paragraph = paragraphRef.current;
//         if (!paragraph) return;

//         const originalText =
//             "Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow.";

//         const words = originalText.split(" ");
//         paragraph.innerHTML = "";

//         words.forEach(function (word) {
//             const span = document.createElement("span");
//             span.textContent = word + " ";
//             span.style.opacity = 1;
//             span.style.display = "inline"; // ensures proper word-wrapping
//             span.style.color = "#9ca3af"; // faded color initially
//             paragraph.appendChild(span);
//         });

//         const allSpans = paragraph.querySelectorAll("span");

//         gsap.to(allSpans, {
//             scrollTrigger: {
//                 trigger: paragraph,
//                 start: "top 85%",
//                 end: "top 30%",
//                 scrub: true,
//             },
//             color: "#111827", // dark color on scroll
//             stagger: 0.1,
//             ease: "none",
//         });
//     }, []);
//     return (
//         <>
//             <section className="relative w-full bg-[#EFF5E1] px-4 md:px-10 lg:px-20 py-16 overflow-hidden">

//              
//                 <div className=" md:hidden flex flex-col items-center gap-6 mb-16">
//                     {/* Heading */}
//                     <h1 className="text-[60px] font-extrabold leading-[1.1] tracking-[-0.04em] uppercase text-[#2D3B36] text-center">
//                         GLOWWWW <br /> NATURALLY
//                     </h1>

//                 
//                     <p className="font-inter text-[18px] leading-[1.4] text-gray-600 text-center max-w-[320px]">
//                         Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
//                     </p>

//                  
//                     <img
//                         src="../../../public/assets/hero image1.jpg"
//                         alt="Product Tube"
//                         className="w-[180px] h-auto object-contain rounded-2xl"
//                     />

//                  
//                     <h1 className="text-[120px] font-extrabold tracking-[0.1em] text-[#2D3B36] opacity-100 uppercase z-0 pointer-events-none whitespace-nowrap">
//                         SKINCARE
//                     </h1>

//                   
//                     <div className="relative z-10 w-[280px] h-auto mt-6">
//                         <img
//                             src="../../../public/assets/hero image 2.png"
//                             alt="Model"
//                             className="w-full h-full object-cover rounded-xl"
//                         />
//                         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//                             <OverlayCard
//                                 image="../../../public/assets/hero overlay card image.jpg"
//                                 callerStyle="bg-[#f1f6e9] text-gray-800 text-sm px-4 py-2 rounded-full shadow-md"
//                             >
//                                 While giving you an invigorating cleansing experience.
//                             </OverlayCard>
//                         </div>
//                     </div>

//                    
//                     <Button callerStyle="mt-6 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold">
//                         Shop Now
//                     </Button>
//                 </div>

//            
//                 <div className="hidden md:flex relative flex-col md:flex-row justify-between items-start lg:items-center gap-10 lg:gap-7 mb-16">

//               
//                     <div className="w-full md:w-1/2 lg:w-1/3 max-w-[335px] z-10">
//                         <p className="font-inter font-normal text-[18px] md:text-[20px] leading-[1.3] text-gray-600 indent-0 md:indent-[60px] lg:indent-[90px] tracking-normal text-center md:text-left">
//                             Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
//                         </p>
//                     </div>

//                
//                     <div className="hidden lg:flex justify-between w-full lg:w-1/3 text-center lg:mr-12">
//                         <h1 className="text-[90px] xl:text-[130px] font-extrabold leading-[1.1] tracking-[-0.04em] uppercase text-[#2D3B36]">
//                             GLOW <br /> NATURALLY
//                         </h1>
//                     </div>

//                 
//                     <div className="relative w-full md:w-1/2 lg:w-1/3 flex justify-center md:justify-end z-10">
//                         {/* Tablet Heading */}
//                         <h1 className="block lg:hidden absolute top-[265px] left-[-20px] -translate-x-1/2 -translate-y-1/2 text-[60px] md:text-[100px] font-extrabold leading-[1.1] tracking-[-0.04em] uppercase text-[#2D3B36] z-20 text-center">
//                             GLOWWWW <br /> NATURALLY
//                         </h1>

//                     
//                         <img
//                             src="../../../public/assets/hero image1.jpg"
//                             alt="Product Tube"
//                             className="w-[180px] md:w-[250px] lg:w-[222.61px] h-auto object-contain rounded-2xl"
//                         />
//                     </div>
//                 </div>

//                
//                 <div className="hidden md:flex relative justify-center items-center mb-12">
//                     {/* Background heading */}
//                     <h1 className="absolute bottom-0 lg:left-1/2 -translate-x-1/2 text-[120px] md:text-[120px] md:left-[330px] md:bottom-[-80px] md:tracking-[0.07em] lg:text-[240px] font-extrabold tracking-[0] text-[#2D3B36] opacity-100 uppercase z-0 pointer-events-none whitespace-nowrap">
//                         SKINCARE
//                     </h1>

//                  
//                     <div className="relative z-10 w-[280px] md:w-[440px] lg:w-[610px] h-auto mt-40">
//                         <img
//                             src="../../../public/assets/hero image 2.png"
//                             alt="Model"
//                             className="w-full h-full object-cover rounded-xl"
//                         />
//                         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//                             <OverlayCard
//                                 image="../../../public/assets/hero overlay card image.jpg"
//                                 callerStyle="bg-[#f1f6e9] text-gray-800 text-sm px-4 py-2 rounded-full shadow-md"
//                             >
//                                 While giving you an invigorating cleansing experience.
//                             </OverlayCard>
//                         </div>
//                     </div>

//                     {/* Button */}
//                     <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
//                         <Button callerStyle="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold">
//                             Shop Now
//                         </Button>
//                     </div>
//                 </div>
//             </section>

//          
//             <div className="max-w-6xl mx-auto px-4 text-justify text-base leading-7 text-gray-600 space-y-4 overflow-x-hidden break-words mt-7">
//                 <p ref={paragraphRef} className="font-medium" />
//             </div>

//         </>
//     );
// }

// export default HeroSection;




//! page load 


import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button/Button";
import OverlayCard from "../OverlayCard/OverlayCard";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
    const paragraphRef = useRef(null);
    const heroRef = useRef(null);

    // scroll animation -- word by word... so that text will come from transparent to dark color..
    useEffect(function () {
        const paragraph = paragraphRef.current;
        if (!paragraph) return;

        const originalText =
            "Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow.";

        const words = originalText.split(" ");
        paragraph.innerHTML = "";

        words.forEach(function (word) {
            const span = document.createElement("span");
            span.textContent = word + " ";
            span.style.opacity = 1;
            span.style.display = "inline";
            span.style.color = "#9ca3af";
            paragraph.appendChild(span);
        });

        const allSpans = paragraph.querySelectorAll("span");

        gsap.to(allSpans, {
            scrollTrigger: {
                trigger: paragraph,
                start: "top 85%",
                end: "top 30%",
                scrub: true,
            },
            color: "#111827",
            stagger: 0.1,
            ease: "none",
        });
    }, []);

    // Page load animation
    useEffect(function () {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1.8 } });

            tl.from(".hero-heading", { x: -100, opacity: 0 })
                .from(".hero-paragraph", { x: 100, opacity: 0 }, "-=1.5")
                .from(".hero-tube", { y: 80, opacity: 0 }, "-=1.5")
                .from(".hero-model", { scale: 0.9, opacity: 0 }, "-=1.4")
                .from(".hero-button", { y: 40, opacity: 0 }, "-=1.4");
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section
                ref={heroRef}
                className="relative w-full bg-[#EFF5E1] px-4 md:px-10 lg:px-20 py-0 overflow-hidden"
            >

                {/* mobile layout */}
                <div className="md:hidden flex flex-col items-center gap-6 mb-16">
                    <h1 className="hero-heading text-[60px] font-extrabold leading-[1.1] tracking-[-0.04em] uppercase text-[#2D3B36] text-center">
                        GLOWWWW <br /> NATURALLY
                    </h1>

                    <p className="hero-paragraph font-inter text-[18px] leading-[1.4] text-gray-600 text-center max-w-[320px]">
                        Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
                    </p>

                    <img
                        src="/assets/hero image1.jpg"
                        alt="Product Tube"
                        className="hero-tube w-[180px] h-auto object-contain rounded-2xl"
                    />

                    <h1 className="text-[75px] font-extrabold tracking-[0.1em] text-[#2D3B36] opacity-100 uppercase z-0 pointer-events-none whitespace-nowrap">
                        SKINCARE
                    </h1>

                    <div className="hero-model relative z-10 w-[280px] h-auto mt-6">
                        <img
                            src="/assets/hero image 2.png"
                            alt="Model"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <OverlayCard
                                image="/assets/hero overlay card image.jpg"
                                callerStyle="bg-[#f1f6e9] text-gray-800 text-sm px-4 py-2 rounded-full shadow-md"
                            >
                                While giving you an invigorating cleansing experience.
                            </OverlayCard>
                        </div>
                    </div>

                    <Button callerStyle="hero-button mt-6 bg-black text-white px-5 py-2 rounded-full text-sm font-semibold">
                        Shop Now
                    </Button>
                </div>

                {/*tablet or deskto layout*/}
                <div className="hidden md:flex relative flex-col md:flex-row justify-between items-start lg:items-center gap-10 lg:gap-7 mb-[-90px] md:mb-[70px] lg:mb-[-70px]">
                    <div className="hero-paragraph w-full md:w-1/2 lg:w-1/3 max-w-[335px] z-10">
                        <p className="font-inter font-normal text-[18px] md:text-[20px] leading-[1.3] text-gray-600 indent-0 md:indent-[60px] lg:indent-[90px] tracking-normal text-center md:text-left">
                            Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
                        </p>
                    </div>

                    <div className="hidden lg:flex justify-between w-full lg:w-1/3 text-left lg:mr-24 lg:ml-48 ">
                        <h1 className="hero-heading text-[90px] xl:text-[80px] font-extrabold leading-[1.1] tracking-[-0.04em] uppercase text-[#2D3B36]">
                            GLOW <br /> NATUR- <br/>ALLY
                        </h1>
                    </div>

                    <div className="relative w-full md:w-1/2 lg:w-1/3 flex justify-center md:justify-end z-10">
                        <h1 className="block lg:hidden absolute top-[265px] left-[-20px] -translate-x-1/2 -translate-y-1/2 text-[60px] md:text-[100px] font-extrabold leading-[1.1] tracking-[-0.04em] uppercase text-[#2D3B36] z-20 text-center">
                            GLOWWWW <br /> NATURALLY
                        </h1>

                        <img
                            src="/assets/hero image1.jpg"
                            alt="Product Tube"
                            className="hero-tube w-[180px] md:w-[250px] lg:w-[222.61px] h-auto object-contain rounded-2xl"
                        />
                    </div>
                </div>

                <div className="hidden md:flex relative justify-center items-center mb-12">
                    <h1 className="absolute bottom-0 lg:left-1/2 -translate-x-1/2 text-[120px] md:text-[120px] md:left-[330px] md:bottom-[-80px] md:tracking-[0.07em] lg:text-[240px] font-extrabold tracking-[0] text-[#2D3B36] opacity-100 uppercase z-0 pointer-events-none whitespace-nowrap">
                        SKINCARE
                    </h1>

                    <div className="hero-model relative z-10 w-[280px] md:w-[440px] lg:w-[610px] h-auto mt-40 md:mr-48">
                        <img
                            src="/assets/hero image 2.png"
                            alt="Model"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <OverlayCard
                                image="assets/hero overlay card image.jpg"
                                callerStyle="bg-[#f1f6e9] text-gray-800 text-sm px-4 py-2 rounded-full shadow-md"
                            >
                                While giving you an invigorating cleansing experience.
                            </OverlayCard>
                        </div>
                    </div>

                    <div className="lg:block absolute lg:left-0 md:right-0 top-1/2 -translate-y-1/2">
                        <Button callerStyle="hero-button bg-[#2d3b36] text-white px-5 py-2 rounded-full text-sm font-semibold">
                            Shop Now
                        </Button>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 text-justify text-base leading-7 text-gray-600 space-y-4 overflow-x-hidden break-words mt-7">
                <p ref={paragraphRef} className="font-medium" />
            </div>
        </>
    );
}

export default HeroSection;
