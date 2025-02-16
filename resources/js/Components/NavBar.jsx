import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuctionsOpen, setIsAuctionsOpen] = useState(false); // Dropdown for Auctions

    return (
        <>
            <nav className="max-w-[1360px] fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 bg-white dark:bg-neutral-900 pt-3">
                <div className="flex items-center justify-between mx-auto px-4">
                    {/* Left Section: Logo + Links */}
                    <div className="flex items-center space-x-6">
                        <a href="/" className="text-2xl font-bold text-black dark:text-white">
                            Newman & Co
                        </a>

                        {/* Desktop Links (Hidden on Mobile) */}
                        <div className="hidden md:flex space-x-6 relative">
                            {/* Auctions Dropdown */}
                            <div className="relative group">
                                <button
                                    className="text-lg font-bold text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
                                    onClick={() => setIsAuctionsOpen(!isAuctionsOpen)} // Toggle on click for mobile
                                >
                                    Auctions
                                </button>

                                {/* Dropdown Menu (Stays Visible While Hovering) */}
                                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-md shadow-md py-2 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                    <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-gray-200 dark:text-neutral-300 dark:hover:bg-neutral-700">
                                        Live Auctions
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-gray-200 dark:text-neutral-300 dark:hover:bg-neutral-700">
                                        Past Results
                                    </a>
                                </div>
                            </div>

                            <a href="#" className="text-lg font-bold text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">
                                Sell a Car
                            </a>
                        </div>
                    </div>

                    {/* Right Section: Input + Button (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Search for cars"
                            className="text-neutral-700 placeholder-neutral-700 dark:placeholder-neutral-400 hover:placeholder-neutral-900 dark:text-neutral-400 dark:hover:placeholder-neutral-200 bg-gray-200 dark:bg-neutral-800 px-4 py-2 rounded-md w-64 border-none border-transparent focus:border-transparent focus:ring-0"
                        />
                        <button className="bg-blue-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-blue-500">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-black dark:text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? "X" : "☰"}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-neutral-900 shadow-md flex flex-col items-center space-y-4 py-4">
                        {/* Mobile Auctions Dropdown */}
                        <div>
                            <button
                                className="text-lg font-bold text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 flex items-center"
                                onClick={() => setIsAuctionsOpen(!isAuctionsOpen)}
                            >
                                Auctions
                            </button>

                            {isAuctionsOpen && (
                                <div className="mt-2 w-48 bg-white dark:bg-neutral-800 rounded-md shadow-md py-2">
                                    <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-gray-200 dark:text-neutral-300 dark:hover:bg-neutral-700">
                                        Live Auctions
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-gray-200 dark:text-neutral-300 dark:hover:bg-neutral-700">
                                        Past Results
                                    </a>
                                </div>
                            )}
                        </div>

                        <a href="#" className="text-lg font-bold text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">
                            Sell a Car
                        </a>
                        <input
                            type="text"
                            placeholder="Search for cars"
                            className="text-neutral-700 placeholder-neutral-700 dark:placeholder-neutral-400 hover:placeholder-neutral-900 dark:text-neutral-400 dark:hover:placeholder-neutral-200 bg-gray-200 dark:bg-neutral-800 px-4 py-2 rounded-md w-4/5 border-none border-transparent focus:border-transparent focus:ring-0"
                        />
                        <button className="bg-blue-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-blue-500">
                            Sign Up
                        </button>
                    </div>
                )}

                <hr className="h-px mt-3 mb-0 bg-neutral-200 border-0 dark:bg-neutral-700" />
            </nav>
        </>
    );
}
