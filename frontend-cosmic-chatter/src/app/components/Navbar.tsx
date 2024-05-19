import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-10 right-[5%] z-50 bg-transparent">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
                    <div className="hidden w-full md:block md:w-auto ml-auto">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 text-xl">
                            <li>
                                <Link href={"/"} className="text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={"/work"} className="text-white">
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link href={"/forum"} className="text-white">
                                    Forum
                                </Link>
                            </li>
                            <li>
                                <Link href={"/profile"} className="text-white">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link href={"/contact"} className="text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
