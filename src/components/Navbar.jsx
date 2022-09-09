import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full px-80 py-7 top-0 flex flex-row justify-between z-10 bg-black bg-opacity-30 filter backdrop-filter backdrop-blur-lg text-white">
        <div>
            <img src="https://3ambrand.com/assets/img/logo.svg" alt="" />
        </div>
        <div>
            <a href="tel:123456789" className='txt txt-link hover:text-gray-400 after:bg-white'>+383 12 345 678 </a> <span className='mx-2'>|</span> <a href="tel:123456789"  className='txt txt-link hover:text-gray-400 after:bg-white'>+383 12 345 678</a>
        </div>
      </nav>  
    </>
  )
}
