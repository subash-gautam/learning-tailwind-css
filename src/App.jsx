import React from "react";
import Card from "./components/Card";

function App() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="shadow-lg w-64 h-64 bg-white-100 border-4 border-green-300 rounded-3xl m-5 text-center">
                    Box Shadow shadow(-AMT)
                </div>
                <div className="shadow-inner w-64 h-64 bg-white-100 border-4 border-green-300 rounded-3xl m-5 text-center">
                    {" "}
                    AMT none inner sm md lg xl 2xl
                </div>
                <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-64 h-64 bg-white-100 border-4 border-green-300 rounded-3xl m-5"></div>
            </div>
        </>
    );
}

export default App;
