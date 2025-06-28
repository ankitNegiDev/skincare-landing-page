// function Footer() {
//     return (
//         <footer className="bg-[#2D3B36] text-white px-4 md:px-12 py-16 relative overflow-hidden">
//            
//             <div className="flex flex-col md:flex-row justify-between gap-10 mb-20">
//                 {/* Left: Join Message */}
//                 <div className="text-left">
//                     <h2 className="text-2xl md:text-3xl font-medium leading-snug">
//                         Join The Skincare <br /> Community Now.
//                     </h2>
//                 </div>

//                 
//                 <div className="text-left">
//                     <div className="pl-[2px]">
//                         <p className="text-sm md:text-base mb-1">Get in Touch</p>
//                         <p className="text-xl md:text-2xl font-light">contact.skincare.com</p>
//                     </div>
//                 </div>
//             </div>

//             
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-40">
//                 <div className="flex gap-6 text-sm">
//                     <a href="#" className="hover:underline">Facebook</a>
//                     <a href="#" className="hover:underline">Instagram</a>
//                     <a href="#" className="hover:underline">YouTube</a>
//                 </div>
//                 <div className="flex gap-6 text-sm">
//                     <a href="#" className="hover:underline">Terms of Service</a>
//                     <a href="#" className="hover:underline">Privacy Policy</a>
//                     <a href="#" className="hover:underline">Cookies Policy</a>
//                 </div>
//             </div>

//            
//             <div className="absolute bottom-[-60px] left-0 w-full text-center pointer-events-none border-2 border-red-500">
//                 <h1 className="text-[120px] md:text-[200px] font-bold text-[#FEFFF4]/5 uppercase leading-none tracking-widest">
//                     Skincare
//                 </h1>
//             </div>
//         </footer>
//     );
// }

// export default Footer;



//! styling 
function Footer() {
    return (
        <footer className="bg-[#2D3B36] text-white px-4 md:px-8 lg:px-12 py-16 relative overflow-hidden">

            {/* mobile and tablet layout */}
            <div className="flex flex-col gap-10 md:gap-10 lg:hidden justify-start md:mb-36">
                {/* Top Heading */}
                <div className="text-left md:text-left">
                    <h2 className="text-2xl md:text-3xl font-medium leading-snug">
                        Join The Skincare <br /> Community Now.
                    </h2>
                </div>

                {/* all links */}
                <div className="flex justify-start  gap-24 text-xl md:gap-48">
                    <a href="#" className="hover:underline">Facebook</a>
                    <a href="#" className="hover:underline">Instagram</a>
                    <a href="#" className="hover:underline">YouTube</a>
                </div>

                {/* text get in touch */}
                <div className="text-left md:text-left md:text-2xl">
                    <p className="text-xl  md:text-3xl mb-1 text-left">Get in Touch</p>
                    <p className="text-xl  md:text-4xl font-light">contact.skincare.com</p>
                </div>

                {/* all policy */}
                <div className="flex justify-start md:justify-start flex-wrap gap-10 text-sm md:text-2xl md:gap-20">
                    <a href="#" className="hover:underline">Terms Of Service</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Cookies Policy</a>
                </div>
            </div>

            {/* layout on desktop */}
            <div className="hidden lg:flex justify-between items-start mt-1">
                {/* left div */}
                <div className="flex flex-col gap-20 mb-20">
                    <h2 className="text-3xl font-medium leading-snug">
                        Join The Skincare <br /> Community Now.
                    </h2>
                    <div className="flex gap-6 text-sm mt-10">
                        <a href="#" className="hover:underline">Facebook</a>
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">YouTube</a>
                    </div>
                </div>

                {/* right div */}
                <div className="flex flex-col gap-40 text-right mb-40">
                    <div>
                        <p className="text-sm mb-1">Get in Touch</p>
                        <p className="text-2xl font-light">contact.skincare.com</p>
                    </div>
                    <div className="flex gap-6 justify-end text-sm">
                        <a href="#" className="hover:underline">Terms Of Service</a>
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Cookies Policy</a>
                    </div>
                </div>
            </div>

            {/* skin care bg text */}
            <div className="absolute bottom-[-20px]  lg:bottom-[-60px] left-0 w-full text-center pointer-events-none">
                <h1 className="text-[73px]  lg:text-[262px] font-extrabold text-[#FEFFF4]/5 uppercase leading-[1] tracking-[0.1em] md:text-[130px] md:bottom-[-40px]  ">
                    Skincare
                </h1>
            </div>
        </footer>
    );
}

export default Footer;





