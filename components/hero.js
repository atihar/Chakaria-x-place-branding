import React from 'react'

function Hero() {
  return (
    <div style={{backgroundImage : "url('assets/background-ariful.jpg')"}} className="bg-cover">
       <div className="py-6 md:py-48 px-4 md:px-32 h-screen md:grid grid-cols-2">
            <div className='mx-auto py-4 text-white'>
                <p className='text-lg'>project</p>
                <h1 className='text-5xl md:text-9xl font-bold'>Chakaria</h1>
                <p className='py-4'>A superb place with natural landscapes located 60km ahead of coxs-bazar. The hills of bandarban-alikadam and the Bay of Bengal has surrounded this area of 643.46 km2. Once there was a mangrove forest named Chakaria Sunderban here. But now it is no more. But yet this place has a lot of offerings to do and its turning 
                into a popular tourist destination.</p>
                <button className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-8 rounded-full">Explore</button>
            </div>
            <div className='grid md:grid-cols-2 space-x-0 md:space-x-4 m-0 md:m-8'>
                <div className='space-y-4'>
                    <div className='bg-orange-400 text-white p-4 md:p-16 rounded-xl shadow'>Stay</div>
                    <div className='bg-red-400 text-white p-4 md:p-16 rounded-xl shadow'>Eat</div>
                </div>
                <div className='space-y-4 mt-4 md:mt-0'>
                    <div className='bg-green-400 text-white p-4 md:p-16  rounded-xl shadow'>See</div>
                    <div className='bg-pink-400 text-white p-4 md:p-16  rounded-xl shadow'>Map</div>
                </div>
            </div> 
       </div>
    </div>
  )
}

export default Hero