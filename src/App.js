import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import Home from './pages/Home'
import LandingPg from './pages/LandingPg'
import Apod from './pages/Apod'
import { AuthProvider } from './contexts/authContext/authContext'
import Mars from './pages/Mars'
import NasaImage from './pages/NasaImage'
import NeoWs from './pages/NeoWs'


function App() {
  return (
    <>
      <Router>
      <AuthProvider>
      <div className='md:container md:mx-auto'>
        <Header />
          <Routes>
            <Route path='/' element={<LandingPg />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/apod' element={<Apod />} />
            <Route path='/mars' element={<Mars />} />
            <Route path='/nasaImage' element={<NasaImage />} />
            <Route path='/neows' element={<NeoWs />} />
          </Routes>
        </div>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
