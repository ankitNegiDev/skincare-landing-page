
// function ArrowButton(props) {
//     const { direction, onClick, filled = false } = props;
//     const isLeft = direction === "left";

//     return (
//         <button
//             onClick={onClick}
//             aria-label={isLeft ? "Scroll Left" : "Scroll Right"}
//             className={`w-10 h-10 rounded-full flex items-center justify-center 
//                 border border-[#2D3B36] transition duration-200 
//                 ${filled ? "bg-[#2D3B36] text-white" : "bg-transparent text-[#2D3B36]"}`}
//         >
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-4 h-4"
//             >
//                 {isLeft ? (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 ) : (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 )}
//             </svg>
//         </button>
//     );
// }

// export default ArrowButton;





function ArrowButton(props) {
    const { direction, onClick } = props;
    const isLeft = direction === "left";

    return (
        <button
            onClick={onClick}
            aria-label={isLeft ? "Scroll Left" : "Scroll Right"}
            className="w-10 h-10 rounded-full flex items-center justify-center
                        border border-[#2D3B36] bg-transparent text-[#2D3B36]
                        hover:bg-[#2D3B36] hover:text-white transition duration-200"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
            >
                {isLeft ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                )}
            </svg>
        </button>
    );
}

export default ArrowButton;
