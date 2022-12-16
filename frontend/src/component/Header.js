/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react"


const Header = () => {
const [toggle,setToggle] = useState(true);

  

  const handleClick=()=>{
    setToggle(!toggle);
  }




  return (
    <header className='bg-black'>
      <nav className='relative container mx-auto p-6'>
        {/* flex conatiner */}
        <div className='flex item-center justify-between'>
          <div className='pt-2'>
            <div className='text-3xl text-white'>Land</div>
          </div>

          <div className='hidden  space-x-6 md:flex'>
            <a href='#' className="text-decoration-none text-white text-2xl pt-2 ">Home</a>
            <a href='#' className="text-decoration-none text-white text-2xl pt-2 ">About</a>
            <a href='#' className="text-decoration-none text-white text-2xl pt-2 ">Log In</a>
            <a href='#' className="text-decoration-none text-white text-2xl pt-2 ">Sign Up</a>
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
            className='absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-3 right-3 drop-shadow-md'>
            <a
              href='#'
              className='text-decoration-none text-black text-2xl font-normal '>
              Home
            </a>
            <a
              href='#'
              className='text-decoration-none text-black text-2xl font-normal'>
              About
            </a>
            <a
              href='#'
              className='text-decoration-none text-black text-2xl font-normal'>
              Log In
            </a>
            <a
              href='#'
              className='text-decoration-none text-black text-2xl font-normal'>
              Sign Up
            </a>
          </div>
        </div>: <></>}
      </nav>
    </header>
  )
}

export default Header
