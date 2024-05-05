import React, { useState, useEffect } from 'react'
import Heading from '../components/Heading';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function NeoWs() {
    const [neoData, setNeoData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchNeoData();
    }, []);

    //fucntion for data fething
    const fetchNeoData = async () => {
        const NASA_KEY = process.env.REACT_APP_NASA_API_KEY;
        const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${NASA_KEY}`
        try {
            setLoading(true);
            const response = await fetch(url)
            const data = await response.json()
            console.log('NEO Data\n', data)//logging the data in console
            setNeoData(data.near_earth_objects)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching NEO data:', error)
            setLoading(false)
        }
    };

    return (
        <>
            <Heading />
            <Navigation />
            <div className="relative mt-8 font-serif bg-gradient-to-r from-transparent via-blue-400 to-transparent p-6">
                <h2 className="text-5xl font-bold text-center text-white">Near Earth Astroids</h2>
            </div>
            <hr
                className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            <div className="container mx-auto">
                
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {neoData.map((neo) => (
                            <div key={neo.id} className="border rounded p-4 shadow-md bg-gradient-to-r from-cyan-100 to-cyan-700">
                                <h2 className="text-xl font-semibold mb-2">{neo.name}</h2>
                                <p className="text-gray-900">ID: {neo.id}</p>
                                <p className="text-gray-900">Close Approach Date: {neo.close_approach_data[0].close_approach_date_full}</p>
                                <p className="text-gray-900">Miss Distance: {neo.close_approach_data[0].miss_distance.kilometers} km</p>
                                <p className="text-gray-900">Estimated Diameter: {neo.estimated_diameter.kilometers.estimated_diameter_max} km</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <hr
                className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            <Footer />
        </>
    );
}

export default NeoWs;
