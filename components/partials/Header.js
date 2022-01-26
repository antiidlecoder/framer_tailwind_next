import React from 'react';
import Link from "next/link";
import { motion, useViewportScroll, motionValue } from "framer-motion"


function Header() {
    const { scrollYProgress } = useViewportScroll()

    const contentOffsetY = motionValue(0)

    function TrackScroll() {
        return { contentOffsetY: contentOffsetY }
    }

    function template({ rotate, x }) {
        return `rotate(${rotate}) translateX(${x})`
    }

    const variants = {
        inital: {
            rotate: -45
        },
        animate: {
            rotate: 0
        }
    }

    return (
        <header>
            <div>
                <div className="container relative py-6 sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <Link href="/">
                                    <a href="#">
                                        <span className="sr-only">Workflow</span>

                                        <div className="h-8 w-auto sm:h-10">
                                            <motion.svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="40" height="40"
                                                viewBox="0 0 122 122"
                                                className="fixed z-30"
                                                transformTemplate={template}
                                                animate={{ rotate: 0 }}
                                                style={{ rotate: 250, transformOrigin: "0" }}
                                            >
                                                <g id="Gruppe_2" data-name="Gruppe 2" transform="translate(-220 -163)">
                                                    <g id="Gruppe_1" data-name="Gruppe 1">
                                                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="61" cy="61" r="61" transform="translate(220 163)" fill="#2563eb" />
                                                        <circle id="Ellipse_2" data-name="Ellipse 2" cx="19" cy="19" r="19" transform="translate(262 205)" fill="#fff" />
                                                    </g>
                                                    <line id="Linie_1" data-name="Linie 1" x2="35" y2="28" transform="translate(293.5 235.5)" fill="none" stroke="#fff" strokeWidth="4" />
                                                </g>
                                            </motion.svg>
                                        </div>
                                    </a>
                                </Link>
                                <div className="-mr-2 flex items-center md:hidden">
                                    <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                        <span className="sr-only">Open main menu</span>

                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                            <Link href="/about"><a href="#" className="font-medium text-gray-500 hover:text-gray-900">Product</a></Link>

                            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Features</a>

                            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>

                            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Company</a>

                            <a href="#" className="font-medium text-blue-600 hover:text-blue-700">Log in</a>
                        </div>
                    </nav>
                </div>

                {/*
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        */}
                <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                <Link href="/">
                                    <div className="h-8 w-auto sm:h-10">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 122 122">
                                            <g id="Gruppe_2" data-name="Gruppe 2" transform="translate(-220 -163)">
                                                <g id="Gruppe_1" data-name="Gruppe 1">
                                                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="61" cy="61" r="61" transform="translate(220 163)" fill="#2563eb" />
                                                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="19" cy="19" r="19" transform="translate(262 205)" fill="#fff" />
                                                </g>
                                                <line id="Linie_1" data-name="Linie 1" x2="35" y2="28" transform="translate(293.5 235.5)" fill="none" stroke="#fff" strokeWidth="4" />
                                            </g>
                                        </svg>

                                    </div>
                                </Link>
                            </div>
                            <div className="-mr-2">
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close main menu</span>

                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Product</a>

                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</a>

                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Marketplace</a>

                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Company</a>
                        </div>
                        <a href="#" className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100">
                            Log in
                        </a>
                    </div>
                </div>
            </div >
        </header >
    )
}

export default Header;
