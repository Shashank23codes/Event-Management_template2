import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ item, aspectRatio = "aspect-4/5" }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`group isolate z-10 relative overflow-hidden rounded-2xl bg-stone-900 ${aspectRatio} w-full transition-all duration-700 hover:shadow-xl hover:shadow-stone-900/10 cursor-pointer border border-stone-200/10`}
    >
      {/* Background Image with slow hover zoom */}
      <div className="absolute inset-0 z-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105" 
        />
        {/* Modern dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent transition-all duration-500 group-hover:from-stone-950 group-hover:via-stone-950/60" />
      </div>

      {/* Floating Info (Category + Date) */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 opacity-90">
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-mustard-gold">
          {item.category}
        </span>
        <span className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest text-white/50 uppercase">
          <Calendar size={11} className="opacity-60" />
          {item.date}
        </span>
      </div>

      {/* Content Area at Bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end z-20">
        {/* Location */}
        <div className="flex items-center gap-1.5 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <MapPin size={12} className="text-mustard-gold" />
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/60">{item.location}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-playfair font-normal leading-tight text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out group-hover:text-mustard-gold italic">
          {item.title}
        </h3>

        {/* Revealable Description & Contact Button */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
          <div className="overflow-hidden">
            <div className="w-10 h-[1px] bg-mustard-gold/40 my-3.5" />
            <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed mb-6 font-sans">
              {item.description}
            </p>
            <Link 
              to="/contact" 
              state={{ selectedEvent: item.title }}
              className="inline-flex items-center justify-between w-full text-[9px] font-bold uppercase tracking-[0.2em] text-white hover:text-stone-900 hover:bg-white border border-white/20 hover:border-white px-5 py-3 rounded-full transition-all duration-300 focus:outline-none"
            >
              <span>Inquire This Event</span>
              <ArrowUpRight size={13} className="text-mustard-gold" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Subtle overlay card borders */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-2xl transition-colors duration-500 z-30 pointer-events-none" />
    </motion.div>
  );
};

export default PortfolioItem;
