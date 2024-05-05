import { useState, useEffect } from "react"
import Heading from "../components/Heading"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

function NasaImage() {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchNasaImages()
    }, [])

    //data fetching fucntion 
    const fetchNasaImages = async () => {
        setLoading(true)
        try {
            const response = await fetch(
                'https://images-api.nasa.gov/search?q=space&media_type=image'
            );
            const data = await response.json()
            setImages(data.collection.items)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching images:', error);
            setLoading(false)
        }
    };

    return (
        <>
            <Heading />
            <Navigation />
            <div className="relative mt-8 font-serif bg-gradient-to-r from-transparent via-blue-400 to-transparent p-6">
                <h2 className="text-5xl font-bold text-center text-white">NASA Image library</h2>
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
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {images.map((image) => (
                            <div key={image.data[0].nasa_id} className="flex flex-col">
                                <img
                                    src={image.links[0].href}
                                    alt={image.data[0].title}
                                    className="w-full h-auto mb-2"
                                />
                                <p className="text-gray-600">{image.data[0].title}</p>
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

export default NasaImage