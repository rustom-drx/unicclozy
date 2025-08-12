import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
// Make sure you have installed emailjs-browser by running: npm install @emailjs/browser
import emailjs from '@emailjs/browser';

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.98 },
};
const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.6 };

function ContactPage() {
  const [formStatus, setStatus] = useState({ type: 'idle', message: '' });

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'sending', message: 'Sending...' });

    // --- EmailJS Integration ---
    // It's generally better to configure auto-replies in the EmailJS dashboard
    // rather than sending two emails from the client.
    // However, to send both, we use Promise.all to handle them concurrently.
    const sendToAdmin = emailjs.sendForm(
      'service_ropk6lm',
      'template_ts8shfq', // Template for message to admin
      form.current,
      '_yTCmU4pxOtNlxaYe'
    );

    const sendAutoReply = emailjs.sendForm(
      'service_ropk6lm',
      'template_x37rk8m', // Template for auto-reply to user
      form.current,
      '_yTCmU4pxOtNlxaYe'
    );

    Promise.all([sendToAdmin, sendAutoReply])
      .then(([adminResult, autoReplyResult]) => {
        console.log('Admin email sent:', adminResult.text);
        console.log('Auto-reply sent:', autoReplyResult.text);
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        e.target.reset();
        setTimeout(() => setStatus({ type: 'idle', message: '' }), 4000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error.text || error);
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      });
  };
  // Function to determine button text based on status
  const getButtonText = () => {
    switch (formStatus.type) {
      case 'sending':
        return 'Sending...';
      case 'success':
        return 'Message Sent!';
      case 'error':
        return 'Failed to Send';
      default:
        return 'Send Message';
    }
  };
  const getButtonClasses = () => {
    const baseClasses = 'w-full text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform';
    if (formStatus.type === 'sending') {
      return `${baseClasses} bg-gray-500 cursor-not-allowed`;
    } else if (formStatus.type === 'success') {
      return `${baseClasses} bg-green-500`;
    } else if (formStatus.type === 'error') {
      return `${baseClasses} bg-red-500`;
    }
    return `${baseClasses} bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-105`;
  };

  return (
    <Motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center py-20 px-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528732203019-b355a159448a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')" }}></div>
                <div className="relative p-8 md:p-12">
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-2">Let's build something amazing.</h2>
                        <p className="text-gray-300 mb-8">Reach out to us, and let's start the conversation.</p>
                    </div>
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="user_name">Your Name</label>
                                <input className="appearance-none block w-full bg-gray-800/50 text-white border border-gray-600 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-indigo-500" id="user_name" type="text" name="user_name" placeholder="Jane Doe" required/>
                            </div>
                             <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="user_email">Email Address</label>
                                <input className="appearance-none block w-full bg-gray-800/50 text-white border border-gray-600 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-indigo-500" id="user_email" type="email" name="user_email" placeholder="jane.doe@example.com" required/>
                            </div>
                        </div>
                        {/* --- NEW SUBJECT FIELD --- */}
                        <div className="mb-6">
                            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
                            <input className="appearance-none block w-full bg-gray-800/50 text-white border border-gray-600 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-indigo-500" id="subject" type="text" name="subject" placeholder="Project Inquiry" required/>
                        </div>
                        {/* --- END OF NEW FIELD --- */}
                        <div className="mb-6">
                            <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="message">Message</label>
                            <textarea rows="5" className="appearance-none block w-full bg-gray-800/50 text-white border border-gray-600 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-indigo-500" id="message" name="message" placeholder="Tell us about your project..." required></textarea>
                        </div>
                        <button
                            className={getButtonClasses()}
                            type="submit"
                            disabled={formStatus.type === 'sending'}
                        >
                            {getButtonText()}
                        </button>
                        {formStatus.type === 'error' && <p className="text-red-500 text-center mt-4">{formStatus.message}</p>}
                    </form>
                    <div className="mt-10 pt-8 border-t border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center"><MapPin className="text-indigo-400 mb-2" size={24} /><h4 className="font-bold text-white">Our Office</h4><p className="text-gray-400">123 Creative Lane, DC</p></div>
                             <div className="flex flex-col items-center"><Mail className="text-indigo-400 mb-2" size={24} /><h4 className="font-bold text-white">Email Us</h4><p className="text-gray-400">hello@creativeforge.com</p></div>
                             <div className="flex flex-col items-center"><Phone className="text-indigo-400 mb-2" size={24} /><h4 className="font-bold text-white">Call Us</h4><p className="text-gray-400">(123) 456-7890</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default ContactPage;