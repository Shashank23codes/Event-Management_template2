import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const DestinationWeddingSection = () => {
  const destinations = [
    {
      city: "Udaipur",
      theme: "Royal Palace",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80&w=400&h=500"
    },
    {
      city: "Goa",
      theme: "Sandy Beachfront",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=400&h=500"
    },
    {
      city: "Jaipur",
      theme: "Heritage Forts",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=400&h=500"
    },
    {
      city: "International",
      theme: "Dubai & Thailand",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-white border-t border-b border-stone-200/60">
      {/* Decorative floating blur balls */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-ocean-teal/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-mustard-gold/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="flex items-center gap-2 text-mustard-gold font-semibold text-xs md:text-sm uppercase tracking-widest mb-3">
              <Plane className="animate-bounce" size={16} />
              Exotic Global Celebrations
            </span>
            <h2 className="text-3xl md:text-5xl font-playfair font-normal leading-tight text-deep-teal">
              Plan Your Dream <span className="text-mustard-gold italic font-bold">Destination Wedding</span>
            </h2>
            <p className="mt-4 text-stone-600 text-sm md:text-base max-w-2xl leading-relaxed">
              We specialize in turning travel into timeless romance. From palace courtyard setups in Udaipur to beachside sangeets in Goa and luxury events in Thailand and Dubai, we handle guest itineraries, local licenses, and stellar setups seamlessly.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/contact"
              state={{ selectedEvent: "Destination Wedding" }}
              className="inline-flex items-center gap-2.5 bg-deep-teal text-white font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-all hover:bg-ocean-teal"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Destination Showcase Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative h-[280px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-stone-200/80"
            >
              {/* Overlay linear */}
              <div className="absolute inset-0 bg-linear-to-t from-stone-900 via-stone-900/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300 z-10" />

              {/* Destination Image */}
              <img 
                src={dest.image} 
                alt={dest.city} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out" 
              />

              {/* Hover Text Reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] md:text-xs text-gold-300 font-bold uppercase tracking-wider block mb-1">
                  {dest.theme}
                </span>
                <h3 className="text-xl md:text-3xl font-playfair text-white font-semibold">
                  {dest.city}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Trust Badges */}
        <div className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="text-mustard-gold w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-stone-900 font-bold text-base md:text-lg mb-1">Seamless Travel Logistics</h4>
                <p className="text-stone-600 text-xs md:text-sm">We manage flight ticketing, concierge cabs, and luxury check-ins for all your wedding guests.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:pl-8">
              <CheckCircle2 className="text-mustard-gold w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-stone-900 font-bold text-base md:text-lg mb-1">Curated Local Vendors</h4>
                <p className="text-stone-600 text-xs md:text-sm">Vetted local culinary experts, floral decorators, and makeup artists native to each location.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:pl-8">
              <CheckCircle2 className="text-mustard-gold w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-stone-900 font-bold text-base md:text-lg mb-1">Pre-Wedding Site Audits</h4>
                <p className="text-stone-600 text-xs md:text-sm">Our creative leads perform detailed space and acoustic mockups on-site before the main dates.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DestinationWeddingSection;
