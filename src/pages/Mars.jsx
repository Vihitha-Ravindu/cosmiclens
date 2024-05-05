import React from 'react'
import { useState, useEffect } from 'react'
import Heading from '../components/Heading'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function Mars() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10

  useEffect(() => {
    fetchPhotosByPage(currentPage)
  }, [currentPage])

  //fucntion to fetch data from api
  const fetchPhotosByPage = async (page) => {
    const NASA_KEY = process.env.REACT_APP_NASA_API_KEY
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_KEY}&page=${page}`;

    try {
      setLoading(true)
      const res = await fetch(url)//fetching data
      const data = await res.json()
      setPhotos(data.photos)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  };

  //changing the page number fucntion
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  return (
    <>
      <Heading />
      <Navigation />
      <div className="relative mt-8 font-serif bg-gradient-to-r from-transparent via-blue-400 to-transparent p-6">
        <h2 className="text-5xl font-bold text-center text-white">Mars Rover Images</h2>
      </div>
      <hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <div className="container mx-auto">
        <div className="flex flex-col items-center mt-10">
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <svg
                className="animate-spin h-10 w-10 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm16-8a7.962 7.962 0 01-4 6.928V20c4.418 0 8-3.582 8-8h-4zM12 4c-2.206 0-4 1.794-4 4h4V4z"
                ></path>
              </svg>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {photos.map((photo) => (
                  <div key={photo.id}>
                    <img src={photo.img_src} alt={photo.id} className="w-full mb-2" />
                    <p className="text-gray-600">Earth Date: {photo.earth_date}</p>
                    <p className="text-gray-600">Camera: {photo.camera.full_name}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <nav className="inline-flex">
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageClick(index + 1)}
                      className={`px-4 py-2 mr-2 bg-gray-200 hover:bg-gray-300 rounded-full focus:outline-none ${currentPage === index + 1 ? 'bg-gray-400' : ''
                        }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
      <hr
        className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Footer />
    </>
  );
}

export default Mars
