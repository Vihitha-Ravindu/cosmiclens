import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <>
            <div className="bg-blue-900 flex items-center justify-center py-2">
                <div className="flex justify-between max-w-4xl w-full">
                    <button className="border-b border-navy-blue-light px-4 py-2 text-white hover:text-gray-200"><Link to="/home">Home</Link></button>
                    <div className="border-r border-navy-blue-light h-6"></div>
                    <button className="border-b border-navy-blue-light px-4 py-2 text-white hover:text-gray-200"><Link to="/apod">APOD</Link></button>
                    <div className="border-r border-navy-blue-light h-6"></div>
                    <button className="border-b border-navy-blue-light px-4 py-2 text-white hover:text-gray-200"><Link to="/mars">Mars Pics</Link></button>
                    <div className="border-r border-navy-blue-light h-6"></div>
                    <button className="border-b border-navy-blue-light px-4 py-2 text-white hover:text-gray-200"><Link to="/nasaImage">Nasa pics</Link></button>
                    <div className="border-r border-navy-blue-light h-6"></div>
                    <button className="border-b border-navy-blue-light px-4 py-2 text-white hover:text-gray-200"><Link to="/neows">Near Earth Object</Link></button>
                </div>
            </div>
           
        </>
    )
}

export default Navigation