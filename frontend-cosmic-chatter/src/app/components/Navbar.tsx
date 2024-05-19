import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="text-3xl font-sans text-white">
              Cosmic Chatter
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
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
