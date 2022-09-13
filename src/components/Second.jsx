import React from 'react'

const Second = () => {
  return (
    <>
      <div className="h-screen w-screen flex justify-center bg-black text-white">
        <div className="m-auto text-center">
            <h2 className='font-bold text-6xl'>WE'RE Coming Soon</h2>
            
            <p className="py-4 text-xl">Join our newsletter &amp; keep up with us</p>
            {/* <div class="flex justify-center border-2 py-2 px-6 bg-white rounded-xl">
                  <input type="text" placeholder="Your email address" class="w-full px-6 py-2  outline-none text-gray-700 text-lg" />
                  <button type="submit" class="bg-green-500 text-green-50 font-semibold px-6 py-2 rounded-xl text-md">Send</button>
                </div> */}
                <div class="flex justify-center mx-auto rounded bg-white w-[30rem]">
                  <input
                    type="email"
                    class="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
                    placeholder="search"
                  />
                  <button type="button" class="m-2 rounded px-4 py-2 font-semibold text-gray-100 bg-black">Subscribe</button>
                </div>
        </div>
      </div>
    </>
  )
}

export default Second