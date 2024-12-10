import React from "react";
import Card from "./components/Card";

function App() {
    return (
        <>
            <a href="#">
                {/* Setting 1 to be hidden */}
                <span class="sr-only">Settings 1</span>
                {/* Setting 2 not to be hidden */}
                <span class="not-sr-only">Settings 2</span>
            </a>
        </>
    );
}

export default App;
