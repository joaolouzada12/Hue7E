import './App.css';
import NavbarHue7E from './components/Navbar';
import DownloadButton from './components/DownloadButton';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <>
     <ParticlesBackground />
      <NavbarHue7E /> 
      <DownloadButton />
      
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
       <Services />
      </section>
       <Footer />
    </>
  );
}

export default App;
