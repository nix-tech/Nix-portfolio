"use client"

import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML', pct: 95, color: '#f97316' },
  { name: 'CSS', pct: 90, color: '#3b82f6' },
  { name: 'JavaScript', pct: 90, color: '#eab308' },
  { name: 'React', pct: 85, color: '#06b6d4' },
  { name: 'Next.js', pct: 85, color: '#d4d4d8' },
  { name: 'TypeScript', pct: 85, color: '#2563eb' },
  { name: 'Node.js', pct: 80, color: '#22c55e' },
  { name: 'Tailwind', pct: 90, color: '#14b8a6' },
  { name: 'Git', pct: 85, color: '#ef4444' }
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8">Technologies I Master</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((s) => (
          <motion.div key={s.name} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="glass p-4 rounded-xl">
            <div className="flex justify-between mb-2">
              <div className="font-semibold">{s.name}</div>
              <div className="text-white font-bold">{s.pct}%</div>
            </div>
            <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: `${s.pct}%` }} 
                transition={{ duration: 1.1 }} 
                className="h-3"
                style={{ backgroundColor: s.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
