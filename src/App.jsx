import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
    return (
        <>
            <div>
                <p className="first-of-type:bg-blue-500 last-of-type:bg-green-400 only-of-type:text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Expedita, quibusdam.
                </p>
                <a className="first-of-type:bg-blue-500 last-of-type:bg-green-400 only-of-type:text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Expedita, quibusdam.
                </a>
                <div className="first-of-type:bg-blue-500 last-of-type:bg-green-400 only-of-type:text-white">
                    Highlights on only-of-type.there exist only too, it works
                    when there is only one element
                </div>
                <a className="first-of-type:bg-blue-500 last-of-type:bg-green-400 only-of-type:text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Expedita, quibusdam.
                </a>
                <p className="first-of-type:bg-blue-500 last-of-type:bg-green-400 only-of-type:text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Expedita, quibusdam.
                </p>
            </div>
        </>
    );
}

export default App;
