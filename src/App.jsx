import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
    return (
        <>
            <main class="max-w-4xl mx-auto w-screen flex flex-col items-center justify-center">
                <header class="my-6">
                    <h2 class="text-center font-semibold uppercase text-gray-300">
                        Your StarGazer
                    </h2>
                    <p class="text-center font-extrabold text-sky-700 tracking-tight text-6xl">
                        Profile
                    </p>
                </header>
                <form class="w-full grid gap-4 px-4">
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
                                class="invalid:border-red-300 invalid:border-2 w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div class="flex justify-between items-center">
                        <label
                            for="email"
                            class="w-32 text-right pr-4 font-bold text-gray-700">
                            Email
                        </label>
                        <input
                            required
                            placeholder="email@company.com"
                            type="email"
                            id="email"
                            class="required:bg-yellow-100 invalid:text-red-600 w-full rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                        />
                    </div>

                    <div class="flex justify-between items-start">
                        <label
                            for="about"
                            class="w-32 text-right mt-2 pr-4 font-bold text-gray-700">
                            About
                        </label>
                        <textarea
                            disabled
                            id="about"
                            name="about"
                            placeholder="about me"
                            rows="3"
                            class="w-full placeholder:text-slate-400 appearance-none border border-gray-300 py-2 px-2 bg-gray-100 text-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"></textarea>
                    </div>

                    <div class="flex justify-start items-center">
                        <label
                            for="photo"
                            class="w-32 text-right pr-4 font-bold text-gray-700">
                            Photo
                        </label>
                        <input
                            type="file"
                            class="block text-sm text-gray-400 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border file:border-gray-200 file:bg-white file:text-gray-500 hover:file:bg-green-100"
                        />
                    </div>

                    <div class="flex justify-start items-center">
                        <label
                            for="country"
                            class="w-32 text-right pr-4 font-bold text-gray-700">
                            Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            autocomplete="country-name"
                            class="w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600">
                            <option>United States</option>
                            <option>Panama</option>
                            <option>Chile</option>
                        </select>
                    </div>

                    <div class="flex justify-start items-center">
                        <div class="w-32 text-right pr-4 font-bold text-gray-900">
                            Subscribe
                        </div>
                        <div class="flex items-center">
                            <input
                                id="subscribe"
                                name="subscribe"
                                type="checkbox"
                                class="mr-2 focus:ring-sky-600 h-4 w-4 text-sky-600 border-gray-300 rounded"
                            />
                            <label for="subscribe" class="text-gray-700">
                                Yes
                            </label>
                        </div>
                    </div>

                    <div class="flex justify-start items-center">
                        <div class="w-32 text-right pr-4 font-bold text-gray-900">
                            Notifications
                        </div>
                        <div class="flex items-center mr-4">
                            <input
                                id="notifications-all"
                                name="notifications"
                                type="radio"
                                class="focus:ring-sky-600 h-4 w-4 text-sky-600 border-gray-300"
                            />
                            <label
                                for="notifications-all"
                                class="ml-1 block text-gray-700">
                                All
                            </label>
                        </div>
                        <div class="flex items-center">
                            <input
                                id="notifications-none"
                                name="notifications"
                                type="radio"
                                class="focus:ring-sky-600 h-4 w-4 text-sky-600 border-gray-300"
                            />
                            <label
                                for="notifications-none"
                                class="ml-1 block text-gray-700">
                                None
                            </label>
                        </div>
                    </div>
                    <div class="flex justify-end gap-2">
                        <button
                            type="button"
                            class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="py-2 px-4 border border-transparent shadow-sm font-bold rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600">
                            Update
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default App;
