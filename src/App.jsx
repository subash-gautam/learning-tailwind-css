import React from "react";

function App() {
    return (
        <>
            {/* by customization  */}
            <h1 className="">This is first test over tailwind css.</h1>
            {/* After overridden  */}
            <h1 className="text-2xl text-pink-500 mt-5">
                This is first test over tailwind css.
            </h1>
        </>
    );
}

export default App;
