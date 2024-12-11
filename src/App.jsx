import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
    return (
        <>
            <p className="text-black dark:bg-black dark:text-white">
                In normal light mode, there is black text with white background.
                When the system's mode is set to be dark the dart:[style] come
                to in play. For this case, bg to be black and text to be light.
            </p>
        </>
    );
}

export default App;
