import React from 'react'
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='fixed w-full px-4 sm:px-10 lg:px-40 py-7 bottom-0 flex flex-col sm:flex-row justify-center z-20  text-white'>
          
        <div className="flex items-center mx-auto sm:mx-4 space-x-2 text-lg font-semibold">
            <AiOutlineInstagram className='h-6 w-6' /> <a href="https://www.instagram.com/3ambrandcommunication/" target="_blank" rel="noopener noreferrer" className='truncate txt txt-link hover:text-gray-400 after:bg-white'><span>3AM Brand Communication</span></a>
        </div>
        <div className="flex items-center mx-auto sm:mx-4 space-x-2 text-lg font-semibold">
            <AiOutlineFacebook className='h-6 w-6' /> <a href="https://www.facebook.com/3ambrandcommunication" target="_blank" rel="noopener noreferrer" className='truncate txt txt-link hover:text-gray-400 after:bg-white'><span>3AM Brand Communication</span></a>
        </div>
          
    </div>
  )
}
