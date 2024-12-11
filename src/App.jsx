import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
    return (
        <>
            <div class="space-y-6">
                <div dir="ltr" class="border p-4 bg-gray-50">
                    <h2 class="text-xl font-bold">LTR Example</h2>
                    <p>
                        This is a paragraph with left-to-right (LTR) direction.
                        It's commonly used for English and other left-to-right
                        languages.
                    </p>
                </div>

                <div dir="rtl" class="border p-4 bg-gray-50">
                    <h2 class="text-xl font-bold">مثال RTL</h2>
                    <p>
                        هذا فقرة ذات اتجاه من اليمين إلى اليسار (RTL). تُستخدم
                        عادةً للغات مثل العربية والعبرية.
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;
