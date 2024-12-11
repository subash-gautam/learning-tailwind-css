import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
    return (
        <>
            <div>
                <Button label="Something" className="empty:hidden" />
                <Button className="empty:hidden" />
            </div>
        </>
    );
}

export default App;
