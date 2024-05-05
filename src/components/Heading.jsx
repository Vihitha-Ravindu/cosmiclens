import React from 'react'

const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
]
const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
]

function Heading() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-20">
            <img
                src="iss.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />


            <p className="text-8xl font-bold  text-white text-left ml-20">CosmicLens</p>
            <p className="mt-6 text-2xl leading-8 text-white text-left ml-20">
                Explore the wonders of the cosmos, where every star has a story and every planet holds a mystery.
            </p>
            <p className="mt-1 text-2xl text-white text-left ml-20">Uncover the boundless wonders with NASA's galactic data.</p>



        </div>

    )
}

export default Heading