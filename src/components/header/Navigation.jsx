"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";




const Navigation = () => {
    
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [isDelayDropdownOpen, setDelayDropdownOpen] = useState(false);

    const toggleDelayDropdown = () => {
        setDelayDropdownOpen(!isDelayDropdownOpen);
    };

    const toggleUserDropdown = () => {
        setUserDropdownOpen(!isUserDropdownOpen);
    };

    const closeBurgerMenu = () => {
        if (isBurgerMenuOpen) {
            setBurgerMenuOpen(false);
        }
    };

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrolled = window.scrollY > 0;
        setIsScrolled(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    

    


    const navClasses = `border-gray-200  ${isScrolled ? "bg-white shadow fixed top-0 z-20" : ""
        }`;

    return (
        <div className="">
            <nav className={navClasses} style={{ width: "100%", margin: "auto" }}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between   mx-auto p-4">
                    <Link rel="preload" href="/" className="flex items-center">
                        <Image
                            src="/Supply Chain Delivery Services Exhibition.png"
                            width={300}
                            height={120}
                            className="h-8 mr-3"
                            alt="Supply Chain Delivery Services Exhibition"
                            priority={true}
                            style={{ width: "auto", height: "auto" }}
                        />
                    </Link>
                    <div className="flex items-center md:order-2">
                        <div
                            onClick={toggleUserDropdown}
                            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            aria-expanded={isUserDropdownOpen}
                        >
                            <span className="sr-only">Open user menu</span>
                        </div>
                        <button
                            onClick={toggleBurgerMenu}
                            data-collapse-toggle="navbar-user"
                            type="button"
                            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-white-200 border border-red-200 text-black ${isBurgerMenuOpen
                                    ? "hover:bg-white-100 dark:hover:bg-white-600"
                                    : ""
                                }`}
                            aria-controls="navbar-user"
                            aria-expanded={isBurgerMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`items-center justify-between ${isBurgerMenuOpen ? "" : "hidden"
                            } w-full md:flex md:w-auto md:order-1`}
                        id="navbar-user"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                            <li>
                                <Link
                                    rel="preload"
                                    href="/"
                                    className="block py-2 px-2 hover:bg-red-600 p-5 hover:text-white text-black "
                                    aria-current="page"
                                    onClick={closeBurgerMenu}
                                >
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link
                                    rel="preload"
                                    href="/about"
                                    className="block py-2 px-2 hover:bg-red-600 p-5 hover:text-white text-black "
                                    aria-current="page"
                                    onClick={closeBurgerMenu}
                                >
                                    Découvrez la SDS
                                </Link>
                            </li>
                            <li
                                className={` ${toggleDelayDropdown
                                    ? "sm:group md:group lg:relative  xl:relative  2xl:relative"
                                    : ""
                                    }`}
                                onMouseEnter={toggleDelayDropdown}
                                onMouseLeave={toggleDelayDropdown}
                            >
                                <a
                                    href="#"
                                    className="block py-2 flex items-center px-2 p-5 hover:bg-red-600 hover:text-white text-black"
                                >
                                    Exposer
                                    <svg
                                        className="w-2.5 h-2.5 ml-2.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </a>
                                <div
                                    className={` z-10 bg- ${isDelayDropdownOpen ? "block" : "hidden"
                                        }`}
                                >
                                    <ul className="lg:absolute   xl:absolute   2xl:absolute py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <Link
                                            onClick={closeBurgerMenu}
                                            href="/expose"
                                            className={`block px-3 lg:w-52 xl:w-52 2xl:w-52 py-2 bg-red-600 hover:bg-red-400 hover:text-white ${isScrolled
                                                ? "text-white hover:bg-red-400 bg-red-600"
                                                : "text-white"
                                                }`}
                                        >
                                            Qui Expose ?
                                        </Link>
                                        <Link
                                            onClick={closeBurgerMenu}
                                            href="/formulaire-exposant"
                                            className={`block lg:w-52 xl:w-52 2xl:w-52 px-4 py-2 bg-red-600 hover:bg-red-400 hover:text-white ${isScrolled
                                                ? "text-white hover:bg-red-400 bg-red-600"
                                                : "text-white"
                                                }`}
                                        >
                                            Formulaire de participation
                                        </Link>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link
                                    rel="preload"
                                    href="/visiter"
                                    className="block py-2 px-2 hover:bg-red-600 p-5 hover:text-white text-black"
                                    aria-current="page"
                                    onClick={closeBurgerMenu}
                                >
                                    Visiter
                                </Link>
                            </li>
                            <li>
                                <Link
                                    rel="preload"
                                    href="/programme"
                                    className="block py-2 px-2 hover:bg-red-600 p-5 hover:text-white text-black"
                                    aria-current="page"
                                    onClick={closeBurgerMenu}
                                >
                                    Programme
                                </Link>
                            </li>
                            <li>
                                <Link
                                    rel="preload"
                                    href="/info"
                                    className="block py-2 px-2 hover:bg-red-600 p-5 hover:text-white text-black"
                                    aria-current="page"
                                    onClick={closeBurgerMenu}
                                >
                                    Infos pratiques
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navigation;
