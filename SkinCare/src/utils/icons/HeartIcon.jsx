

function HeartIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                stroke="#1C274C"
                strokeLinecap="round"
                d="M10 4.584C6.25.688 1.667 3.562 1.667 7.614c0 4.053 3.35 6.212 5.801 8.145.865.682 1.699 1.324 2.532 1.324"
            />
            <path
                stroke="#1C274C"
                strokeLinecap="round"
                opacity="0.5"
                d="M10 4.584c3.75-3.896 8.333-1.022 8.333 3.03 0 4.053-3.35 6.212-5.801 8.145-.865.682-1.699 1.324-2.532 1.324"
            />
        </svg>
    );
}

export { HeartIcon };
