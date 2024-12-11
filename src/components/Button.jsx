// BeautifulButton.js
import React from "react";

const Button = ({ label, className }) => {
    console.log(className);
    return (
        <button
            className={`${className} font-bold py-2 px-4 rounded
            bg-blue-600 border-4 border-blue-950 text-white m-5`}>
            {label}
        </button>
    );
};

export default Button;
