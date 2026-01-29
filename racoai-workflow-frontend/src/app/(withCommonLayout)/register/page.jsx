'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Here you would typically send data to your backend API
    console.log('Registering with:', name, email, password);
    // After successful registration, you might redirect to login or a dashboard
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center py-10 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative z-10"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            Join Our Marketplace
          </h2>
          <p className="text-gray-400 text-sm">
            Create your account to start managing projects or finding work.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-all"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-all"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-all"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-all"
              required
            />
          </div>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-purple-600/20"
          >
            Create Account
          </motion.button>
        </form>

        {/* Login Link */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
