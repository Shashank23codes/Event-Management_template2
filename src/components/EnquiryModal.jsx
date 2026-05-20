import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, Phone, Mail, User, Sparkles } from 'lucide-react';
import CustomSelect from './CustomSelect';

const EnquiryModal = ({ isOpen, onClose, initialEventType = 'Wedding' }) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: initialEventType,
    destination: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCustomSelectChange = (e) => {
    setForm((prev) => ({ ...prev, eventType: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!form.fullName.trim() || !form.phone.trim()) {
      setError('Please fill in your name and phone number.');
      return;
    }

    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setForm({
      fullName: '',
      email: '',
      phone: '',
      eventType: initialEventType,
      destination: '',
      message: ''
    });
    setSubmitted(false);
    setError('');
    onClose();
  };

  const eventOptions = [
    { value: 'Wedding', label: 'Wedding Curation' },
    { value: 'Destination Wedding', label: 'Destination Wedding' },
    { value: 'Corporate Event', label: 'Corporate Affair' },
    { value: 'Social Celebration', label: 'Social Celebration' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="absolute inset-0 bg-stone-900/40 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white text-stone-900 shadow-2xl border border-stone-200/80 p-6 md:p-10 z-10"
          >
            {/* Background highlights */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-festival-orange/3 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-stone-100 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 bg-stone-50 hover:bg-stone-100 border border-stone-200/60 rounded-full p-2 transition-colors cursor-pointer focus:outline-none"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8"
              >
                <motion.div
                  initial={{ rotate: -45, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 bg-[#fdfbf7] text-[#b89047] rounded-full flex items-center justify-center mb-6 border border-[#b89047]/30"
                >
                  <CheckCircle size={32} />
                </motion.div>
                <h3 className="text-3xl font-playfair font-normal mb-3 text-stone-900">
                  Thank You!
                </h3>
                <p className="text-stone-600 max-w-sm mb-8 leading-relaxed text-sm font-light">
                  Your enquiry has been received. Our chief coordinator Nikhil Karadbhajne or a senior architect will get back to you within 24 hours.
                </p>
                <button
                  onClick={handleResetAndClose}
                  className="btn-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Return to Site
                </button>
              </motion.div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6 pr-6">
                  <div className="flex items-center gap-2 text-festival-orange font-bold text-xs uppercase tracking-widest mb-1.5">
                    <Sparkles size={12} className="fill-festival-orange/20" />
                    Enquiry Desk
                  </div>
                  <h3 className="text-2xl md:text-3xl font-playfair font-normal leading-tight text-stone-900">
                    Let’s Plan Your <span className="text-festival-orange italic font-semibold">Dream Celebration</span>
                  </h3>
                </div>

                {error && (
                  <div className="mb-4 p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs font-semibold">
                    {error}
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name field */}
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-stone-400 pointer-events-none">
                      <User size={15} />
                    </span>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your Full Name *"
                      className="w-full pl-10 pr-4 py-3.5 bg-[#fbfbfa] border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-festival-orange/60 focus:bg-white transition-all text-sm font-sans"
                    />
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-stone-400 pointer-events-none">
                        <Phone size={15} />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        className="w-full pl-10 pr-4 py-3.5 bg-[#fbfbfa] border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-festival-orange/60 focus:bg-white transition-all text-sm font-sans"
                      />
                    </div>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-stone-400 pointer-events-none">
                        <Mail size={15} />
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address (Optional)"
                        className="w-full pl-10 pr-4 py-3.5 bg-[#fbfbfa] border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-festival-orange/60 focus:bg-white transition-all text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Dropdowns Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <CustomSelect
                        options={eventOptions}
                        value={form.eventType}
                        onChange={handleCustomSelectChange}
                        isDark={false}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="destination"
                        value={form.destination}
                        onChange={handleChange}
                        placeholder="Desired Venue/City"
                        className="w-full px-4 py-3.5 bg-[#fbfbfa] border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-festival-orange/60 focus:bg-white transition-all text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Share details about dates, size of gathering, and your vision..."
                      className="w-full px-4 py-3 bg-[#fbfbfa] border border-stone-200 rounded-xl text-stone-900 placeholder-stone-400 focus:outline-none focus:border-festival-orange/60 focus:bg-white transition-all text-sm min-h-[90px] max-h-[140px] font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-850 text-white rounded-full py-4 text-xs font-bold uppercase tracking-[0.2em] hover:scale-[1.01] transition-all cursor-pointer shadow-xs focus:outline-none"
                  >
                    <span>Send Inquiry</span>
                    <Send size={13} />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
