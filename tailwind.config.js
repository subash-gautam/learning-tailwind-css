/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    corePlugins: {
        preflight: false,
        // It removes some default properties of tailwind, such as Margins removed
        // Unstyled headings
        // List unstyled
        // Block images
        // Borders reset
    },
};
