import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Header() {

    const [navbar, setNavbar] = useState(false);

    const toggleNavbar = () => {
        setNavbar(!navbar);
    };

    const closeNavbar = () => {
        setNavbar(false);
    };

    return (
        <header className="w-full bg-black fixed top-0">
            <nav>
                <div className="justify-between px-3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4">
                    <div>
                        <div className="flex items-center justify-between py-2 md:py-3 md:block">
                            <a href="#home"  onClick={closeNavbar}>
                                <h2 className="text-2xl font-bold">deja.</h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-white text-xl"
                                    onClick={toggleNavbar}
                                >
                                    {navbar ? (
                                        <FontAwesomeIcon icon={faX} />
                                    ) : (
                                        <FontAwesomeIcon icon={faBars} />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                            <ul className="items-center h-[100vh] md:h-full justify-center text-center lg:text-base md:text-xs space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-gray-400 hover:text-white transition-all duration-500">
                                    <a href="#works" onClick={closeNavbar}>
                                        Works
                                    </a>
                                </li>
                                <li className="text-gray-400 hover:text-white transition-all duration-500">
                                    <a href="#works" onClick={closeNavbar}>
                                        Resume
                                    </a>
                                </li>
                                <li className="text-gray-400 hover:text-white transition-all duration-500">
                                    <a href="#contact" onClick={closeNavbar}>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )

}