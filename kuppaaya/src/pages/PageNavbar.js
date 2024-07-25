

import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Blogo from '../assets/website/kuppaya.png';
import { Link, useLocation } from "react-router-dom";
import { useLikedProducts } from '../context/LikedProductsContext';

const PageMenus = [
    { id: 1, name: "Overview", link: "/page" },
    { id: 2, name: "Products", link: "/page/products" },
    { id: 3, name: "About", link: "/page/about" },
    { id: 4, name: "Contact", link: "/page/contact" },
];

const PageNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { likedProducts } = useLikedProducts();
    const location = useLocation();

    return (
        <nav className="bg-gray-100 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none lg:hidden mr-2"
                        >
                            {isOpen ? (
                                <AiOutlineClose className="h-6 w-6 sm:h-8 sm:w-8" />
                            ) : (
                                <AiOutlineMenu className="h-6 w-6 sm:h-8 sm:w-8" />
                            )}
                        </button>

                        <div className="flex items-center h-12 sm:h-16">
                            <Link to="/" className="flex items-center">
                                <img src={Blogo} alt="" className="w-20 sm:w-24 md:h-24 md:w-auto" />
                            </Link>
                        </div>
                    </div>

                    <ul className="hidden lg:flex space-x-16">
                        {PageMenus.map((item) => (
                            <li key={item.id}>
                                <Link 
                                    to={item.link} 
                                    className={`text-lg no-underline hover:text-blue-600 transition-colors ${
                                        location.pathname === item.link ? 'text-blue-600 font-semibold' : 'text-gray-700'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center space-x-8">
                        <Link to="/liked-products" className="relative hover:opacity-75 transition-opacity">
                            <AiOutlineHeart className="h-6 w-6 text-gray-700" />
                            {likedProducts.length > 0 && (
                                <span className="absolute -top-1 -right-1 block h-4 w-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                                    {likedProducts.length}
                                </span>
                            )}
                        </Link>
                        <button className="hover:opacity-75 transition-opacity">
                            <AiOutlineSearch className="h-6 w-6 text-gray-700" />
                        </button>
                        <button className="hover:opacity-75 transition-opacity">
                            <AiOutlineUser className="h-6 w-6 text-gray-700" />
                        </button>
                        <button className="hover:opacity-75 transition-opacity">
                            <AiOutlineShoppingCart className="h-6 w-6 text-gray-700" />
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="lg:hidden pb-6">
                        <ul className="flex flex-col space-y-4">
                            {PageMenus.map((item) => (
                                <li key={item.id}>
                                    <Link 
                                        to={item.link} 
                                        className={`block text-base sm:text-lg no-underline hover:text-blue-600 transition-colors ${
                                            location.pathname === item.link ? 'text-blue-600 font-semibold' : 'text-gray-700'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default PageNavbar;