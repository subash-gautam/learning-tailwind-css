import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
    const [cast] = useState([
        {
            id: 0,
            name: "Aneirin",
            slug: "aneirin",
            bio: "Aneirin is the foremost expert of cold climates in planetoids universe-wide, with a particular inquisitiveness in areas colder than -300 F.",
        },
        {
            id: 1,
            name: "Celestia Dristi",
            slug: "celestia-dristi",
            bio: "Helps individuals and companies to improve personal and professional agility and growth in technology and systems.",
        },
        {
            id: 2,
            name: "Charmaine",
            slug: "charmaine",
            bio: "Charmaine loves fossils from every society and planet, and helping to piece together the stories they tell of an earlier time.",
        },
        {
            id: 3,
            name: "Emmyloo Em",
            slug: "emmyloo-em",
            bio: "She claims that her devotion to lexicography began as early as two years old, when she spoke her first full sentence.",
        },
        {
            id: 4,
            name: "Gill",
            slug: "gill",
            bio: "Carries on generations as a hydrologist specializing in underground reservoirs of aquatic-based planetoids.",
        },
        {
            id: 5,
            name: "Ichabod",
            slug: "ichabod",
            bio: "Operations supervisor Ichabod is unwavering in adherence to the perfection of order and function.",
        },
        {
            id: 6,
            name: "Laverne",
            slug: "laverne",
            bio: "Pursued understanding relationships among dissimilar measurable quantities at Quantumnus U.",
        },
        {
            id: 7,
            name: "Mindigo",
            slug: "mindigo",
            bio: "Earned the nickname \u201cMindiGoGo\u201d because of her tireless work in advanced travel and commodity conveyance.",
        },
        {
            id: 8,
            name: "Nalda",
            slug: "nalda",
            bio: "Began work as a mind reader and universal translator when founding Interplanetary Understanders and Lie Detectors.",
        },
        {
            id: 9,
            name: "Narf the Fourth",
            slug: "narf-the-fourth",
            bio: "Known to friends as Norf, oversees the manufacturing of astronomic spaceship accessories at Saucer & Rocket, Inc.",
        },
        {
            id: 10,
            name: "Portman",
            slug: "portman",
            bio: "No one loves animals, critters, varmints, and beasties as much as Dr. Portman, whether they are wild or a beloved pet.",
        },
        {
            id: 11,
            name: "Seymour",
            slug: "seymour",
            bio: "If it isn't counted, it doesn't count! is the mantra Seymour originated and propagated in the industry of inventory control.",
        },
        {
            id: 13,
            name: "Trisaphron",
            slug: "trisaphron",
            bio: "Earned a masters degree in practical operations after completing a bachelors of science in impractical mathematics.",
        },
        {
            id: 14,
            name: "Two",
            slug: "two",
            bio: "With growing interest by organizations, Two finds that it is increasingly critical to focus on sustainability.",
        },
        {
            id: 15,
            name: "Violette",
            slug: "violette",
            bio: "Violette holds a doctorate in Planetary Behaviorism. She has been fascinated in researching the behavior of sentient beings.",
        },
    ]);

    return (
        <>
            <div className="pt-10 mx-auto max-w-md px-4 text-center sm:max-w-xl sm:px-6 lg:px-8">
                <header className="mb-8">
                    <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
                        Here's the awesome
                    </h2>
                    <p className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Cast of StarGazers
                    </p>
                    <p className="max-w-prose mx-auto text-xl text-gray-500">
                        They come in all shapes and sizes. From a variety of
                        planets and with varied interests. See if you can find a
                        StarGazer that thinks and loves the same things you do.
                    </p>
                </header>
                <div className="grid grid-cols-1 gap-2 flex flex-col items-center justify-center w-auto">
                    {cast.map((item) => (
                        <details
                            key={item.id}
                            className="group open:ring-2 open:p-3 open:my-3 rounded-xl">
                            <summary className="text-gray-500 group-open:text-indigo-500 text-lg font-medium tracking-tight">
                                {item.name}
                            </summary>
                            <div className="text-sm leading-6 text-slate-600">
                                <img
                                    className="my-3 h-32 w-32 inline-flex items-center justify-center p-3 bg-indigo-500 rounded-full"
                                    src={`http://pixelprowess.com/i/stargazers/${item.slug}_tn.svg`}
                                    alt={item.name}
                                />
                                <p className="text-base text-gray-500">
                                    {item.bio}
                                </p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
