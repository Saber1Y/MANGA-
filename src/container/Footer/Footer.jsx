import React from 'react'
import LogoWhite from '../../assets/logo-white.svg'



const Footer = () => {
  return (
    <div className='bg-verydarkblue'>
       <div
        className="container flex flex-col-reverse justify-between px-6 mx-auto space-y-8 md:flex-row md:space-y-0"
      >
        <div
          className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
        >
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          <img src={LogoWhite} alt="manga" className="h-16 pt-5" />
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">Home</a>
            <a href="#" className="hover:text-brightRed">Pricing</a>
            <a href="#" className="hover:text-brightRed">Products</a>
            <a href="#" className="hover:text-brightRed">About</a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">Careers</a>
            <a href="#" className="hover:text-brightRed">Community</a>
            <a href="#" className="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3 mt-5">
              <input
                type="text"
                className="flex-1 px-10 h-10 rounded full focus:outline-none"
                placeholder="Updated in your Inbox"
              />
              <button
                className="px-6 text-white rounded full bg-brightRed hover:bg-brightRed focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
