"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLang } from '@/context/LangContext'

const projects = [
  {
    id: 1,
    title: 'DeepLow Lab',
    desc: {
      en: 'Full-stack website for DeepLow Lab — an embedded hardware, computer vision & edge AI company. Includes the main landing page and Shoal, the web development pricing platform.',
      fr: 'Site web full-stack pour DeepLow Lab — une entreprise spécialisée en hardware embarqué, vision par ordinateur & IA edge. Inclut la page principale et Shoal, la plateforme de tarification web.',
    },
    img: '/deeplowlab_preview.jpg',
    url: 'https://deeplowlab.tech',
    collab: 'Jean Jifferson Delly',
    tags: ['React', 'TypeScript', 'TanStack Router', 'SSR', 'Cloudflare', 'SEO'],
    role: {
      en: 'Full-Stack Developer',
      fr: 'Développeur Full-Stack',
    },
  },
]

const sectionTitle = {
  en: 'Featured Projects',
  fr: 'Projets Réalisés',
}

const collabLabel = {
  en: 'Collab with',
  fr: 'En collab avec',
}

const visitLabel = {
  en: 'Visit Site',
  fr: 'Voir le site',
}

const roleLabel = {
  en: 'Role',
  fr: 'Rôle',
}

export default function Projects() {
  const { lang } = useLang()

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10"
      >
        {sectionTitle[lang]}
      </motion.h2>

      <div className="flex flex-col gap-8">
        {projects.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass rounded-2xl overflow-hidden group"
          >
            {/* Top: image */}
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-56 sm:h-72 md:h-80 overflow-hidden"
            >
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Live badge */}
              <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-green-500/20 backdrop-blur-sm text-green-400 text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-green-400/30">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Live
              </span>
            </a>

            {/* Bottom: info */}
            <div className="p-6 md:p-8 space-y-4">
              {/* Title row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
                {/* Collab badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-medium whitespace-nowrap">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {collabLabel[lang]} {p.collab}
                </span>
              </div>

              {/* Role */}
              <div className="text-textSecondary text-sm">
                <span className="text-white/60 font-medium">{roleLabel[lang]}:</span>{' '}
                <span className="text-white/80">{p.role[lang]}</span>
              </div>

              {/* Description */}
              <p className="text-textSecondary text-sm leading-relaxed max-w-2xl">
                {p.desc[lang]}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--primary)] hover:opacity-90 text-white px-6 py-2.5 rounded-lg font-medium shadow-[0_0_14px_rgba(124,77,255,0.35)] transition-all duration-200"
                >
                  {visitLabel[lang]}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
