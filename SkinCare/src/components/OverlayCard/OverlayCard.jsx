// function OverlayCard({ image, children, callerStyle = "" }) {
//     return (
//         <div className={`flex items-center bg-white px-3 py-2 rounded-full shadow ${callerStyle}`}>
//             <img src={image} alt="Overlay" className="w-8 h-8 rounded-full mr-2" />
//             <div className="text-sm">{children}</div>
//         </div>
//     );
// }

// export default OverlayCard;


// function OverlayCard(props) {
//     return (
//         <div className={`flex items-center bg-[#EFF5E1] px-4 py-2 rounded-full shadow-md w-[476px] h-[100px] gap-10  ${props.callerStyle} border-2 border-red-500`}>
//             {/* Circular Image with dotted border */}
//             <div className={`w-[88px] h-[88px] rounded-full overflow-hidden border-2 border-dotted border-gray-400 mr-3 flex items-center justify-center flex-shrink-0 ${props.imageBg}`}>
//                 <img
//                     src={props.image}
//                     alt="Overlay Icon"
//                     className={`w-[80px] h-[80px] object-cover rounded-full ${props.dimension}`}
//                 />
//             </div>

//             {/* Text content */}
//             <div className="text-sm text-gray-800 font-medium w-[304px] h-[39px] border-red-400 border-1">
//                 {props.children}
//             </div>
//         </div>
//     );
// }

// function OverlayCard(props) {
//     const {
//         image,
//         imageBg = "",            // custom background (optional)
//         imageSize = "w-[80px] h-[80px]",  // default image size
//         imageWrapper = false     // toggle between new vs old layout
//     } = props;

//     return (
//         <div className={`flex items-center bg-[#EFF5E1] px-4 py-2 rounded-full shadow-md w-[476px] h-[100px] gap-10 border-2 border-red-500 ${props.callerStyle}`}>
//             {/* Circular Image */}
//             {imageWrapper ? (
//                 <div className="w-[88px] h-[88px] rounded-full border-2 border-dotted border-gray-400 flex items-center justify-center flex-shrink-0">
//                     <div className={`w-[72px] h-[72px] rounded-full flex items-center justify-center ${imageBg}`}>
//                         <img
//                             src={image}
//                             alt="Overlay Icon"
//                             className={`object-contain ${imageSize}`}
//                         />
//                     </div>
//                 </div>
//             ) : (
                
//                 <div className={`w-[88px] h-[88px] rounded-full overflow-hidden border-2 border-dotted border-gray-400 flex items-center justify-center flex-shrink-0 ${imageBg}`}>
//                     <img
//                         src={image}
//                         alt="Overlay Icon"
//                         className={`object-cover rounded-full ${imageSize}`}
//                     />
//                 </div>
//             )}

//             {/* Text content */}
//             <div className="text-sm text-gray-800 font-medium w-[304px] h-[39px]">
//                 {props.children}
//             </div>
//         </div>
//     );
// }


// export default OverlayCard;


//! responsive 

function OverlayCard(props) {
    const {
        image,
        imageBg = "",
        imageSize = "w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[72px] md:h-[72px] lg:w-[80px] lg:h-[80px]",
        imageWrapper = false,
    } = props;

    return (
        <div className={`flex items-center bg-[#EFF5E1] px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-full shadow-md border border-gray-300 
                        w-[280px] sm:w-[340px] md:w-[420px] lg:w-[476px] 
                        h-auto gap-3 sm:gap-4 md:gap-6 lg:gap-10 
                        ${props.callerStyle}`}>

            {/* Circular Image */}
            {imageWrapper ? (
                <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full border-2 border-dotted border-gray-400 flex items-center justify-center flex-shrink-0">
                    <div className={`w-[48px] h-[48px] sm:w-[58px] sm:h-[58px] md:w-[64px] md:h-[64px] rounded-full flex items-center justify-center ${imageBg}`}>
                        <img
                            src={image}
                            alt="Overlay Icon"
                            className={`object-contain ${imageSize}`}
                        />
                    </div>
                </div>
            ) : (
                <div className={`w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] rounded-full overflow-hidden border-2 border-dotted border-gray-400 flex items-center justify-center flex-shrink-0 ${imageBg}`}>
                    <img
                        src={image}
                        alt="Overlay Icon"
                        className={`object-cover rounded-full ${imageSize}`}
                    />
                </div>
            )}

            {/* Text Content */}
            <div className="text-xs sm:text-sm md:text-base text-gray-800 font-medium leading-snug w-full">
                {props.children}
            </div>
        </div>
    );
}

export default OverlayCard;
