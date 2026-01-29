"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const stats = [
    { label: "Project Lifecycle", value: "Full Flow" }, // [cite: 15]
    { label: "Role Based", value: "Access Control" }, // [cite: 14]
    { label: "Submission", value: "ZIP Handover" }, // [cite: 36]
    { label: "Review", value: "Buyer Approval" }, // [cite: 27]
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white py-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-blue-400 font-semibold tracking-widest uppercase mb-4">About the System</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Marketplace Workflow</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            This project simulates a real-world client workflow for the RacoAI Marketplace Projects Division[cite: 7].
            It is designed to manage projects from initial creation by Buyers to expert execution by Problem Solvers[cite: 12].
          </p>
        </motion.div>

        {/* Core Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-6 font-bold text-xl">1</div>
            <h3 className="text-xl font-bold mb-4">Role Management</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Strict role-based access control for Admins, Buyers, and Problem Solvers to ensure secure operations[cite: 14, 18].
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-6 font-bold text-xl">2</div>
            <h3 className="text-xl font-bold mb-4">Task Execution</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Problem Solvers decompose high-level projects into sub-modules and manage timelines effectively[cite: 34, 35].
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400 mb-6 font-bold text-xl">3</div>
            <h3 className="text-xl font-bold mb-4">Quality Delivery</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Integrated file submission system with Buyer review cycles for guaranteed project success[cite: 36, 53].
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</h4>
              <p className="text-blue-400 text-xs uppercase tracking-tighter">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Project Lifecycle Hint */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 italic">
            Focusing on correctness, clarity, and disciplined full-stack execution[cite: 9].
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
