import PropTypes from "prop-types";
import Tab from '../components/Tab'
import Image from 'next/image'
import { NextPage } from "next";


// Props interface
interface Props {
    selectedTab: string;
    setSelectedTab: Function;
  }

const Header: NextPage<Props> = ({selectedTab, setSelectedTab}) => (
    <>
    <nav className="root bg-header flex flex-row items-center border-gray-200 md:mx-12 lg:mx-12 md:mt-5 lg:mt-5 px-2 md:px-12 lg:px-12  py-5">
        <Image height="50px" width='50px' src='/logo.svg'/>
        <div className="align-middle text-xs md:text-m lg:text-xl px-8 lg:px-24 text-white">
          <Tab content='Home' setSelectedTab={setSelectedTab} isSelected={selectedTab == 'Home'} />
          <Tab content='Vaults' setSelectedTab={setSelectedTab} isSelected={selectedTab == 'Vaults'} />
          <Tab content='Docs' setSelectedTab={setSelectedTab} isSelected={selectedTab == 'Docs'} />

        </div>
        <button className="ml-auto w-fit font-zen-dots text-primary text-xs lg:text-m border border-primary rounded-xl background-transparent py-4 px-4" type="button">
          Connect
        </button>
      </nav>
      <div className='root bg-banner text-white flex flex-row items-center border-gray-200 md:mx-12 lg:mx-12 md:mb-5 lg:mb-5 px-2 md:px-12 lg:px-12  py-2'>
        this is a beta product, use at your own risk
      </div>
      </>
    
  
)

Header.propTypes = {
    selectedTab: PropTypes.string.isRequired,
    setSelectedTab: PropTypes.func.isRequired,
  };

export default Header