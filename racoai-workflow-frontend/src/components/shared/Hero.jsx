"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
   <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0c] overflow-hidden px-6">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-blue-400 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Marketplace Project Workflow
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
          >
            Manage Your Projects <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              With Precision.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            A high-level system for role-based project management. From creation by Buyers to execution by Problem Solvers. [cite: 12]
          </motion.p>

          {/* Action Buttons with Role Distinction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Buyer Action */}
            <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-xl font-bold overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10">Hire Problem Solvers</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                →
              </span>
            </button>

            {/* Solver Action */}
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold backdrop-blur-sm transition-all shadow-xl">
              Browse Projects
            </button>
          </motion.div>

          {/* Role Status Cards (Visual Clues) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-5xl mx-auto"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
              <h3 className="text-blue-400 font-bold mb-2">Admin</h3>
              <p className="text-sm text-gray-500">Manage roles and global system visibility. [cite: 19, 21]</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors">
              <h3 className="text-indigo-400 font-bold mb-2">Buyer</h3>
              <p className="text-sm text-gray-500">Create projects and review submissions. [cite: 24, 27]</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
              <h3 className="text-purple-400 font-bold mb-2">Problem Solver</h3>
              <p className="text-sm text-gray-500">Execute tasks and deliver ZIP modules. [cite: 31, 36]</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
