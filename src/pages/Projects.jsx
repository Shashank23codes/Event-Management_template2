import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, Image } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import PortfolioItem from '../components/PortfolioItem';
import { useSEO } from '../hooks/useSEO';

const Projects = () => {
  useSEO({
    title: 'Successful Event Curations Gallery | Trends Management',
    description: 'Explore the portfolio gallery of Trends Management. Take inspiration from our luxury weddings, grand floral stages, and premium corporate summits in Nagpur.',
    keywords: 'Real Weddings Nagpur, Destination Wedding Gallery, Corporate Stage Design, Event Photos Nagpur'
  });

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Destination Wedding", "Wedding", "Corporate", "Social"];

  // Filter items based on selected category
  const filteredItems = activeCategory === "All"
    ? portfolioData
    : portfolioData.filter(item => item.category === activeCategory);

  // Computes premium asymmetrical layout parameters for card grids (HBA-inspired design)
  const getCardLayout = (index) => {
    const patternIndex = index % 6;
    switch (patternIndex) {
      case 0: // Landscape Wide Highlight (Spans 8 cols on desktop)
        return {
          colSpan: "md:col-span-8",
          aspectRatio: "aspect-16/10"
        };
      case 1: // Slim Portrait Highlight (Spans 4 cols on desktop)
        return {
          colSpan: "md:col-span-4",
          aspectRatio: "aspect-[3/4]"
        };
      case 2: // Slim Portrait (Spans 4 cols on desktop)
        return {
          colSpan: "md:col-span-4",
          aspectRatio: "aspect-[3/4]"
        };
      case 3: // Square Medium (Spans 4 cols on desktop)
        return {
          colSpan: "md:col-span-4",
          aspectRatio: "aspect-square"
        };
      case 4: // Square Medium (Spans 4 cols on desktop)
        return {
          colSpan: "md:col-span-4",
          aspectRatio: "aspect-square"
        };
      case 5: // Full Width Dramatic Banner (Spans 12 cols on desktop)
        return {
          colSpan: "md:col-span-12",
          aspectRatio: "aspect-[21/9] md:h-[480px] aspect-video"
        };
      default:
        return {
          colSpan: "md:col-span-4",
          aspectRatio: "aspect-4/5"
        };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } 
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full pt-20 bg-[#fbfbfa] text-stone-900 min-h-screen"
    >
      {/* HEADER HERO */}
      <section className="relative py-20 md:py-28 bg-[#f5f5f3] overflow-hidden border-b border-stone-200/60">
        {/* Subtle Luxury Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,144,71,0.04)_0%,transparent_60%)] pointer-events-none" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10"
        >
          <motion.span variants={itemFadeUp} className="text-festival-orange font-bold text-xs uppercase tracking-[0.25em] block mb-4">
            Curations & Spaces
          </motion.span>
          <motion.h1 variants={itemFadeUp} className="text-4xl md:text-7xl font-playfair font-normal leading-tight text-stone-900 mb-6">
            A Gallery of <span className="text-festival-orange font-semibold italic">Realities</span>
          </motion.h1>
          <motion.p variants={itemFadeUp} className="text-stone-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-light font-sans">
            Every curation holds a story of meticulous collaboration. Explore our luxury setups, grand structures, ambient lighting, and bespoke designs from past landmark affairs.
          </motion.p>
        </motion.div>
      </section>

      {/* FILTER BUTTONS & GALLERY */}
      <section className="py-20 bg-[#fbfbfa] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Filters Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-16 pb-8 border-b border-stone-200/80">
            <div className="flex items-center gap-3 text-stone-400">
              <SlidersHorizontal size={13} className="text-festival-orange" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Explore Sectors</span>
            </div>

            {/* Minimalist Text Links (Slash-separated list) */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {categories.map((cat, idx) => (
                <span key={idx} className="flex items-center gap-5">
                  {idx > 0 && <span className="text-stone-300 font-extralight text-xs">/</span>}
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all cursor-pointer relative py-1 focus:outline-none ${
                      activeCategory === cat ? "text-festival-orange" : "text-stone-500 hover:text-stone-900"
                    }`}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <motion.span
                        layoutId="activeFilterUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-festival-orange"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Asymmetrical Grid of Items */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const layout = getCardLayout(index);
                return (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className={`${layout.colSpan} w-full`}
                  >
                    <PortfolioItem item={item} aspectRatio={layout.aspectRatio} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Empty fallback state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-24 border border-stone-200/80 bg-white rounded-2xl max-w-xl mx-auto shadow-xs">
              <Image size={40} className="mx-auto text-stone-300 mb-6" />
              <h3 className="text-xl font-playfair font-normal text-stone-900 mb-2">No Projects Found</h3>
              <p className="text-stone-500 text-xs md:text-sm max-w-md mx-auto font-light">
                We are actively adding new curations. Feel free to contact us for specific case studies in this category.
              </p>
            </div>
          )}

        </div>
      </section>

    </motion.div>
  );
};

export default Projects;
