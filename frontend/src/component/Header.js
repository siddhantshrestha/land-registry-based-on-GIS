/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react"
import { Link } from "react-router-dom"


const Header = () => {
const [toggle,setToggle] = useState(false);

  

  const handleClick=()=>{
    setToggle(!toggle);
  }




  return (
    <header className='bg-black sticky top-0'>
      <nav className='relative container  top-0 mx-auto px-6 py-3'>
        {/* flex container */}
        <div className='flex item-center justify-between'>
          <div className='py-2'>
            <div className='text-2xl text-white'>
            <Link to='/' className="text-decoration-none text-white text-2xl pt-2 ">Land Registry</Link>

            </div>
          </div>

          <div className='hidden space-x-6 md:flex'>
            <Link to='/' className="text-decoration-none text-white text-lg pt-2 ">Home</Link>
            <Link to='/about' className="text-decoration-none text-white text-lg pt-2 ">About</Link>
            <Link to='/login' className="text-decoration-none text-white text-lg pt-2 ">Log In</Link>
            <Link to='/signup' className="text-decoration-none text-white text-lg pt-2 ">Sign Up</Link>
          </div>

          <button onClick={handleClick}
            id={toggle? 'menu-btn': null}
            className='block mt-3  hamburger md:hidden focus:outline-none'>
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        </div>

        {/* Mobile Menu */}
       {toggle ?  <div className='md:hidden'>
          <div
            id='menu'
            className='absolute flex flex-col items-center self-end py-8 mt-4 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-3 right-3 drop-shadow-md'>
            <Link to='/'
              className='text-decoration-none text-black text-2xl font-normal '>
              Home
            </Link>
            <Link to='/about'
              className='text-decoration-none text-black text-2xl font-normal'>
              About
            </Link>
            <Link to='/login'
              className='text-decoration-none text-black text-2xl font-normal'>
              Log In
            </Link>
            <Link to='/signup'
              className='text-decoration-none text-black text-2xl font-normal'>
              Sign Up
            </Link>
          </div>
        </div>: <></>}
      </nav>
    </header>
  )
}

export default Header
