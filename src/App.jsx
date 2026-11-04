import { useState, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import { ZoomContext } from './ZoomContext';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Work from './pages/Work';
import Designs from './pages/Designs';
import Sites from './pages/Sites';
import Writing from './pages/Writing';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles.css';

export default function App() {
  const [zoomed, setZoomed] = useState(null);
  const zoom = useCallback((src, alt) => setZoomed({ src, alt }), []);
  const close = useCallback(() => setZoomed(null), []);

  return (
    <HashRouter>
      <ZoomContext.Provider value={zoom}>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <Lightbox src={zoomed?.src} alt={zoomed?.alt} onClose={close} />
      </ZoomContext.Provider>
    </HashRouter>
  );
}
