import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
    return (
        <>
            <div className=" grid place-items-center p-5">
                <Button
                    label="Focus"
                    className={"focus:ring-4 focus:bg-indigo-600"}
                />{" "}
                <div className="focus-within:bg-cyan-600 focus-within:text-white">
                    <Button label="Focus-within" />
                </div>
                <Button
                    label="Focus-visible : Only work when navigating with keyboard...."
                    className="focus-visible:ring-4 focus-visible:bg-indigo-600"
                />
            </div>
        </>
    );
}

export default App;
