import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext/authContext'

function LandingPg() {
  const { userLoggedIn } = useAuth()
  return (
    <>
      <div style={{ backgroundImage: "url('/space.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
        <div className="min-h-screen bg-center flex flex-col items-center justify-center" >

          <div className="relative z-10 text-center text-white">
            <p className="text-9xl md:text-8xl font-bold mb-4">Welcome to CosmicLens</p>
            <p className="text-lg md:text-2xl mb-6">Explore the wonders of the cosmos, where every star has a story and every planet holds a mystery.</p>
            <p className="text-lg md:text-2xl mb-6">Discover the beauty of the universe with our curated collection of images and information from NASA.</p>
            <p className="text-lg md:text-2xl mb-6">Please Login or Register to continue.</p>
            <div className="flex flex-col justify-center md:flex-row gap-4">
              <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full text-lg md:text-xl">Login In</a>
              <a href="/register" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full text-lg md:text-xl">Register</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LandingPg