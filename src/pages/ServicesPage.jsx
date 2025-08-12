import React from 'react';
import { Film, Box, PenTool, Smartphone, Zap, Lightbulb, Heart } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
// import IdeaGenerator from '../components/IdeaGenerator'; // Assuming IdeaGenerator is in components folder

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.98 },
};
const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.6 };

function ServicesPage() {
    const services = [
        { icon: <Film size={48} />, title: 'Video Editing', description: 'From corporate videos to cinematic shorts, we craft narratives that resonate.' },
        { icon: <Box size={48} />, title: '3D Animation', description: 'Bringing imagination to life with stunning 3D models and animations.' },
        { icon: <PenTool size={48} />, title: 'Graphic Design', description: 'Visual identities that tell your brand’s story with clarity and impact.' },
        { icon: <Smartphone size={48} />, title: 'Mobile App Design', description: 'Intuitive and beautiful UI/UX that delivers a seamless user journey.' },
    ];
    const whyChooseUs = [
        { icon: <Lightbulb size={32} />, title: 'Creative Excellence', description: 'We deliver innovative and imaginative solutions that captivate audiences.' },
        { icon: <Zap size={32} />, title: 'Strategic Approach', description: 'Our work is not just beautiful; it’s designed to meet your business objectives.' },
        { icon: <Heart size={32} />, title: 'Client-Centric', description: 'We build partnerships with our clients, ensuring a collaborative and transparent process.' },
    ];
    const processSteps = [
        { number: 1, title: 'Discovery', description: 'Understanding your vision, goals, and target audience.' },
        { number: 2, title: 'Strategy & Planning', description: 'Developing a tailored plan to achieve your objectives.' },
        { number: 3, title: 'Execution', description: 'Bringing the design and development to life with precision.' },
        { number: 4, title: 'Launch & Support', description: 'Deploying your project and providing ongoing assistance.' },
    ];

    return (
        <Motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <section className="relative bg-cover bg-center py-24" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')" }}>
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl font-extrabold text-white mb-4">Our Creative Services</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">We turn complex ideas into beautiful, functional realities.</p>
                </div>
            </section>
            <div className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-indigo-500 mb-6 inline-block">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    {/* <IdeaGenerator /> */}
                </div>
            </div>
            <div className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-white">Why Partner With Us?</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="text-purple-400 mb-4 inline-block p-4 bg-gray-900 rounded-full">{item.icon}</div>
                                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-20 bg-gray-900">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-12">Our Proven Process</h2>
                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                         <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2 hidden md:block"></div>
                         <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 -translate-y-1/2 hidden md:block" style={{width: '75%'}}></div>
                       
                        {processSteps.map((step) => (
                            <div key={step.number} className="relative text-center md:text-left p-4">
                                <div className="bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto md:mx-0 mb-4 border-4 border-gray-900">{step.number}</div>
                                <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>   
                        ))}
                         <br/>
                    </div>
                </div>
            </div>
        </Motion.div>
    );
};

export default ServicesPage;