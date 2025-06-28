// import { useRef, useImperativeHandle, forwardRef } from "react";

// function Carousel(props, ref) {
//     var carouselRef = useRef(null);

//     useImperativeHandle(ref, function () {
//         return {
//             scrollLeft: function () {
//                 if (carouselRef.current) {
//                     carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
//                 }
//             },
//             scrollRight: function () {
//                 if (carouselRef.current) {
//                     carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
//                 }
//             },
//         };
//     });

//     return (
//         <div
//             ref={carouselRef}
//             className="flex overflow-x-auto space-x-6 scroll-smooth pt-6 w-full border-2 border-red-500"
//         >
//             {props.children}
//         </div>
//     );
// }

// export default forwardRef(Carousel);
