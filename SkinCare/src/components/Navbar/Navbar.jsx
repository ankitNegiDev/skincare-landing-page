// import { BagIcon } from "../../utils/icons/BagIcon";
// import { HeartIcon } from "../../utils/icons/HeartIcon";
// import { UserIcon } from "../../utils/icons/UserIcon";

// function Navbar() {
//     return (
//         <header className="w-full bg-[#EFF5E1] text-gray-800 shadow-sm pb-20">
//             <nav className="max-w-7xl mx-auto px-0 py-4 flex items-center justify-between">

//                 {/* Left: Logo */}
//                 <div>
//                     <h1 className=" font-extrabold tracking-normal w-[156px] h-[22px] text-[30px] leading-[30px]  text-[#2D3B36] uppercase ">SKINCARE</h1>
//                 </div>

//                 {/* Center: Nav Links */}
//                 <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
//                     <li className="cursor-pointer hover:text-black transition w-[103px] h-[15px] font-normal tracking-[-0.05em] text-[#2D3B36] text-[20px]">All Products</li>
//                     <li className="cursor-pointer hover:text-black transition w-[57px] h-[15px] font-normal tracking-[-0.05em] capitalize text-[#2D3B36] text-[20px]">Serum</li>
//                     <li className="cursor-pointer hover:text-black transition w-[92px] h-[15px] font-normal text-[20px] capitalize tracking-[-0.05em] text-[#2D3B36]">Snscreen</li>
//                     <li className="cursor-pointer hover:text-black transition w-[61px] h-[15px] font-normal text-[20px] capitalize tracking-[-0.05em] text-[#2D3B36]">Bundle</li> 
//                 </ul>

//                 {/* Right: Icons */}
//                 <div className="flex items-center gap-4 text-sm">

//                     {/* Cart Icon with label */}
//                     <div className="flex items-center justify-center rounded-full border-none p-1 w-[40px] h-[40px] bg-[#F8FEE5]">
//                         <BagIcon className="w-[20px] h-[20px]" />
//                     </div>
//                     <div className="flex items-center gap-2 space-x-2 w-[64px] h-[15px] font-normal text-[20px] rounded-full cursor-pointer hover:shadow-sm transition leading-[1] tracking-[-0.05em] text-[#2D3B36]">
//                         <span>Cart (1)</span>
//                     </div>

//                     {/* Heart Icon */}
//                     <button className="flex items-center justify-center bg-[#f8fee5] p-1 rounded-full hover:shadow-sm transition w-[40px] h-[40px]">
//                         <HeartIcon className="w-[20px] h-[20px] " />
//                     </button>

//                     {/* User Icon */}
//                     <button className="flex items-center justify-center bg-[#f8fee5] p-1 rounded-full hover:shadow-sm transition w-[40px] h-[40px]">
//                         <UserIcon className="w-[20px] h-[20px] text-gray-800" />
//                     </button>
//                 </div>
//             </nav>
//         </header>
//     );
// }

// export default Navbar;


//! applying responsive ness 


// import { BagIcon } from "../../utils/icons/BagIcon";
// import { HeartIcon } from "../../utils/icons/HeartIcon";
// import { UserIcon } from "../../utils/icons/UserIcon";

// function Navbar() {
//     return (
//         <header className="w-full bg-[#EFF5E1] text-gray-800 shadow-sm pb-20">
//             <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

//                 {/* Left: Logo */}
//                 <div>
//                     <h1 className="font-extrabold tracking-normal text-[30px] leading-[30px] text-[#2D3B36] uppercase">
//                         SKINCARE
//                     </h1>
//                 </div>

//                 {/* Center: Nav Links */}
//                 <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
//                     <li className="cursor-pointer hover:text-black transition font-normal tracking-[-0.05em] text-[#2D3B36] text-[20px]">All Products</li>
//                     <li className="cursor-pointer hover:text-black transition font-normal tracking-[-0.05em] capitalize text-[#2D3B36] text-[20px]">Serum</li>
//                     <li className="cursor-pointer hover:text-black transition font-normal text-[20px] capitalize tracking-[-0.05em] text-[#2D3B36]">Sunscreen</li>
//                     <li className="cursor-pointer hover:text-black transition font-normal text-[20px] capitalize tracking-[-0.05em] text-[#2D3B36]">Bundle</li>
//                 </ul>

//                 {/* Right: Icons */}
//                 <div className="flex items-center gap-2 md:gap-4 lg:gap-6 text-sm">

//                     {/* Cart Icon */}
//                     <div className="flex items-center justify-center rounded-full p-1 w-[40px] h-[40px] bg-[#F8FEE5]">
//                         <BagIcon className="w-[20px] h-[20px]" />
//                     </div>

//                     {/* Cart Label - hidden on mobile/tablet */}
//                     <div className="hidden lg:inline-flex items-center gap-2 text-[20px] font-normal rounded-full cursor-pointer hover:shadow-sm transition leading-[1] tracking-[-0.05em] text-[#2D3B36]">
//                         <span>Cart (1)</span>
//                     </div>

//                     {/* Heart Icon */}
//                     <button className="flex items-center justify-center bg-[#f8fee5] p-1 rounded-full hover:shadow-sm transition w-[40px] h-[40px]">
//                         <HeartIcon className="w-[20px] h-[20px]" />
//                     </button>

//                   
//                     <button className="flex items-center justify-center bg-[#f8fee5] p-1 rounded-full hover:shadow-sm transition w-[40px] h-[40px]">
//                         <UserIcon className="w-[20px] h-[20px] text-gray-800" />
//                     </button>
//                 </div>
//             </nav>
//         </header>

//     );
// }

// export default Navbar;




//? finial coee ....
import { BagIcon } from "../../utils/icons/BagIcon";
import { HeartIcon } from "../../utils/icons/HeartIcon";
import { UserIcon } from "../../utils/icons/UserIcon";

function Navbar() {
    return (
        <header className="w-full bg-[#EFF5E1] text-gray-800 shadow-sm pb-20">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* left heading */}
                <div>
                    <h1 className="font-extrabold tracking-normal text-[30px] leading-[30px] text-[#2D3B36] uppercase">
                        SKINCARE
                    </h1>
                </div>

                {/* center all links */}
                <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
                    <li className="cursor-pointer hover:text-black transition duration-300 ease-in-out font-normal tracking-[-0.05em] text-[#2D3B36] text-[20px] hover:underline underline-offset-4">All Products</li>
                    <li className="cursor-pointer hover:text-black transition duration-300 ease-in-out font-normal tracking-[-0.05em] capitalize text-[#2D3B36] text-[20px] hover:underline underline-offset-4">Serum</li>
                    <li className="cursor-pointer hover:text-[#2e3b36] transition duration-300 ease-in-out font-normal text-[20px] capitalize tracking-[-0.05em] text-[#2D3B36] hover:underline underline-offset-4">Sunscreen</li>
                    <li className="cursor-pointer hover:text-black transition duration-300 ease-in-out font-normal text-[20px] capitalize tracking-[-0.05em] text-[#2D3B36] hover:underline underline-offset-4">Bundle</li>
                </ul>

                {/* right icons*/}
                <div className="flex items-center gap-2 md:gap-4 lg:gap-6 text-sm">

                    {/* cart incons */}
                    <div className="flex items-center justify-center rounded-full p-1 w-[40px] h-[40px] bg-[#F8FEE5] hover:bg-[#e4f0d2] transition duration-300 ease-in-out">
                        <BagIcon className="w-[20px] h-[20px]" />
                    </div>

                    {/* Cart - hidden on mobile and tablet */}
                    <div className="hidden lg:inline-flex items-center gap-2 text-[20px] font-normal rounded-full cursor-pointer hover:shadow-md transition duration-300 ease-in-out leading-[1] tracking-[-0.05em] text-[#2D3B36] hover:text-black">
                        <span>Cart (1)</span>
                    </div>

                    {/* heart icon*/}
                    <button className="flex items-center justify-center bg-[#f8fee5] p-1 rounded-full hover:shadow-md hover:bg-[#e4f0d2] transition duration-300 ease-in-out w-[40px] h-[40px]">
                        <HeartIcon className="w-[20px] h-[20px]" />
                    </button>

                    {/* user icon */}
                    <button className="flex items-center justify-center bg-[#f8fee5] p-1 rounded-full hover:shadow-md hover:bg-[#e4f0d2] transition duration-300 ease-in-out w-[40px] h-[40px]">
                        <UserIcon className="w-[20px] h-[20px] text-gray-800" />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
