import React from "react"


const Navbar = ({}) => (
      <nav className="root bg-background flex flex-row justify-end border-gray-200 px-8 sm:px-16 py-5 dark:bg-gray-800">
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="#" ><img src='/Medium-Logo-White.svg'></img></a>
            </li>
            <li>
              <a href="#" ><img src='/Twitter-Logo-White.svg'></img></a>
            </li>
            <li>
              <a href="#" ><img src='/Discord-Logo-White.svg'></img></a>
            </li>
          </ul>
        </div>
    </nav>
)    ;

export default Navbar