// import Button from "../Button/Button";
// import OverlayCard from "../OverlayCard/OverlayCard";


// function WhyOurProducts() {
//     return (
//         <section className="bg-[#FEFFF4] px-6 py-16">
//             <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
//                 {/* Left Column */}
//                 <div className="flex-1 space-y-10">
//                     {/* Button */}
//                     <Button callerStyle="flex items-center gap-2 text-[#2D3B36] font-semibold text-base bg-transparent px-4 py-2 rounded-full border border-[#2D3B36]">
//                         <span className="w-3 h-3 rounded-full bg-[#2D3B36]"></span>
//                         Why Choose Our Products
//                     </Button>


//                     {/* Heading */}
//                     <h2 className="text-4xl font-semibold leading-tight text-[#2D3B36]">
//                         YOUR SKIN DESERVES <br /> THE BEST CARE.
//                     </h2>

//                     {/* Description Paragraph */}
//                     <p className="text-gray-600 text-base leading-relaxed max-w-md">
//                         Discover a curated collection of skincare products designed to
//                         rejuvenate, protect, and pamper your skin. Explore our range crafted
//                         with love backed by science, and inspired by nature.
//                     </p>
//                     <div className="space-y-8">
//                         {[
//                             {
//                                 number: "01",
//                                 title: "Bio Ingredients",
//                                 desc: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
//                             },
//                             {
//                                 number: "02",
//                                 title: "Everything Natural",
//                                 desc: "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
//                             },
//                             {
//                                 number: "03",
//                                 title: "All Handmade",
//                                 desc: "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
//                             },
//                         ].map(function (item) {
//                             return (
//                                 <div key={item.number} className="flex items-start gap-4">
//                                     {/* Gradient-filled number text */}
//                                     <p
//                                         className="text-3xl font-bold"
//                                         style={{
//                                             background: "linear-gradient(180deg, #293330 0%, #FEFFF4 100%)",
//                                             WebkitBackgroundClip: "text",
//                                             WebkitTextFillColor: "transparent",
//                                         }}
//                                     >
//                                         {item.number}
//                                     </p>

//                                     <div>
//                                         <h2 className="text-xl font-semibold text-[#2D3B36]  font-inter ">{item.title}</h2>
//                                         <p className="text-gray-600 text-sm leading-relaxed w-[400px]">{item.desc}</p>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>

//                 </div>

//                 {/* Right Column */}
//                 <div className="flex-1 relative border-2 border-red-500 mt-4">
//                     <img
//                         src="../../../public/assets/why our products image 1.png"
//                         alt="Woman skincare"
//                         className="rounded-2xl w-full h-auto object-cover"
//                     />

//                     {/* OverlayCard */}
//                     <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
//                         <OverlayCard
//                             image="../../../public/assets/award-svgrepo-com.png"
//                             callerStyle="bg-[#EFF5E1]"
//                             imageBg="bg-[#2D3B36]"
//                             imageWrapper={true} // activates new layout
//                             imageSize="w-[50px] h-[50px]"
//                         >
//                             Best Skin Care Product <br />
//                             Award Winning
//                         </OverlayCard>
//                     </div>

//                     {/* Bottom Info Row */}
//                     <div className="flex justify-between items-center text-sm text-gray-600 mt-4 px-1">
//                         <span>SINCE 2001</span>
//                         <span className="underline cursor-pointer">LEARN MORE</span>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default WhyOurProducts;


//! responsive 

import Button from "../Button/Button";
import OverlayCard from "../OverlayCard/OverlayCard";

function WhyOurProducts() {
    return (
        <section className="bg-[#FEFFF4] px-4 sm:px-6 py-16">
            <div className="max-w-7xl lg:mx-auto flex flex-col lg:flex-row md:items-start gap-16 ">
                {/* Left Column */}
                <div className="flex-1 space-y-10 md:px-4 ">
                    {/* Button */}
                    <Button callerStyle="group flex items-center gap-2 text-[#2D3B36] font-semibold text-base bg-transparent px-4 py-2 rounded-full border border-[#2D3B36] hover:bg-[#2d3b36] hover:text-white transition duration-300 ease-in-out">
                        <span className="w-3 h-3 rounded-full bg-[#2D3B36] group-hover:bg-white transition duration-300 ease-in-out"></span>
                        Why Our Products
                    </Button>


                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug text-[#2D3B36]">
                        YOUR SKIN DESERVES <br /> THE BEST CARE.
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
                        Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin. Explore our range crafted with love backed by science, and inspired by nature.
                    </p>

                    {/* featured cards */}
                    <div className="space-y-8">
                        {[
                            {
                                number: "01",
                                title: "Bio Ingredients",
                                desc: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
                            },
                            {
                                number: "02",
                                title: "Everything Natural",
                                desc: "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
                            },
                            {
                                number: "03",
                                title: "All Handmade",
                                desc: "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
                            },
                        ].map(function (item) {
                            return (
                                <div key={item.number} className="flex items-start gap-4">
                                    <p
                                        className="text-xl sm:text-2xl font-bold"
                                        style={{
                                            background: "linear-gradient(180deg, #293330 0%, #FEFFF4 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {item.number}
                                    </p>

                                    <div>
                                        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#2D3B36] font-inter">
                                            {item.title}
                                        </h2>
                                        <p className="text-gray-600 text-sm leading-relaxed max-w-[350px] sm:max-w-[400px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 relative w-full max-w-[500px] sm:max-w-none">
                    <img
                        src="../../../public/assets/why our products image 1.png"
                        alt="Woman skincare"
                        className="rounded-2xl w-full h-auto object-cover"
                    />

                    {/* OverlayCard */}
                    <div className="absolute  left-1/2 transform -translate-x-1/2   bottom-[50px] sm:bottom-10 md:bottom-20 lg:bottom-20">
                        <OverlayCard
                            image="../../../public/assets/award-svgrepo-com.png"
                            callerStyle="bg-[#EFF5E1] px-4 py-2 sm:px-6 sm:py-3"
                            imageBg="bg-[#2D3B36]"
                            imageWrapper={true}
                            imageSize="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                        >
                            Best Skin Care Product <br />
                            Award Winning
                        </OverlayCard>
                    </div>

                    {/* Bottom of the right corner image. */}
                    <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600 mt-6 px-1">
                        <span>SINCE 2001</span>
                        <span className="underline cursor-pointer">LEARN MORE</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyOurProducts;
