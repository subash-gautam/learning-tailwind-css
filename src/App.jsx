import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
    return (
        <>
            <main className="max-w-4xl mx-auto w-screen flex flex-col items-center justify-center">
                <header className="my-6">
                    <h2 className="text-center font-semibold uppercase text-gray-300">
                        Your StarGazer
                    </h2>
                    <p className="text-center font-extrabold text-sky-700 tracking-tight text-6xl">
                        Profile
                    </p>
                </header>
                <form className="w-full grid gap-2 px-4">
                    <div className="flex justify-between items-center">
                        <label
                            htmlFor="name"
                            className="w-32 text-right pr-4 font-bold text-gray-700">
                            Name
                        </label>
                        <div className="flex-1">
                            <input
                                required
                                placeholder="name"
                                type="text"
                                id="name"
                                className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <label
                            htmlFor="email"
                            className="w-32 text-right pr-4 font-bold text-gray-700">
                            Email
                        </label>
                        <input
                            placeholder="email@company.com"
                            type="email"
                            id="email"
                            className="w-52 rounded-md flex-1 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label
                            htmlFor="about"
                            className="self-start w-32 text-right mt-2 pr-4 font-bold text-gray-700">
                            About
                        </label>
                        <textarea
                            disabled
                            id="about"
                            name="about"
                            placeholder="about me"
                            rows="3"
                            className="disabled:bg-gray-100 w-full flex-1 placeholder:text-slate-400 appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"></textarea>
                    </div>
                    <div className="flex justify-start items-center">
                        <label
                            htmlFor="photo"
                            className="w-32 text-right pr-4 font-bold text-gray-700">
                            Photo
                        </label>
                        <input
                            type="file"
                            className="block text-sm text-gray-400 file:mr-2 file:py-2 file:px-2 file:rounded-md file:border-solid file:border file:border-gray-200 file:text-sm file:bg-white file:text-gray-500 hover:file:bg-gray-100"
                        />
                    </div>
                    <div className="flex justify-start items-center focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                        <label
                            htmlFor="country"
                            className="w-32 text-right pr-4 font-bold text-gray-700">
                            Country
                        </label>
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="focus:outline-none focus:ring-2 focus:ring-sky-600 w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md">
                            <option>United States</option>
                            <option>Panama</option>
                            <option>Chile</option>
                        </select>
                    </div>
                    <div className="flex justify-start items-center">
                        <div
                            className="w-32 text-right pr-4 font-bold text-gray-900"
                            id="label-email">
                            Subscribe
                        </div>
                        <div className="flex items-center">
                            <input
                                id="subscribe"
                                name="subscribe"
                                type="checkbox"
                                defaultChecked
                                className="checked:ring-red-500 checked:ring-2 mr-2 focus:ring-sky-600 h-4 w-4 text-sky-600 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="subscribe"
                                className="text-gray-700">
                                yes
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-start items-center">
                        <div
                            className="w-32 text-right pr-4 font-bold text-gray-900"
                            id="label-email">
                            Notifications
                        </div>
                        <div className="flex items-center mr-4">
                            <input
                                id="notifications-all"
                                name="notifications"
                                type="radio"
                                className="indeterminate:ring-2 indeterminate:ring-red-500 focus:ring-sky-600 h-4 w-4 text-sky-600 border-gray-300"
                            />
                            <label
                                htmlFor="notifications-all"
                                className="ml-1 block text-gray-700">
                                All
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="notifications-none"
                                name="notifications"
                                type="radio"
                                className="indeterminate:ring-2 indeterminate:ring-red-500 focus:ring-sky-600 h-4 w-4 text-sky-600 border-gray-300"
                            />
                            <label
                                htmlFor="notifications-none"
                                className="ml-1 block text-gray-700">
                                None
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-white py-2 px-2 border border-gray-300 rounded-md shadow-sm font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm font-bold rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600">
                            Update
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default App;
