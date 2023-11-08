import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faDribbble, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Introduction() {
    return (
        <div id="home" className="min-h-screen min-w-screen flex flex-col bg-black">
            <div className="flex flex-col items-center justify-center gap-10 lg:flex-row md:flex-row lg:p-32 p-10 h-[85vh]">
                <div className="lg:w-[50%] md:w-[50%] flex flex-col gap-5 text-center md:text-left items-center lg:items-start md:items-start">
                    <h1 className="lg:text-6xl md:text-5xl text-3xl lg:text-left font-bold">Hi, I’m Adejare</h1>
                    <p className="lg:text-xl md:text-base text-sm lg:text-left">I‘m a UX/UI Designer with over three years experience conceptualizing and crafting digital products, helping businesses and non-profits expand their capacity for impact 🚀</p>
                    <div className="flex flex-row lg:gap-10 gap-5 lg:text-3xl md:text-2xl text-xl">
                        <a href="https://www.linkedin.com/in/odeleye-covenant-86029820a/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://dribbble.com/Covenant290"><FontAwesomeIcon icon={faDribbble} /></a>
                        <a href="https://twitter.com/Adejare_pelz"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://www.behance.net/odeleyecovenant"><FontAwesomeIcon icon={faBehance} /></a>
                    </div>
                </div>
                <div>
                    <img src="/images/deja.svg" alt="deja" className="lg:w-96 md:w-80 w-72" />
                </div>
            </div>
            <div className="self-center items-center justify-center">
                <img src="/images/introunderscore.svg" alt="underscore" className="w-52 h-14 lg:h-24" />
            </div>
        </div>
    )
}