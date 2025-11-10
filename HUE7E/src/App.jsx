import { useState } from 'react'
import './App.css'
import NavbarHue7E from './components/Navbar'
import DownloadButton from './components/DownloadButton'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
   return (
      <>
      <NavbarHue7E />
      <DownloadButton />
      <Home />
      <Footer />
      </>
   )
}

export default App
