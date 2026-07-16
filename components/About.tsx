"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/context/LangContext'

const programmingSkills = [
  {
    name: 'C', level: 'Advanced',
    logo: <svg viewBox="0 0 128 128" className="w-7 h-7"><path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/><path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-13-7.6z"/></svg>
  },
  {
    name: 'C++', level: 'Advanced',
    logo: <svg viewBox="0 0 128 128" className="w-7 h-7"><path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/><path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-13-7.6z"/><path fill="#fff" d="M92 66.4h-5.3v-5.3h-5.4v5.3H76v5.3h5.3v5.3h5.4v-5.3H92zm20.3 0h-5.4v-5.3h-5.3v5.3h-5.3v5.3h5.3v5.3h5.3v-5.3h5.4z"/></svg>
  },
  {
    name: 'Python', level: 'Advanced',
    logo: <svg viewBox="0 0 128 128" className="w-7 h-7"><linearGradient id="pyGrad1" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/></linearGradient><linearGradient id="pyGrad2" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/></linearGradient><path fill="url(#pyGrad1)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/><path fill="url(#pyGrad2)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/></svg>
  },
  {
    name: 'Java', level: 'Advanced',
    logo: <svg viewBox="0 0 128 128" className="w-7 h-7"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.929-1.58 13.166-1.58 13.166s15.289-7.891 8.269-17.769c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.183z"/><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.386-.793 18.813-2.491 18.813-2.491s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.626 19.644-4.626zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/></svg>
  },
  {
    name: 'JavaScript', level: 'Expert',
    logo: <svg viewBox="0 0 32 32" className="w-7 h-7"><rect width="32" height="32" fill="#F7DF1E" rx="2"/><path d="M19.5 25.6c.6 1 1.4 1.8 2.9 1.8 1.2 0 2-.6 2-1.4 0-1-.8-1.3-2.1-1.9l-.7-.3c-2.1-.9-3.5-2-3.5-4.4 0-2.2 1.7-3.8 4.3-3.8 1.9 0 3.2.7 4.2 2.4l-2.3 1.5c-.5-.9-1-1.3-1.9-1.3-.9 0-1.4.5-1.4 1.3 0 .9.5 1.3 1.8 1.8l.7.3c2.5 1.1 3.9 2.1 3.9 4.5 0 2.6-2 4-4.7 4-2.6 0-4.3-1.2-5.1-2.8l2.9-1.7zm-10 .3c.5.8.9 1.5 1.9 1.5.9 0 1.5-.4 1.5-1.8V16h2.8v9.6c0 3-1.7 4.3-4.3 4.3-2.3 0-3.6-1.2-4.3-2.6l2.4-1.4z"/></svg>
  },
  {
    name: 'TypeScript', level: 'Expert',
    logo: <svg viewBox="0 0 128 128" className="w-7 h-7"><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/><path data-name="original" fill="#007ACC" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"/></svg>
  },
  {
    name: 'React', level: 'Expert',
    logo: <svg viewBox="0 0 32 32" className="w-7 h-7"><circle cx="16" cy="16" r="2.8" fill="#61DAFB"/><g fill="none" stroke="#61DAFB" strokeWidth="1.2"><ellipse rx="11" ry="4.2" cx="16" cy="16"/><ellipse rx="11" ry="4.2" cx="16" cy="16" transform="rotate(60 16 16)"/><ellipse rx="11" ry="4.2" cx="16" cy="16" transform="rotate(120 16 16)"/></g></svg>
  },
  {
    name: 'Next.js', level: 'Expert',
    logo: <svg viewBox="0 0 32 32" className="w-7 h-7"><circle cx="16" cy="16" r="16" fill="black"/><path d="M10 22V10h2l8 9.5V10h2v12h-2L12 12.5V22H10z" fill="white"/></svg>
  },
  {
    name: 'Node.js', level: 'Advanced',
    logo: <svg viewBox="0 0 32 32" className="w-7 h-7"><path fill="#8CC84B" d="M16 2L2 9.8v12.4L16 30l14-7.8V9.8L16 2zm0 3.1l10.5 5.9v3.1L16 19.2 5.5 14.1v-3.1L16 5.1zM5.5 17.3l10.5 5.9 10.5-5.9v3.1L16 26.3 5.5 20.4v-3.1z"/></svg>
  },
  {
    name: 'HTML & CSS', level: 'Expert',
    logo: <svg viewBox="0 0 128 128" className="w-7 h-7"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.149-.979-10.969H33.816l1.928 21.6 28.193 7.829.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.762h16.947l-1.597 17.849-15.35 4.152v14.301l28.215-7.82.207-2.325 3.234-36.233.336-3.686zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/></svg>
  },
]

const projects = [
  { name: 'E-Commerce Platform', desc: 'Full-stack shopping app with auth, cart & payments', stack: 'Next.js · Stripe · MongoDB' },
  { name: 'Crypto Dashboard', desc: 'Real-time crypto tracking with charts and alerts', stack: 'React · Chart.js · CoinGecko API' },
  { name: 'Task Manager App', desc: 'Collaborative project management tool with drag & drop', stack: 'React · Node.js · PostgreSQL' },
]

const levelColor: Record<string, string> = {
  Expert: 'text-violet bg-violet/10 border border-violet/30',
  Advanced: 'text-fuchsia-400 bg-fuchsia-400/10 border border-fuchsia-400/30',
}

export default function About() {
  const [open, setOpen] = useState(false)
  const { t } = useLang()

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold mb-4">{t.about.title}</motion.h2>
          <motion.p className="text-textSecondary max-w-2xl">
            {t.about.description}<span className="text-foreground font-semibold">Université Saint François d'Assise</span>{t.about.descriptionSuffix}
          </motion.p>
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen(true)}
              className="relative px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#7c4dff] to-fuchsia-600 shadow-[0_0_15px_rgba(124,77,255,0.35)] hover:shadow-[0_0_28px_rgba(124,77,255,0.6)] transition-all duration-300 border border-white/15 overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-2">
                {t.about.learnMore}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </motion.button>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { value: '2+', label: t.about.stats.experience },
            { value: '15+', label: t.about.stats.projects },
            { value: '10+', label: t.about.stats.clients },
            { value: '100%', label: t.about.stats.satisfaction },
          ].map((stat) => (
            <motion.div key={stat.label} whileHover={{ scale: 1.03 }} className="glass p-6">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-textSecondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learn More Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-[0_0_60px_rgba(124,77,255,0.2)]"
            >
              {/* Header */}
              <div className="sticky top-0 bg-[var(--card-bg)] backdrop-blur-md px-6 pt-6 pb-4 border-b border-[var(--card-border)] flex items-center justify-between z-10">
                <h3 className="text-2xl font-bold">Ing Nix Saint-val</h3>
                <button onClick={() => setOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-[var(--secondary-bg)] hover:bg-[var(--primary)]/10 transition-colors text-[var(--text-secondary)] hover:text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>

              <div className="px-6 py-6 space-y-8">
                {/* Education */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="text-violet">🎓</span> {t.about.modal.education}
                  </h4>
                  <div className="glass p-4 rounded-xl flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-violet/20 flex items-center justify-center text-xl flex-shrink-0">🏛️</div>
                    <div>
                      <div className="font-semibold text-foreground">Université Saint François d'Assise</div>
                      <div className="text-textSecondary text-sm mt-1">{t.about.modal.degree}</div>
                      <div className="text-violet text-xs mt-2 font-medium">{t.about.modal.location}</div>
                    </div>
                  </div>
                </div>

                {/* Programming Skills */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="text-violet">💻</span> {t.about.modal.skills}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {programmingSkills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        className="flex items-center gap-3 glass p-3 rounded-xl"
                      >
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">{skill.logo}</div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-foreground">{skill.name}</div>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelColor[skill.level]}`}>{skill.level === 'Expert' ? t.about.modal.levelExpert : t.about.modal.levelAdvanced}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <span className="text-violet">🚀</span> {t.about.modal.projects}
                  </h4>
                  <div className="space-y-3">
                    {projects.map((project, i) => (
                      <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="glass p-4 rounded-xl border border-[var(--card-border)] hover:border-[var(--primary)]/30 transition-colors"
                      >
                        <div className="font-semibold text-foreground">{project.name}</div>
                        <div className="text-textSecondary text-sm mt-1">{project.desc}</div>
                        <div className="text-violet text-xs mt-2 font-medium">{project.stack}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
