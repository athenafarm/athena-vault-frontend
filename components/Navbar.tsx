import Link from "next/link";
import Image from 'next/image'
import React from "react"


const Navbar = ({}) => (
      <nav className="root bg-background flex flex-row justify-end border-gray-200 px-12 lg:px-12 py-5 dark:bg-gray-800">
        <div className="w-full sm:block sm:w-auto" id="mobile-menu">
          <ul className="flex mt-4 sm:flex-row space-x-4 sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium">
            <li>
              <Link href="#">
                <a>
                  <Image src='/Medium-Logo-White.svg' width={50} height={50}/>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image src='/Twitter-Logo-White.svg' width={50} height={50}/>
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <Image src='/Discord-Logo-White.svg' width={50} height={50}/>
                </a>
              </Link>
            </li>
          </ul>
        </div>
    </nav>
)    ;

export default Navbar