function AddIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 30 30"
            {...props}
        >
            <path
                stroke="#2D3B36"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15h20M15 5v20"
            ></path>
        </svg>
    );
}

export default AddIcon;