"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function WorkInProgress() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-6 pt-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full glass rounded-3xl p-8 md:p-12 text-center border border-[var(--card-border)] shadow-[0_0_50px_rgba(124,77,255,0.1)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#7c4dff] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative w-full max-w-sm mx-auto aspect-square mb-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <Image 
            src="/work_in_progress.png" 
            alt="Work in Progress" 
            fill 
            className="object-cover"
          />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[var(--foreground)]"
        >
          Work In Progress
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-textSecondary text-lg mb-8 max-w-md mx-auto"
        >
          This project is currently under development. Please check back later for exciting updates and features!
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/">
            <button className="relative px-8 py-3 rounded-xl font-semibold text-white bg-[var(--primary)] shadow-[0_0_15px_rgba(124,77,255,0.4)] hover:shadow-[0_0_30px_rgba(124,77,255,0.7)] transition-all duration-300 border border-white/20 group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Back to Home
              </span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
