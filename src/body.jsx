import React from "react";
import Works from "./works";
import Footer from "./footer";

export default function Body() {
    return (
        <body className="flex flex-col gap-20">
            <Works />
            <Footer />
        </body>
    )
}