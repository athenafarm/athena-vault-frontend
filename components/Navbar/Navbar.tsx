import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Nav, LinkContainer, Ul, Li } from './styled/components'

const Navbar = ({}) => (
  <Nav>
    <LinkContainer id="mobile-menu">
      <Ul>
        <Li>
          <Link href="#">
            <a>
              <Image src="/Medium-Logo-White.svg" width={40} height={40} />
            </a>
          </Link>
        </Li>
        <Li>
          <Link href="#">
            <a>
              <Image src="/Twitter-Logo-White.svg" width={40} height={40} />
            </a>
          </Link>
        </Li>
        <Li>
          <Link href="#">
            <a>
              <Image src="/Discord-Logo-White.svg" width={40} height={40} />
            </a>
          </Link>
        </Li>
      </Ul>
    </LinkContainer>
  </Nav>
)

export default Navbar
