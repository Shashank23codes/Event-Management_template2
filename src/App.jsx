import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home';

import About from './pages/About';
import Segments from './pages/Segments';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';

// Scroll to top utility to reset scroll coordinates on page routing
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Instant scroll reset for seamless transitions
    });
  }, [pathname]);

  return null;
};

// Sub-component wrapper to leverage Router hooks and AnimatePresence path keys
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Segments" element={<Segments />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen bg-light-gray text-dark-text selection:bg-gold-500 selection:text-white">
        {/* Reset scroll on route changes */}
        <ScrollToTop />
        <CustomCursor />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Area containing routed pages */}
        <main className="grow">
          <AnimatedRoutes />
        </main>

        {/* Global Footer panel */}
        <Footer />

        {/* Floating Quick Action Contact Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
