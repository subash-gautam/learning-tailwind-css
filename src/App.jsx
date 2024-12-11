import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
    return (
        <>
            <form class="w-full grid gap-2 px-4">
                <div class="flex justify-between items-center">
                    <label
                        for="name"
                        class="w-32 text-right pr-4 font-bold text-gray-700">
                        Name
                    </label>
                    <div class="flex-1">
                        <input
                            required
                            placeholder="name"
                            type="text"
                            id="name"
                            class="peer mt-5 invalid:border-red-300 invalid:border-2 w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                        />
                        <p class="hidden peer-invalid:block peer-invalid:font-bold peer-invalid:text-red-500">
                            A name is required.
                        </p>
                    </div>
                </div>
            </form>
        </>
    );
}

export default App;
