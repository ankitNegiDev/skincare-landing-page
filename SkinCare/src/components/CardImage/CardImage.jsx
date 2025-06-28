// import CartIcon from "../../utils/icons/CartIcon";



// function CardImage({ image, title, price }) {
//     return (
//         <div className="bg-white rounded-xl shadow-md overflow-hidden w-[300px] flex flex-col justify-between">
//             <img src={image} alt={title} className="w-full h-[350px] object-cover" />

//             <div className="flex justify-between items-center bg-[#FEFFF4] px-4 py-3">
//                 <div>
//                     <h3 className="text-sm font-bold text-gray-800 uppercase">
//                         {title}
//                     </h3>
//                     <p className="text-xs text-gray-500">{price}</p>
//                 </div>
//                 <button className="p-2 bg-[#E9ECE1] rounded-lg">
//                     <CartIcon width={20} height={20} />
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default CardImage;



import CartIcon from "../../utils/icons/CartIcon";

function CardImage({ image, title, price }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-[300px] flex flex-col justify-between transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg group">
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[350px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
            </div>

            <div className="flex justify-between items-center bg-[#FEFFF4] px-4 py-3">
                <div>
                    <h3 className="text-sm font-bold text-gray-800 uppercase">
                        {title}
                    </h3>
                    <p className="text-xs text-gray-500">{price}</p>
                </div>
                <button className="p-2 bg-[#E9ECE1] rounded-lg hover:bg-[#dce0d2] transition-colors duration-300">
                    <CartIcon width={20} height={20} />
                </button>
            </div>
        </div>
    );
}

export default CardImage;
