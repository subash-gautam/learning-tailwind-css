import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
    return (
        <>
            <main className="flex w-screen h-screen flex flex-col items-center justify-center">
                <footer id="social" className="target:pt-24 mx-auto pt-16 pb-6">
                    <h1 className="text-center font-semibold tracking-wider text-indigo-600 uppercase">
                        Social Media : Group groups the childs and can be used
                        to style a particular child when and effects on parent
                        is happened.
                        <br />
                        For example if We hover over any icon, its text color
                        changes because icon and div containing text are under a
                        tag which i grouped.
                    </h1>
                    <div className="mt-6 flex place-content-center gap-6 text-center">
                        <a href="#" className="group text-gray-400">
                            <i className="bi bi-linkedin text-2xl"></i>
                            <div className="hidden md:inline ml-1 group-hover:text-indigo-500">
                                LinkedIn
                            </div>
                        </a>
                        <a href="#" className="group text-gray-400">
                            <i className="bi bi-twitter text-2xl"></i>
                            <div className="hidden md:inline ml-1 group-hover:text-indigo-500">
                                Twitter
                            </div>
                        </a>
                        <a href="#" className="group text-gray-400">
                            <i className="bi bi-youtube text-2xl"></i>
                            <div className="hidden md:inline ml-1 group-hover:text-indigo-500">
                                YouTube
                            </div>
                        </a>
                        <a href="#" className="group text-gray-400">
                            <i className="bi bi-snapchat text-2xl"></i>
                            <div className="hidden md:inline ml-1 group-hover:text-indigo-500">
                                SnapChat
                            </div>
                        </a>
                        <a href="#" className="group text-gray-400">
                            <i className="bi bi-instagram text-2xl"></i>
                            <div className="hidden md:inline ml-1 group-hover:text-indigo-500">
                                Instagram
                            </div>
                        </a>
                        <a href="#" className="group text-gray-400">
                            <i className="bi bi-tiktok text-2xl"></i>
                            <div className="hidden md:inline ml-1 group-hover:text-indigo-500">
                                TikTok
                            </div>
                        </a>
                    </div>
                </footer>
            </main>
        </>
    );
}

export default App;
