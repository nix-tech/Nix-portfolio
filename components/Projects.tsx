"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { id: 1, title: 'E-Commerce Platform', desc: 'Full-stack e-commerce solution with modern UI/UX', img: '/project1.png' },
  { id: 2, title: 'Task Management App', desc: 'Collaborative task management application', img: '/project2.png' },
  { id: 3, title: 'Crypto Dashboard', desc: 'Real-time cryptocurrency tracking dashboard', img: '/project3.png' }
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div key={p.id} whileHover={{ scale: 1.03 }} className="glass p-4 rounded-xl">
            <div className="h-44 w-full bg-white/5 rounded mb-4">
              <Image src={p.img} alt={p.title} width={600} height={300} className="object-cover w-full h-full rounded" />
            </div>
            <div className="font-semibold text-lg">{p.title}</div>
            <div className="text-textSecondary text-sm mb-4">{p.desc}</div>
            <Link href="/work-in-progress">
              <button className="bg-[var(--primary)] hover:opacity-90 text-white px-5 py-2 rounded-lg font-medium shadow-[0_0_10px_rgba(124,77,255,0.4)] transition-all duration-200">
                View Project
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
