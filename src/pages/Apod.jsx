import { useEffect, useState } from 'react'
import Heading from '../components/Heading';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


function Apod() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        fetchData(today); // Initially load data for today
    }, []);

    //methode to fetch data from the api
    const fetchData = async (date) => {
        const NASA_KEY = process.env.REACT_APP_NASA_API_KEY;//geting the api key from env file
        const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${date}`;

        try {
            setLoading(true);
            const res = await fetch(url);//fetching data from the api endpoint
            const apiData = await res.json();
            setData(apiData);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    };

    //fucntion to change the data according to the date
    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        fetchData(e.target.value);
    };

    return (
        <>

            <Heading />
            <Navigation />

            <div className="relative mt-4 font-serif bg-gradient-to-r from-transparent via-blue-400 to-transparent p-6">
                <h2 className="text-5xl font-bold text-center text-white">Astronomy Picture of the Day</h2>
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
                        data && (
                            <>
                                <h1 className="text-5xl font-bold mb-4 font-mono" >{data.title}</h1>
                                <div className="bg-gray-300 mb-3 p-2 rounded-lg shadow-md flex items-center">
                                    <p className="flex-grow mr-2 text-gray-700">Select a date for APOD:</p>
                                    <input
                                        type="date"
                                        value={selectedDate || today}
                                        min="1995-06-16"
                                        max={today}
                                        onChange={handleDateChange}
                                        className="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Select date"
                                    />
                                </div>
                                <img src={data.hdurl} alt="mars-demo-pic" className="mb-4" />
                                <div className="text-center mt-4">
                                    <p className="text-lg font-bold text-gray-600 mb-2">Date: {data.date}</p>
                                </div>
                                <div className="bg-blue-300 p-4 rounded">
                                    <p className="text-justify text-black">{data.explanation}</p>
                                </div>
                            </>
                        )
                    )}
                </div>
            </div>
            <hr
                className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />

            <Footer />
        </>
    )
}

export default Apod