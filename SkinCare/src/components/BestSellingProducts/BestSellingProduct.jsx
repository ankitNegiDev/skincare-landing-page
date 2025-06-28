// import ArrowButton from "../ArrowButtons/ArrowButton";
// import Button from "../Button/Button";
// import CardImage from "../CardImage/CardImage";
// import Carousel from "../CarousalSection/Carousel";


// function BestSellingProducts() {
//     const products = [
//         {
//             image: "../../../public/assets/Mask group.png",
//             title: "ALYA SKIN CLEANSER.",
//             price: "FROM $29.99",
//         },
//         {
//             image: "../../../public/assets/Mask group1.png",
//             title: "RITUAL OF SAKURA.",
//             price: "FROM $27.99",
//         },
//         {
//             image: "../../../public/assets/Mask group3.png",
//             title: "THE BODY LOTION.",
//             price: "FROM $19.99",
//         },
//     ];

//     return (
//         <section className="px-6 py-12 space-y-8">
//             <div className="flex flex-col items-start space-y-4">
//                 <Button callerStyle="flex items-center gap-2 text-[#2D3B36] font-semibold text-base bg-transparent px-4 py-2 rounded-full border border-[#2D3B36]">
//                     <span className="w-3 h-3 rounded-full bg-[#2D3B36]"></span>
//                     Best Selling Products
//                 </Button>

//                 <h2 className="text-3xl font-bold text-[#2D3B36]">
//                     Skincare That Brings Out <br />
//                     Your Natural Radiance
//                 </h2>
//             </div>

//             <Carousel ArrowButton={ArrowButton}>
//                 {products.map(function (product) {
//                     return (
//                         <CardImage
//                             key={product.title}
//                             image={product.image}
//                             title={product.title}
//                             price={product.price}
//                         />
//                     );
//                 })}
//             </Carousel>
//         </section>
//     );
// }

// export default BestSellingProducts;

//! issue is that card are not sliding --- 


// import { useRef, useState, useEffect } from "react";
// import Button from "../Button/Button";
// import ArrowButton from "../ArrowButtons/ArrowButton";
// import CardImage from "../CardImage/CardImage";

// function BestSellingProducts() {
//     const carouselRef = useRef(null);
//     const cardRef = useRef(null);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [cardWidth, setCardWidth] = useState(0);

//     const products = [
//         {
//             image: "/assets/Mask group.png",
//             title: "ALYA SKIN CLEANSER.",
//             price: "From $29.99",
//         },
//         {
//             image: "/assets/Mask group1.png",
//             title: "RITUAL OF SAKURA.",
//             price: "From $27.99",
//         },
//         {
//             image: "/assets/Mask group3.png",
//             title: "THE BODY LOTION.",
//             price: "From $19.99",
//         }
//     ];

//     useEffect(function measureCardWidth() {
//         if (cardRef.current) {
//             setCardWidth(cardRef.current.offsetWidth + 24); // + gap-6 = 24px
//         }
//     }, []);

//     const maxIndex = products.length - 1;

//     function scrollToIndex(index) {
//         console.log("inside the logic of scroll");
//         if (carouselRef.current && cardWidth) {
//             console.log("inside the if condition ");
//             carouselRef.current.scrollTo({
//                 left: index * cardWidth,
//                 behavior: "smooth",
//             });
//             console.log("current  crasul ref.currnt is : ",carouselRef.current);
//         }
//     }

//     function handleScrollLeft() {
//         console.log("left button clicked ");
//         if (currentIndex > 0) {
//             console.log("left button inside if condition");
//             const newIndex = currentIndex - 1;
//             setCurrentIndex(newIndex);
//             scrollToIndex(newIndex);
//         }
//     }

//     function handleScrollRight() {
//         console.log("right button clicked");
//         if (currentIndex < maxIndex) {
//             console.log("right button inside the if condition");
//             const newIndex = currentIndex + 1;
//             setCurrentIndex(newIndex);
//             scrollToIndex(newIndex);
//         }
//     }
//     console.log("card width:", cardWidth);

//     return (
//         <section className="bg-[#FEFFF4] px-6 py-10">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 border-2 border-red-500">
//                 <div className="flex items-center gap-4">
//                     <span className="w-3 h-3 bg-[#2D3B36] rounded-full"></span>
//                     <Button callerStyle="border border-[#2D3B36] text-[#2D3B36]">
//                         Best Selling Products
//                     </Button>
//                 </div>

//                 <h2 className="text-2xl md:text-3xl font-semibold text-[#2D3B36] text-center md:text-left">
//                     Skincare That Brings Out <br className="hidden md:block" />
//                     Your Natural Radiance
//                 </h2>

//                 <div className="flex gap-3 justify-center md:justify-end">
//                     <ArrowButton direction="left" onClick={handleScrollLeft} />
//                     <ArrowButton direction="right" filled={true} onClick={handleScrollRight} />
//                 </div>
//             </div>

//             <div className="overflow-hidden w-full border-2 border-red-500">
//                 <div
//                     ref={carouselRef}
//                     className="flex gap-6 w-max overflow-x-auto scroll-smooth"
//                 >
//                     {products.map((product, index) => (
//                         <div
//                             key={index}
//                             ref={index === 0 ? cardRef : null}
//                             className="min-w-[300px] flex-shrink-0"
//                         >
//                             <CardImage
//                                 image={product.image}
//                                 title={product.title}
//                                 price={product.price}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>

//         </section>
//     );
// }

// export default BestSellingProducts;




//? working code  but not infinite scroolll
// import { useRef, useState, useEffect } from "react";
// import Button from "../Button/Button";
// import ArrowButton from "../ArrowButtons/ArrowButton";
// import CardImage from "../CardImage/CardImage";

// function BestSellingProducts() {
//     const carouselRef = useRef(null);
//     const cardRef = useRef(null);
//     const [cardWidth, setCardWidth] = useState(0);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const products = [
//         {
//             image: "/assets/Mask group.png",
//             title: "ALYA SKIN CLEANSER.",
//             price: "From $29.99",
//         },
//         {
//             image: "/assets/Mask group1.png",
//             title: "RITUAL OF SAKURA.",
//             price: "From $27.99",
//         },
//         {
//             image: "/assets/Mask group3.png",
//             title: "THE BODY LOTION.",
//             price: "From $19.99",
//         },
//         {
//             image: "/assets/Mask group.png",
//             title: "ALYA SKIN CLEANSER.",
//             price: "From $12.99",
//         },
//         {
//             image: "/assets/Mask group1.png",
//             title: "RITUAL OF SAKURA.",
//             price: "From $11.99",
//         },
//         {
//             image: "/assets/Mask group3.png",
//             title: "THE BODY LOTION.",
//             price: "From $10.99",
//         },
//     ];

//     useEffect(function measureWidth() {
//         function updateCardWidth() {
//             if (cardRef.current) {
//                 const gap = 24; 
//                 setCardWidth(cardRef.current.offsetWidth + gap);
//             }
//         }

//         updateCardWidth();
//         window.addEventListener("resize", updateCardWidth);
//         return () => window.removeEventListener("resize", updateCardWidth);
//     }, []);

//     function scrollToIndex(index) {
//         console.log("inside the scroll logic");
//         if (carouselRef.current && cardWidth) {
//             console.log("insdie the scrool if condition");
//             console.log("index inside the scroll if condtion is : ",index);
//             console.log("card with indis croll is : ",cardWidth);
//             console.log("value of left is : ",index*cardWidth);
//             carouselRef.current.scrollTo({
//                 left: index * cardWidth,
//                 behavior: "smooth",
//             });
//         }
//     }

//     function handleScrollLeft() {
//         console.log("left button clicked");
//         if (currentIndex > 0) {
//             console.log("left button inside if --");
//             const newIndex = currentIndex - 1;
//             setCurrentIndex(newIndex);
//             scrollToIndex(newIndex);
//         }
//     }

//     function handleScrollRight() {
//         console.log("right button");
//         const maxIndex = products.length - 3;
//         if (currentIndex < maxIndex) {
//             console.log("right button inside the if--");
//             const newIndex = currentIndex + 1;
//             setCurrentIndex(newIndex);
//             scrollToIndex(newIndex);
//         }
//     }

//     return (
//         <section className="bg-[#FEFFF4] px-6 py-10">
//             {/* Header Section */}
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//                 <div className="flex items-center gap-4">
//                     <span className="w-3 h-3 bg-[#2D3B36] rounded-full"></span>
//                     <Button callerStyle="border border-[#2D3B36] text-[#2D3B36]">
//                         Best Selling Products
//                     </Button>
//                 </div>

//                 <h2 className="text-2xl md:text-3xl font-semibold text-[#2D3B36] text-center md:text-left">
//                     Skincare That Brings Out <br className="hidden md:block" />
//                     Your Natural Radiance
//                 </h2>

//                 <div className="flex gap-3 justify-center md:justify-end">
//                     <ArrowButton direction="left" onClick={handleScrollLeft} />
//                     <ArrowButton direction="right" filled={true} onClick={handleScrollRight} />
//                 </div>
//             </div>

//             {/* Carousel */}
//             <div className="relative w-full overflow-hidden">
//                 <div
//                     ref={carouselRef}
//                     className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
//                     style={{ scrollBehavior: "smooth" }}
//                 >
//                     {products.map(function (product, index) {
//                         return (
//                             <div
//                                 key={index}
//                                 ref={index === 0 ? cardRef : null}
//                                 className="min-w-[300px] flex-shrink-0"
//                             >
//                                 <CardImage
//                                     image={product.image}
//                                     title={product.title}
//                                     price={product.price}
//                                 />
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default BestSellingProducts;


// //! i want a scrolling like this when user on last card then all the card from starting will be shown when user click on right-- in same way just like we are shwoing earlier without moving scroll bar to starting card..

// import { useRef, useEffect, useState } from "react";
// import Button from "../Button/Button";
// import ArrowButton from "../ArrowButtons/ArrowButton";
// import CardImage from "../CardImage/CardImage";

// function BestSellingProducts() {
//     const carouselRef = useRef(null);
//     const cardRef = useRef(null);
//     const [cardWidth, setCardWidth] = useState(0);
//     const [currentIndex, setCurrentIndex] = useState(1); // Start from first real card

//     const products = [
//         {
//             image: "/assets/Mask group.png",
//             title: "ALYA SKIN CLEANSER.",
//             price: "From $29.99",
//         },
//         {
//             image: "/assets/Mask group1.png",
//             title: "RITUAL OF SAKURA.",
//             price: "From $27.99",
//         },
//         {
//             image: "/assets/Mask group3.png",
//             title: "THE BODY LOTION.",
//             price: "From $19.99",
//         },
//     ];

//     const extendedProducts = [
//         products[products.length - 1], // Clone last card at start
//         ...products,
//         products[0], // Clone first card at end
//     ];

//     useEffect(() => {
//         function updateCardWidth() {
//             if (cardRef.current) {
//                 const gap = 24;
//                 setCardWidth(cardRef.current.offsetWidth + gap);
//             }
//         }
//         updateCardWidth();
//         window.addEventListener("resize", updateCardWidth);
//         return () => window.removeEventListener("resize", updateCardWidth);
//     }, []);

//     useEffect(() => {
//         if (carouselRef.current && cardWidth) {
//             carouselRef.current.scrollTo({
//                 left: cardWidth * currentIndex,
//                 behavior: "auto",
//             });
//         }
//     }, [cardWidth]);

//     function scrollToIndex(index, behavior = "smooth") {
//         if (carouselRef.current && cardWidth) {
//             carouselRef.current.scrollTo({
//                 left: index * cardWidth,
//                 behavior,
//             });
//         }
//     }

//     function handleScrollRight() {
//         let newIndex = currentIndex + 1;
//         setCurrentIndex(newIndex);
//         scrollToIndex(newIndex);

//         if (newIndex === extendedProducts.length - 1) {
//             setTimeout(() => {
//                 setCurrentIndex(1);
//                 scrollToIndex(1, "auto");
//             }, 300); // Match animation duration
//         }
//     }

//     function handleScrollLeft() {
//         let newIndex = currentIndex - 1;
//         setCurrentIndex(newIndex);
//         scrollToIndex(newIndex);

//         if (newIndex === 0) {
//             setTimeout(() => {
//                 const lastRealIndex = extendedProducts.length - 2;
//                 setCurrentIndex(lastRealIndex);
//                 scrollToIndex(lastRealIndex, "auto");
//             }, 300);
//         }
//     }

//     return (
//         <section className="bg-[#FEFFF4] px-6 py-10">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//                 <div className="flex items-center gap-4">
//                     <span className="w-3 h-3 bg-[#2D3B36] rounded-full"></span>
//                     <Button callerStyle="border border-[#2D3B36] text-[#2D3B36]">
//                         Best Selling Products
//                     </Button>
//                 </div>

//                 <h2 className="text-2xl md:text-3xl font-semibold text-[#2D3B36] text-center md:text-left">
//                     Skincare That Brings Out <br className="hidden md:block" />
//                     Your Natural Radiance
//                 </h2>

//                 <div className="flex gap-3 justify-center md:justify-end">
//                     <ArrowButton direction="left" onClick={handleScrollLeft} />
//                     <ArrowButton direction="right" filled={true} onClick={handleScrollRight} />
//                 </div>
//             </div>

//             <div className="relative w-full overflow-hidden">
//                 <div
//                     ref={carouselRef}
//                     className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
//                 >
//                     {extendedProducts.map((product, index) => (
//                         <div
//                             key={index}
//                             ref={index === 1 ? cardRef : null}
//                             className="min-w-[300px] flex-shrink-0"
//                         >
//                             <CardImage
//                                 image={product.image}
//                                 title={product.title}
//                                 price={product.price}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default BestSellingProducts;



//! circualr infinit scroll 
// import { useState, useEffect } from "react";
// import Button from "../Button/Button";
// import ArrowButton from "../ArrowButtons/ArrowButton";
// import CardImage from "../CardImage/CardImage";

// function BestSellingProducts() {
//     const products = [
//         { image: "/assets/Mask group.png", title: "ALYA SKIN CLEANSER.", price: "From $100" },
//         { image: "/assets/Mask group1.png", title: "RITUAL OF SAKURA.", price: "From $200" },
//         { image: "/assets/Mask group3.png", title: "THE BODY LOTION.", price: "From $300" },
//         { image: "/assets/Mask group1.png", title: "RITUAL OF SAKURA.", price: "From $400" },
//         { image: "/assets/Mask group3.png", title: "THE BODY LOTION.", price: "From $500" },
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     function handleScrollRight() {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }

//     function handleScrollLeft() {
//         setCurrentIndex((prevIndex) =>
//             (prevIndex - 1 + products.length) % products.length
//         );
//     }
//     function getVisibleProducts() {
//         return [
//             products[currentIndex % products.length],
//             products[(currentIndex + 1) % products.length],
//             products[(currentIndex + 2) % products.length],
//         ];
//     }

//     return (
//         <section className="bg-[#FEFFF4] px-6 py-10">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//                 <div className="flex items-center gap-4">
//                     <span className="w-3 h-3 bg-[#2D3B36] rounded-full"></span>
//                     <Button callerStyle="border border-[#2D3B36] text-[#2D3B36]">
//                         Best Selling Products
//                     </Button>
//                 </div>

//                 <h2 className="text-2xl md:text-3xl font-semibold text-[#2D3B36] text-center md:text-left">
//                     Skincare That Brings Out <br className="hidden md:block" />
//                     Your Natural Radiance
//                 </h2>

//                 <div className="flex gap-3 justify-center md:justify-end">
//                     <ArrowButton direction="left" onClick={handleScrollLeft} />
//                     <ArrowButton direction="right" filled={true} onClick={handleScrollRight} />
//                 </div>
//             </div>

//             {/* Carousel */}
//             <div className="relative w-full overflow-hidden">
//                 <div className="flex gap-6 transition-transform duration-300 ease-in-out">
//                     {getVisibleProducts().map((product, index) => (
//                         <div
//                             key={index}
//                             className="min-w-[300px] flex-shrink-0"
//                         >
//                             <CardImage
//                                 image={product.image}
//                                 title={product.title}
//                                 price={product.price}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default BestSellingProducts;




// testing 


// import { useState } from "react";
// import ArrowButton from "../ArrowButtons/ArrowButton";
// import CardImage from "../CardImage/CardImage";
// import Button from "../Button/Button";

// function BestSellingProducts() {
//     const products = [
//         {
//             image: "/assets/Mask group.png",
//             title: "ALYA SKIN CLEANSER.",
//             price: "From $100"
//         },
//         {
//             image: "/assets/Mask group1.png",
//             title: "RITUAL OF SAKURA.",
//             price: "From $200"
//         },
//         {
//             image: "/assets/Mask group3.png",
//             title: "THE BODY LOTION.",
//             price: "From $300"
//         },
//         {
//             image: "/assets/Mask group1.png",
//             title: "RITUAL OF SAKURA.",
//             price: "From $400"
//         },
//         {
//             image: "/assets/Mask group3.png",
//             title: "THE BODY LOTION.",
//             price: "From $500"
//         },
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     function handleScrollRightClick() {
//         const nextIndex = (currentIndex + 1) % products.length;
//         setCurrentIndex(nextIndex);
//     }

//     function handleScrollLeftClick() {
//         const prevIndex = (currentIndex - 1 + products.length) % products.length;
//         setCurrentIndex(prevIndex);
//     }

//     function getVisibleProducts() {
//         const visible = [];
//         for (let i = 0; i < 3; i++) {
//             visible.push(products[(currentIndex + i) % products.length]);
//         }
//         return visible;
//     }

//     return (
//         <section className="bg-[#FEFFF4] px-4 md:px-12 py-10">
//          
//             <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-10">

//             
//                 <div className="flex items-center gap-1 border-2 border-[#2D3B36] px-2 rounded-full">
//                     <span className="w-3 h-3 bg-[#2D3B36] rounded-full"></span>
//                     <Button
//                         callerStyle="border border-transparent hover:border-[#2D3B36] hover:text-[#2D3B36] focus:border-[#2D3B36] focus:text-[#2D3B36] transition-colors"
//                     >
//                         Best Selling Products
//                     </Button>
//                 </div>

//               
//                 <h2 className="text-2xl md:text-3xl font-semibold text-[#2D3B36] text-center flex-1">
//                     Skincare That Brings Out <br className="hidden md:block" />
//                     Your Natural Radiance
//                 </h2>

//               
//                 <div className="flex gap-3">
//                     <ArrowButton direction="left" onClick={handleScrollLeftClick} />
//                     <ArrowButton direction="right" onClick={handleScrollRightClick} />
//                 </div>
//             </div>

//           
//             <div className="relative w-full overflow-hidden">
//                 <div className="flex justify-center gap-6 max-w-[1024px] mx-auto transition-transform duration-300 ease-in-out">
//                     {getVisibleProducts().map(renderCard)}
//                 </div>
//             </div>
//         </section>
//     );

//     function renderCard(product, index) {
//         return (
//             <div
//                 key={index}
//                 className="min-w-[300px] flex-shrink-0"
//             >
//                 <CardImage
//                     image={product.image}
//                     title={product.title}
//                     price={product.price}
//                 />
//             </div>
//         );
//     }
// }

// export default BestSellingProducts;



//! responsivie 


import { useState } from "react";
import ArrowButton from "../ArrowButtons/ArrowButton";
import CardImage from "../CardImage/CardImage";
import Button from "../Button/Button";

function BestSellingProducts() {
    const products = [
        { 
            image: "/assets/Mask group.png",
            title: "ALYA SKIN CLEANSER.", 
            price: "From $100" 
        },
        { 
            image: "/assets/Mask group1.png",
            title: "RITUAL OF SAKURA.", 
            price: "From $200" 
        },
        { 
            image: "/assets/Mask group3.png",
            title: "THE BODY LOTION.", 
            price: "From $300" 
        },
        { 
            image: "/assets/Mask group1.png",
            title: "RITUAL OF SAKURA.", 
            price: "From $400" 
        },
        { 
            image: "/assets/Mask group3.png",
            title: "THE BODY LOTION.", 
            price: "From $500" 
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleScrollRightClick() {
        const nextIndex = (currentIndex + 1) % products.length;
        setCurrentIndex(nextIndex);
    }

    function handleScrollLeftClick() {
        const prevIndex = (currentIndex - 1 + products.length) % products.length;
        setCurrentIndex(prevIndex);
    }

    function getVisibleProducts() {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(products[(currentIndex + i) % products.length]);
        }
        return visible;
    }

    return (
        <section className="bg-[#FEFFF4] px-4 md:px-12 py-10">
            {/* Top Row */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 mb-10 lg:pl-10">
                {/* circle + button text */}
                <div className="flex items-center gap-1 px-2 rounded-full ">
                    <Button callerStyle="group flex items-center gap-2 text-[#2D3B36] font-semibold text-base bg-transparent px-4 py-2 rounded-full border border-[#2D3B36] hover:bg-[#2d3b36] hover:text-white transition duration-300 ease-in-out">
                        <span className="w-3 h-3 rounded-full bg-[#2D3B36] group-hover:bg-white transition duration-300 ease-in-out"></span>
                        Best Selling Products
                    </Button>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-semibold text-[#2D3B36] text-center flex-1">
                    Skincare That Brings Out <br className="hidden md:block" />
                    Your Natural Radiance
                </h2>

                {/* Arrow button are only visible on lg screen desktop */}
                <div className="hidden lg:flex gap-3">
                    <ArrowButton direction="left" onClick={handleScrollLeftClick} />
                    <ArrowButton direction="right" onClick={handleScrollRightClick} />
                </div>
            </div>

            {/* Carousel -- not using component -- */}
            <div className="relative w-full overflow-hidden">
                <div className="flex justify-center gap-6 max-w-[1024px] mx-auto transition-transform duration-300 ease-in-out">
                    {getVisibleProducts().map(renderCard)}
                </div>
            </div>

            {/* Arrow button at the  bottom for mobile & tablet */}
            <div className="flex lg:hidden justify-center gap-4 mt-8 ">
                <ArrowButton direction="left" onClick={handleScrollLeftClick} />
                <ArrowButton direction="right" onClick={handleScrollRightClick} />
            </div>
        </section>
    );

    function renderCard(product, index) {
        return (
            <div key={index} className="min-w-[300px] flex-shrink-0">
                <CardImage
                    image={product.image}
                    title={product.title}
                    price={product.price}
                />
            </div>
        );
    }
}

export default BestSellingProducts;
