import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
    return (
        <>
            <div>
                <a
                    href="#1"
                    className="active:bg-blue-500 visited:bg-green-600">
                    one
                </a>
                <a
                    href="#2"
                    className="active:bg-blue-500 visited:bg-green-600">
                    two
                </a>
                <a
                    href="#3"
                    className="active:bg-blue-500 visited:bg-green-600">
                    three
                </a>
            </div>
            <div id="1" className="target:bg-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                quis beatae iure voluptate illo fuga expedita similique vero
                recusandae aut quaerat assumenda eum placeat facilis ipsam
                aliquam? Magni, laborum atque! Odit, quas totam quod et
                provident quibusdam at distinctio dolorum natus incidunt sed
                quis nisi ut voluptatum eaque, necessitatibus magni.
            </div>
            <div id="2" className="target:bg-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                quis beatae iure voluptate illo fuga expedita similique vero
                recusandae aut quaerat assumenda eum placeat facilis ipsam
                aliquam? Magni, laborum atque! Odit, quas totam quod et
                provident quibusdam at distinctio dolorum natus incidunt sed
                quis nisi ut voluptatum eaque, necessitatibus magni.
            </div>
            <div id="3" className="target:bg-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                quis beatae iure voluptate illo fuga expedita similique vero
                recusandae aut quaerat assumenda eum placeat facilis ipsam
                aliquam? Magni, laborum atque! Odit, quas totam quod et
                provident quibusdam at distinctio dolorum natus incidunt sed
                quis nisi ut voluptatum eaque, necessitatibus magni.
            </div>
        </>
    );
}

export default App;
