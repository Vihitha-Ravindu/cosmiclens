import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext/authContext'
import { doSignOut } from '../firebase/auth'

function Header() {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        
        <nav className="flex items-center h-12 justify-between px-6 py-2 bg-gray-300 border-b">
            <div className="flex items-center">
                <h1 className="text-lg font-bold text-black">CosmicLens</h1>
            </div>
            <div className="flex items-center">
                {userLoggedIn ? (
                    <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className="text-sm text-white bg-blue-600 rounded-md px-4 py-2 mr-2">Logout</button>
                ) : (
                    <>
                        <button className="text-sm font-bold text-white bg-blue-600 rounded-md px-4 py-2 mr-2"><Link to="/login">Login</Link></button>
                        <button className="text-sm font-bold text-white bg-blue-600 rounded-md px-4 py-2 mr-2"><Link to="/register">Register</Link></button>
                    </>
                )}
            </div>
        </nav>
        
    )
}

export default Header