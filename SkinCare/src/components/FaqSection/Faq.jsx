// import { useState } from "react";
// import OverlayCard from "../OverlayCard/OverlayCard";
// import Button from "../Button/Button";
// import RemoveIcon from "../../utils/icons/RemoveIcon";
// import AddIcon from "../../utils/icons/AddIcon";


// function FaqSection() {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const faqs = [
//         {
//             question: "Are your products safe for sensitive skin?",
//             answer: "Yes, all our products are dermatologically tested and suitable for sensitive skin types.",
//         },
//         {
//             question: "Are your products cruelty-free?",
//             answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
//         },
//         {
//             question: "What's your return policy?",
//             answer: "You can return products within 30 days of purchase. See our return policy for more details.",
//         },
//         {
//             question: "Do you ship internationally?",
//             answer: "Yes, we ship to over 50 countries worldwide. Shipping costs may vary based on location.",
//         },
//         {
//             question: "How do I choose the right product?",
//             answer: "Use our product quiz or consult our skincare specialists via chat or email.",
//         },
//     ];

//     function handleToggle(index) {
//         if (activeIndex === index) {
//             setActiveIndex(null);
//         } else {
//             setActiveIndex(index);
//         }
//     }

//     function renderFaqItem(faq, index) {
//         const isOpen = activeIndex === index;
//         return (
//             <div
//                 key={index}
//                 className="border border-[#2D3B36] rounded-md px-4 py-3 transition-all duration-300"
//             >
//                 <button
//                     onClick={function () {
//                         handleToggle(index);
//                     }}
//                     className="w-full flex items-center justify-between text-left text-[#2D3B36] font-medium"
//                 >
//                     {faq.question}
//                     {isOpen ? <RemoveIcon /> : <AddIcon />}
//                 </button>
//                 {isOpen && (
//                     <p className="mt-2 text-sm text-[#2D3B36] leading-relaxed">
//                         {faq.answer}
//                     </p>
//                 )}
//             </div>
//         );
//     }

//     return (
//         <section className="bg-[#FEFFF4] px-4 md:px-12 py-16 min-h-[500px]">
//             <div className="flex flex-col md:flex-row gap-10 items-stretch border-2 border-red-500">

//          
//                 <div className="w-full md:w-1/2 h-full">
//                     <div className="relative h-full rounded-2xl overflow-hidden">
//                         <img
//                             src="/assets/faq-section.png"
//                             alt="FAQ Product"
//                             className="w-full h-full object-cover"
//                         />
//                         <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
//                             <OverlayCard
//                                 image="/assets/headphone-svgrepo-com.png"
//                                 callerStyle="bg-[#EFF5E1]"
//                                 imageBg="bg-[#2D3B36]"
//                                 imageWrapper={true}
//                                 imageSize="w-[50px] h-[50px]"
//                             >
//                                 Best Skin Care Product <br />
//                                 Award Winning
//                             </OverlayCard>
//                         </div>
//                     </div>
//                 </div>

//           
//                 <div className="w-full md:w-1/2 flex flex-col justify-start">
//                     {/* Pill with Dot */}
//                     <div className="flex items-center gap-2 border border-[#2D3B36] rounded-full px-4 py-1 w-fit mb-20">
//                         <span className="w-3 h-3 bg-[#2D3B36] rounded-full"></span>
//                         <Button callerStyle="text-[#2D3B36] text-sm hover:bg-[#2D3B36] hover:text-white transition-colors">
//                             Frequently Asked Question
//                         </Button>
//                     </div>

//                     <h2 className="text-2xl md:text-3xl font-semibold text-[#2D3B36] mb-24 leading-snug">
//                         Answers to Your <br className="hidden md:block" />
//                         Skincare Questions, All <br className="hidden md:block" />
//                         in One Place.
//                     </h2>

//                     <div className="space-y-4">
//                         {faqs.map(renderFaqItem)}
//                     </div>
//                 </div>
//             </div>
//         </section>


    
//     );
    
// }

// export default FaqSection;





//!! styling responsive
import { useState } from "react";
import OverlayCard from "../OverlayCard/OverlayCard";
import Button from "../Button/Button";
import RemoveIcon from "../../utils/icons/RemoveIcon";
import AddIcon from "../../utils/icons/AddIcon";

function FaqSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Are your products safe for sensitive skin?",
            answer: "Yes, all our products are dermatologically tested and suitable for sensitive skin types.",
        },
        {
            question: "Are your products cruelty-free?",
            answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
        },
        {
            question: "What's your return policy?",
            answer: "You can return products within 30 days of purchase. See our return policy for more details.",
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to over 50 countries worldwide. Shipping costs may vary based on location.",
        },
        {
            question: "How do I choose the right product?",
            answer: "Use our product quiz or consult our skincare specialists via chat or email.",
        },
    ];

    function handleToggle(index) {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    }

    function renderFaqItem(faq, index) {
        const isOpen = activeIndex === index;
        return (
            <div
                key={index}
                className="border border-[#2D3B36] rounded-md px-4 py-3 transition-all duration-300"
            >
                <button
                    onClick={function () {
                        handleToggle(index);
                    }}
                    className="w-full flex items-center justify-between text-left text-[#2D3B36] font-medium"
                >
                    {faq.question}
                    {isOpen ? <RemoveIcon /> : <AddIcon />}
                </button>
                {isOpen && (
                    <p className="mt-2 text-sm text-[#2D3B36] leading-relaxed">
                        {faq.answer}
                    </p>
                )}
            </div>
        );
    }

    return (
        <section className="bg-[#FEFFF4] px-4 md:px-12 py-16">
            <div className="flex flex-col lg:flex-row-reverse gap-10 items-stretch">

                {/* faq content  */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start">
                    {/* faq button with circle */}
                    <div className="flex items-center gap-2 border-0 border-[#2D3B36] rounded-full px-4 py-1 w-fit mb-6">
                        <Button callerStyle="group flex items-center gap-2 text-[#2D3B36] font-semibold text-base bg-transparent px-4 py-2 rounded-full border border-[#2D3B36] hover:bg-[#2d3b36] hover:text-white transition duration-300 ease-in-out">
                            <span className="w-3 h-3 rounded-full bg-[#2D3B36] group-hover:bg-white transition duration-300 ease-in-out"></span>
                            Frequently Asked Questions
                        </Button>
                    </div>

                    {/*faq main heading */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#2D3B36] mb-10 leading-snug">
                        Answers to Your <br className="hidden md:block" />
                        Skincare Questions, All <br className="hidden md:block" />
                        in One Place.
                    </h2>

                    {/* faq accordian or question with ans */}
                    <div className="space-y-4">
                        {faqs.map(renderFaqItem)}
                    </div>
                </div>

                {/* image in faq  */}
                <div className="w-full lg:w-1/2 h-full block md:hidden lg:block">
                    <div className="relative h-full rounded-2xl overflow-hidden">
                        <img
                            src="/assets/faq-section.png"
                            alt="FAQ Product"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                            <OverlayCard
                                image="/assets/headphone-svgrepo-com.png"
                                callerStyle="bg-[#EFF5E1]"
                                imageBg="bg-[#2D3B36]"
                                imageWrapper={true}
                                imageSize="w-[50px] h-[50px]"
                            >
                                24/7 We’re Here <br /> to Help You
                            </OverlayCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqSection;
