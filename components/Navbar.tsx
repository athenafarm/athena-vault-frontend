import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = ({}) => (
  <nav className="root flex flex-row items-center justify-end border-gray-200 px-12 py-3 lg:px-12">
    <div className="w-full sm:block sm:w-auto" id="mobile-menu">
      <ul className="mt-4 flex items-center justify-between sm:mt-0 sm:flex-row sm:space-x-8 sm:text-sm sm:font-medium">
        <li>
          <Link href="#">
            <a>
              <Image src="/Medium-Logo-White.svg" width={40} height={40} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <Image src="/Twitter-Logo-White.svg" width={40} height={40} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <Image src="/Discord-Logo-White.svg" width={40} height={40} />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
