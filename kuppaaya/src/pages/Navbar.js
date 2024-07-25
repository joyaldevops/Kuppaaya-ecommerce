import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Blogo from '../assets/website/kuppaya.png';
import { Link, useLocation } from "react-router-dom";
import { useLikedProducts } from '../context/LikedProductsContext';

const Menus = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Woman", link: "/women" },
    { id: 3, name: "Kids", link: "/kids" },
    { id: 4, name: "Beauty", link: "/#beauty" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { likedProducts } = useLikedProducts();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Close the menu when the location changes
        setIsOpen(false);
    }, [location]);

    const isFixed = !location.pathname.includes('/details');

    return (
        <nav className={`transition-all duration-200 ${isFixed ? `fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white bg-opacity-40 text-black shadow-md' : 'bg-transparent text-white'}` : ''}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-2 sm:py-2">
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

                        <div className="flex items-center h-12 sm:h-24">
                            <Link to="/" className="flex items-center">
                            <img src={Blogo} alt="" className="w-24 sm:w-32 md:h-32 md:w-auto" />                            </Link>
                        </div>
                    </div>

                    <ul className="hidden lg:flex space-x-28">
                        {Menus.map((item) => (
                            <li key={item.id}>
                                <Link to={item.link} className="text-lg no-underline hover:text-gray-800 transition-colors">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex items-center space-x-12">
                        <Link to="/liked-products" className="relative hover:opacity-75 transition-opacity">
                            <AiOutlineHeart className="h-7 w-7" />
                            {likedProducts.length > 0 && (
                                <span className="absolute top-0 right-0 block h-5 w-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                                    {likedProducts.length}
                                </span>
                            )}
                        </Link>
                        <button className="hover:opacity-75 transition-opacity">
                            <AiOutlineSearch className="h-7 w-7" />
                        </button>
                        <button className="hover:opacity-75 transition-opacity">
                            <AiOutlineUser className="h-7 w-7" />
                        </button>
                        <button className="hover:opacity-75 transition-opacity">
                            <AiOutlineShoppingCart className="h-7 w-7" />
                        </button>
                    </div>

                    <div className="flex lg:hidden items-center space-x-4">
                        <Link to="/liked-products" className="relative hover:opacity-75 transition-opacity">
                            <AiOutlineHeart className="h-6 w-6 sm:h-7 sm:w-7" />
                            {likedProducts.length > 0 && (
                                <span className="absolute -top-1 -right-1 block h-4 w-4 sm:h-5 sm:w-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                                    {likedProducts.length}
                                </span>
                            )}
                        </Link>

                        <button className="hover:opacity-75 transition-opacity">
                            <AiOutlineSearch className="h-6 w-6 sm:h-7 sm:w-7" />
                        </button>

                        <button className="hover:opacity-75 transition-opacity">
                            <AiOutlineUser className="h-6 w-6 sm:h-7 sm:w-7" />
                        </button>

                        <button className="hover:opacity-75 transition-opacity">
                            <AiOutlineShoppingCart className="h-6 w-6 sm:h-7 sm:w-7" />
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="lg:hidden pb-6">
                        <ul className="flex flex-col space-y-4">
                            {Menus.map((item) => (
                                <li key={item.id}>
                                    <Link to={item.link} className="block text-base sm:text-lg no-underline hover:text-gray-300 transition-colors">
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

export default Navbar;