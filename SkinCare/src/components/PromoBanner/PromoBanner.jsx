// import Button from "../Button/Button";

// function PromoBanner() {
//     return (
//         <section className="px-4 md:px-12 py-10 bg-[#FEFFF4]">
//             <div className="relative w-full max-w-[1100px] mx-auto overflow-hidden rounded-[20px]">
//                 {/* Image */}
//                 <img
//                     src="/assets/promo banner image.png"
//                     alt="Promo"
//                     className="w-full h-[600px] object-cover rounded-[20px]"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 rounded-[20px]"></div>

//                 {/* Content */}
//                 <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-4 px-4 z-20">
//                     <h2 className="text-white text-2xl md:text-4xl font-semibold leading-snug mb-4 max-w-3xl">
//                         Feel Beautiful Inside and Out<br className="hidden md:block" /> with Every Product.
//                     </h2>
//                     <Button callerStyle="bg-white text-[#2D3B36] hover:bg-[#2D3B36] hover:text-white transition-colors text-sm px-6 py-2 mt-4 rounded-full">
//                         Shop Now
//                     </Button>
//                 </div>
//             </div>
//         </section>
//     );
// }


// export default PromoBanner;


//! responsive 


import Button from "../Button/Button";

function PromoBanner() {
    return (
        <section className="hidden lg:block px-4 md:px-12 py-10 bg-[#FEFFF4]">
            <div className="relative w-full max-w-[1100px] mx-auto overflow-hidden rounded-[20px]">
                {/* Image */}
                <img
                    src="/assets/promo banner image.png"
                    alt="Promo"
                    className="w-full h-[600px] object-cover rounded-[20px]"
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-4 px-4 z-20">
                    <h2 className="text-white text-2xl md:text-4xl font-semibold leading-snug mb-4 max-w-3xl">
                        Feel Beautiful Inside and Out<br className="hidden md:block" /> with Every Product.
                    </h2>
                    <Button callerStyle="bg-white text-[#2D3B36] hover:bg-[#2D3B36] hover:text-white transition-colors text-sm px-6 py-2 mt-4 rounded-full">
                        Shop Now
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default PromoBanner;
