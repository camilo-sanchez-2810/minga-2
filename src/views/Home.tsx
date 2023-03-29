import React from 'react'

function Home() {
  return (
    <div>
      <div className="home-header bg-center bg-cover h-screen md:h-[70vh] md:bg-top flex justify-center items-center text-white">
        <div className='w-[80%] max-w-lg text-center'>
          <h1 className='font-bold text-3xl'>Your favorite comic book store</h1>
          <p className='text-sm leading-4 mt-4'>From classics to novelties, we have everything you need to immerse yourself in your favorite universes. Explore our catalog and live the adventure of your life.</p>
        </div>
      </div>
      {/* Last comic uploaded or most popular */}
      <div className="home-body">
        {/* TODO: create body from figma styles */}
      </div>
    </div>
  )
}

export default Home