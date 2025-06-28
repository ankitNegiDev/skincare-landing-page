
// import { useState } from "react";
// import Button from "../Button/Button";
// import CardImage from "../CardImage/CardImage";

// function FilteredProduct() {
//     const btnsArray = [
//         {
//             text: "New Arrival",
//             value: "new-arrival"
//         },
//         {
//             text: "Cleansing",
//             value: "cleansing"
//         },
//         {
//             text: "Acne Fighter",
//             value: "acne-fighter"
//         },
//         {
//             text: "Anti Aging",
//             value: "anti-aging"
//         },
//     ];

//     const products = [
//         {
//             image: "/assets/Mask group.png",
//             title: "ALYA SKIN CLEANSER.",
//             price: "From $29.99",
//             category: "new-arrival",
//         },
//         {
//             image: "/assets/Mask group1.png",
//             title: "RITUAL OF SAKURA.",
//             price: "From $27.99",
//             category: "cleansing",
//         },
//         {
//             image: "/assets/Mask group3.png",
//             title: "THE BODY LOTION.",
//             price: "From $19.99",
//             category: "anti-aging",
//         },
//         {
//             image: "/assets/Mask group1.png",
//             title: "FOAMING GEL.",
//             price: "From $35.00",
//             category: "acne-fighter",
//         },
//         {
//             image: "/assets/Mask group3.png",
//             title: "NIGHT REPAIR CREAM.",
//             price: "From $42.00",
//             category: "anti-aging",
//         },
//         {
//             image: "/assets/Mask group.png",
//             title: "VITAMIN C CLEANSER.",
//             price: "From $31.99",
//             category: "cleansing",
//         },
//     ];

//     const [activeBtnValue, setActiveBtn] = useState("new-arrival");

//     function handleFilterBtn(value) {
//         setActiveBtn(value);
//     }

//     function renderButton(btn) {
//         const isActive = btn.value === activeBtnValue;
//         const classes = `rounded-full text-sm px-4 py-1 border 
//             ${isActive ? "bg-[#2D3B36] text-white" : "border-[#2D3B36] text-[#2D3B36]"}
//             hover:bg-[#2D3B36] hover:text-white transition-colors`;
//         return (
//             <Button
//                 key={btn.value}
//                 onClick={function () {
//                     handleFilterBtn(btn.value); // calling function and passing value of btn which is clicked.....
//                 }}
//                 callerStyle={classes}
//             >
//                 {btn.text}
//             </Button>
//         );
//     }

//     function renderCard(product, index) {
//         return (
//             <div key={index} className="min-w-[300px] flex-shrink-0">
//                 <CardImage
//                     image={product.image}
//                     title={product.title}
//                     price={product.price}
//                 />
//             </div>
//         );
//     }

//     function getFilteredProducts() {
//         var filtered = [];
//         for (let i = 0; i < products.length; i++) {
//             if (products[i].category === activeBtnValue) {
//                 filtered.push(products[i]);
//             }
//         }
//         return filtered;
//     }

//     return (
//         <section className="bg-[#FEFFF4] px-4 md:px-12 py-16">
//             <h2 className="text-2xl md:text-3xl font-semibold text-[#2D3B36] text-center mb-6">
//                 Feel Beautiful Inside and Out <br className="hidden md:block" /> with Every Product.
//             </h2>

//          
//             <div className="flex justify-center flex-wrap gap-3 mb-10">
//                 {btnsArray.map(renderButton)} 
//             </div>

//          
//             <div className="flex justify-center flex-wrap gap-6">
//                 {getFilteredProducts().map(renderCard)}
//             </div>
//         </section>
//     );
// }

// export default FilteredProduct;


//! responsive testing 



import { useState } from "react";
import Button from "../Button/Button";
import CardImage from "../CardImage/CardImage";
import ArrowButton from "../ArrowButtons/ArrowButton";

function FilteredProduct() {
    const btnsArray = [
        { text: "New Arrival", value: "new-arrival" },
        { text: "Cleansing", value: "cleansing" },
        { text: "Acne Fighter", value: "acne-fighter" },
        { text: "Anti Aging", value: "anti-aging" },
    ];

    const products = [
        {
            image: "/assets/Mask group.png",
            title: "ALYA SKIN CLEANSER.",
            price: "From $29.99",
            category: "new-arrival",
        },
        {
            image: "/assets/Mask group.png",
            title: "ALYA SKIN CLEANSER.",
            price: "From $29.99",
            category: "new-arrival",
        },
        {
            image: "/assets/Mask group.png",
            title: "ALYA SKIN CLEANSER.",
            price: "From $29.99",
            category: "new-arrival",
        },
        {
            image: "/assets/Mask group1.png",
            title: "RITUAL OF SAKURA.",
            price: "From $27.99",
            category: "cleansing",
        },
        {
            image: "/assets/Mask group1.png",
            title: "RITUAL OF SAKURA.",
            price: "From $27.99",
            category: "cleansing",
        },
        {
            image: "/assets/Mask group3.png",
            title: "THE BODY LOTION.",
            price: "From $19.99",
            category: "anti-aging",
        },
        {
            image: "/assets/Mask group1.png",
            title: "FOAMING GEL.",
            price: "From $35.00",
            category: "acne-fighter",
        },
        {
            image: "/assets/Mask group1.png",
            title: "FOAMING GEL.",
            price: "From $35.00",
            category: "acne-fighter",
        },
        {
            image: "/assets/Mask group1.png",
            title: "FOAMING GEL.",
            price: "From $35.00",
            category: "acne-fighter",
        },
        {
            image: "/assets/Mask group3.png",
            title: "NIGHT REPAIR CREAM.",
            price: "From $42.00",
            category: "anti-aging",
        },
        {
            image: "/assets/Mask group.png",
            title: "VITAMIN C CLEANSER.",
            price: "From $31.99",
            category: "cleansing",
        },
    ];

    const [activeBtnValue, setActiveBtn] = useState("new-arrival");
    const [scrollIndex, setScrollIndex] = useState(0);

    function handleFilterBtn(value) {
        setActiveBtn(value);
        setScrollIndex(0); // reset scroll on filter change
    }

    function getFilteredProducts() {
        return products.filter(function (item) {
            return item.category === activeBtnValue;
        });
    }

    function handleScrollRightClick() {
        var filtered = getFilteredProducts();
        var next = (scrollIndex + 1) % filtered.length;
        setScrollIndex(next);
    }

    function handleScrollLeftClick() {
        var filtered = getFilteredProducts();
        var prev = (scrollIndex - 1 + filtered.length) % filtered.length;
        setScrollIndex(prev);
    }

    function renderButton(btn) {
        const isActive = btn.value === activeBtnValue;
        const classes = `rounded-full text-sm px-4 py-1 border 
            ${isActive ? "bg-[#2D3B36] text-white" : "border-[#2D3B36] text-[#2D3B36]"}
            hover:bg-[#2D3B36] hover:text-white transition-colors`;
        return (
            <Button
                key={btn.value}
                onClick={function () {
                    handleFilterBtn(btn.value);
                }}
                callerStyle={classes}
            >
                {btn.text}
            </Button>
        );
    }

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

    const filteredProducts = getFilteredProducts();

    return (
        <section className="bg-[#FEFFF4] px-4 md:px-12 py-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2D3B36] text-center mb-6">
                Feel Beautiful Inside and Out <br className="hidden md:block" /> with Every Product.
            </h2>

            {/* rendering all buttons */}
            <div className="flex justify-center flex-wrap gap-3 mb-10">
                {btnsArray.map(renderButton)}
            </div>

            {/* scrollable carousel container */}
            <div className="relative overflow-hidden w-full">
                <div className="max-w-[1024px] mx-auto overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out gap-6"
                        style={{ transform: `translateX(-${scrollIndex * 320}px)` }}
                    >
                        {filteredProducts.map(renderCard)}
                    </div>
                </div>
            </div>

            {/* Arrow Buttons only for mobile and tablet*/}
            <div className="flex justify-center gap-4 mt-6 lg:hidden">
                <ArrowButton direction="left" onClick={handleScrollLeftClick} />
                <ArrowButton direction="right" onClick={handleScrollRightClick} />
            </div>
        </section>
    );
}

export default FilteredProduct;

