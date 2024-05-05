import { useAuth } from '../contexts/authContext/authContext'
import Heading from '../components/Heading'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

function Home() {
  const { currentUser } = useAuth()
  return (
    <>

      <Heading />
      <Navigation />
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-40">
        <img
          src="landing.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />


        <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
            <p className="text-7xl font-bold text-white font-serif"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome</span></p>
          </div>
          <div className="mb-4">
            <p className="text-5xl font-bold text-white font-serif">{currentUser.displayName ? currentUser.displayName : currentUser.email} to</p>
          </div>
          <div className="mb-4">
            <p className="text-6xl font-bold text-white font-serif"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">CosmicLens</span></p>
          </div>
        </div>



      </div>
      <Footer />
    </>

  )
}

export default Home