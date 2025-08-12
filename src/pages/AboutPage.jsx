import React from 'react';
import { Award, Users, Target } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.98 },
};
const pageTransition = { type: 'tween', ease: 'anticipate', duration: 0.6 };

function AboutPage() {
    const teamMembers = [
        { name: 'Alex Johnson', role: 'Lead 3D Artist', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
        { name: 'Maria Garcia', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
        { name: 'Sam Chen', role: 'Senior Video Editor', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' },
        { name: 'Jessica Taylor', role: 'Lead App Developer', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80' },
    ];
    const values = [
        { icon: <Award size={32} />, title: 'Excellence', description: 'Committed to delivering the highest quality work.' },
        { icon: <Users size={32} />, title: 'Collaboration', description: 'Working as a team with our clients to achieve shared goals.' },
        { icon: <Target size={32} />, title: 'Innovation', description: 'Constantly pushing creative and technical boundaries.' },
    ];
    
    return (
        <Motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')" }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Architects of the digital frontier.</h2>
                    <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">A collective of artists, coders, and storytellers passionate about building immersive digital experiences.</p>
                </div>
            </section>
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Team collaborating" className="rounded-lg shadow-2xl"/>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <h3 className="text-3xl font-bold text-white mb-4">Our Story</h3>
                            <p className="text-gray-400 mb-4">Founded in a small studio in 2020, CreativeForge was born from a shared passion for blending art with technology. We saw a future where digital experiences could be more than just functional—they could be memorable, inspiring, and beautiful.</p>
                            <p className="text-gray-400">Today, we've grown into a diverse team of experts, but our core mission remains the same: to forge incredible digital solutions that help our clients connect with their audiences in meaningful ways.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16"><h3 className="text-3xl font-bold text-white">Our Core Values</h3></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="text-indigo-500 mb-4 inline-block p-4 bg-gray-900 rounded-full">{value.icon}</div>
                                <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                                <p className="text-gray-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-20 bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16"><h3 className="text-3xl font-bold text-white">Meet Our Creative Minds</h3></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group">
                                <img src={member.img} alt={member.name} className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/334155/ffffff?text=Error'; }}/>
                                <div className="p-6"><h4 className="text-xl font-bold text-white">{member.name}</h4><p className="text-indigo-400">{member.role}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Motion.div>
    );
}

export default AboutPage;