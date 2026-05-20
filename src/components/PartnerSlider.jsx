import { motion } from 'framer-motion';
import { ShieldCheck, Star } from 'lucide-react';

const PartnerSlider = () => {
  const partners = [
    { name: "TAJ HOTELS", type: "Elite Palace Venue" },
    { name: "JW MARRIOTT", type: "Luxury Retreats" },
    { name: "HYATT REGENCY", type: "Urban Banquets" },
    { name: "RADISSON BLU", type: "Premium Services" },
    { name: "LE MERIDIEN", type: "Heritage Resorts" },
    { name: "WEDMEGOOD", type: "Top Rated Vendor" },
    { name: "WEDDINGWIRE", type: "Gold Partner" },
    { name: "SHAADISAGA", type: "Preferred Planner" }
  ];

  // Double the array to ensure seamless infinite looping scroll
  const doublePartners = [...partners, ...partners];

  return (
    <div className="w-full bg-stone-50 py-10 border-t border-b border-stone-200/80 overflow-hidden relative">
      {/* Visual gradients on sides to fade elements */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <span className="inline-flex items-center gap-1.5 text-mustard-gold font-bold text-[10px] md:text-xs uppercase tracking-widest bg-white border border-stone-200/80 px-3 py-1 rounded-full shadow-xs">
          <Star size={10} className="fill-mustard-gold text-mustard-gold" />
          Elite Venue & Directory Partners
        </span>
      </div>

      {/* Looping Marquee container */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: [0, -1600] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 35
          }}
          className="flex gap-4 md:gap-6 shrink-0 pr-6"
        >
          {doublePartners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-stone-200/80 w-[240px] md:w-[280px] shrink-0 shadow-sm transition-all hover:bg-stone-50/50 hover:border-mustard-gold/40 hover:scale-102 cursor-default group"
            >
              {/* Decorative mini badge icon */}
              <div className="w-10 h-10 rounded-lg bg-mustard-gold/10 border border-mustard-gold/20 flex items-center justify-center text-mustard-gold group-hover:bg-mustard-gold/20 transition-all shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div className="text-left">
                <h4 className="text-stone-800 text-sm md:text-base font-playfair font-semibold tracking-wider group-hover:text-deep-teal transition-colors">
                  {partner.name}
                </h4>
                <p className="text-stone-400 text-[10px] md:text-xs uppercase tracking-widest mt-0.5">
                  {partner.type}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerSlider;
