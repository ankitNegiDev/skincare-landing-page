
function CartIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width || 30}
            height={props.height || 30}
            fill="none"
            viewBox="0 0 30 30"
            {...props}
        >
            <path
                stroke="#2D3B36"
                strokeLinecap="round"
                strokeWidth="2"
                d="m2.5 3.75.331.11c1.65.55 2.475.825 2.947 1.48s.472 1.524.472 3.264v3.271c0 3.536 0 5.303 1.098 6.402 1.099 1.098 2.866 1.098 6.402 1.098h10"
            ></path>
            <path
                stroke="#2D3B36"
                strokeWidth="2"
                d="M9.375 22.5a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75ZM20.625 22.5a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75Z"
                opacity="0.5"
            ></path>
            <path
                stroke="#2D3B36"
                strokeWidth="2"
                d="M6.25 7.5h14.313c2.569 0 3.853 0 4.409.843s.05 2.023-.962 4.384l-.536 1.25c-.472 1.102-.709 1.654-1.178 1.963-.47.31-1.07.31-2.269.31H6.25"
            ></path>
        </svg>
    );
}

export default CartIcon;
