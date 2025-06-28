function Button({ children, callerStyle = "", onClick }) {
    // its responsibility of caller of this button component to define the style and event and what this button will contain like text or any other thing -- so using children prop is best..
    return (
        <button
            onClick={onClick}
            className={`px-5 py-2 rounded-full font-medium text-sm ${callerStyle}`}
        >
            {children}
        </button>
    );
}

export default Button;
