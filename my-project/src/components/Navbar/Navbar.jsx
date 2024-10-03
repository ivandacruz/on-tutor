// import React from 'react'
import { NavbarMenu } from "../../mockData/data";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="container flex  justify-between items-center py-6">
                    {/* logo section */}
                    <div className="text-2xl flex items-center gap-2 font-bold">
                        <MdComputer className="text-3xl text-secondary" />
                        <p>On-Tutor</p>
                    </div>

                    {/* menu section */}
                    <div className="hidden lg:block">
                        <ul>
                            {NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a 
                                            href={item.link}
                                            className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>


                    {/* cta button section */}
                    {/* mobile hamburger menu section */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
