"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-white py-10"
    >
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">RacoHub</h2>
          <p className="mt-2 text-sm text-purple-100">
            A role-based project marketplace where buyers and solvers collaborate smoothly.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-purple-100">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">Projects</li>
            <li className="hover:text-white transition">Dashboard</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-purple-100 text-sm">support@racohub.com</p>
          <p className="text-purple-100 text-sm mt-1">© {new Date().getFullYear()} RacoHub</p>
        </div>

      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-center mt-8 text-sm text-purple-200"
      >
        Reco Hub
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
