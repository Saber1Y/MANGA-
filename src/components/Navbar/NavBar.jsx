import React from 'react'
// import { Illustration, logo } from '../../constants/images';
import Logo from '../../assets/logo.svg'


const NavBar = () => {
  return (
  <nav className='relative container mx-auto p-4'>
    <div className="flex items-center justify-between">
       <div className="pt-3">
          <img src={Logo} alt="" />
       </div>
       <div className="hidden space-x-6 md:flex">
       <a href="#" className="hover:text-orange-600">Pricing</a>
       <a href="#" className="hover:text-orange-600">Product</a>
       <a href="#" className="hover:text-orange-600">About Us</a>
       <a href="#" className="hover:text-orange-600">Contact</a>
       <a href="#" className="hover:text-orange-600">Community</a>
       </div>
         <button type='button' className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">Get Started</button>
    </div>
  </nav>
  )
}

export default NavBar 
