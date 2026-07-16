"use client"

import { motion } from 'framer-motion'

export default function Testimonial() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold mb-6">What People Say</h3>
      <motion.div className="glass p-6 rounded-xl flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full bg-[#7c4dff]/20 flex items-center justify-center text-2xl font-bold text-[#7c4dff] shrink-0 border border-[#7c4dff]/30 shadow-[0_0_15px_rgba(124,77,255,0.2)]">
          J
        </div>
        <div>
          <div className="font-semibold text-lg relative z-10">
            <a href="https://dellyjifferson.engineer" target="_blank" rel="noopener noreferrer" className="text-[#7c4dff] hover:text-white transition-colors inline-flex items-center gap-1 group">
              <span className="border-b border-transparent group-hover:border-white transition-colors">Jifferson Delly</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 transition-opacity"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
          <div className="text-textSecondary text-sm mb-3">Software Engineer</div>
          <div className="text-textSecondary leading-relaxed italic">
            "I’ve known Nix Nither SAINT-VAL for many years, and throughout that time, he’s always been someone who takes his work seriously. His curiosity, persistence, and commitment to becoming a better web developer are truly inspiring. Beyond his technical skills, he’s a great person to collaborate with and someone you can trust to deliver quality results."
          </div>
        </div>
      </motion.div>
    </section>
  )
}
