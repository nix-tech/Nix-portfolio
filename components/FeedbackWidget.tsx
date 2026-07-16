"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      })
      if (!res.ok) throw new Error('Erreur serveur')
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setName('')
        setMessage('')
        setIsOpen(false)
      }, 3000)
    } catch {
      setError('Envoi échoué. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] rounded-2xl w-80 shadow-[0_0_40px_rgba(124,77,255,0.25)] overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-[var(--card-border)] flex items-center justify-between bg-gradient-to-r from-[var(--primary)]/20 to-fuchsia-600/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--primary)]/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--foreground)]">Laisser un commentaire</div>
                  <div className="text-xs text-textSecondary">Je vous répondrai par email</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-7 h-7 flex items-center justify-center rounded-lg bg-[var(--secondary-bg)] hover:bg-[var(--primary)]/10 transition-colors text-[var(--text-secondary)] hover:text-[var(--primary)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-6 gap-3 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-violet/20 flex items-center justify-center text-3xl">✉️</div>
                  <p className="text-[var(--foreground)] font-semibold">Message envoyé !</p>
                  <p className="text-textSecondary text-sm">Merci pour votre commentaire.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div>
                    <label className="text-xs text-textSecondary mb-1 block font-medium">Votre nom</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Nix Saint-val"
                      className="w-full bg-[var(--secondary-bg)] border border-[var(--card-border)] rounded-xl px-3 py-2 text-sm text-[var(--foreground)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)]/50 focus:bg-[var(--primary)]/5 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-textSecondary mb-1 block font-medium">Votre message</label>
                    <textarea
                      required
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Votre commentaire ou message..."
                      rows={4}
                      className="w-full bg-[var(--secondary-bg)] border border-[var(--card-border)] rounded-xl px-3 py-2 text-sm text-[var(--foreground)] placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--primary)]/50 focus:bg-[var(--primary)]/5 transition-colors resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-red-400 text-xs text-center">{error}</p>
                  )}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={loading ? {} : { scale: 1.02 }}
                    whileTap={loading ? {} : { scale: 0.97 }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#7c4dff] to-fuchsia-600 text-white font-semibold text-sm shadow-[0_0_15px_rgba(124,77,255,0.3)] hover:shadow-[0_0_25px_rgba(124,77,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9 22 2z"/></svg>
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? {} : { y: [0, -4, 0] }}
        transition={isOpen ? {} : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7c4dff] to-fuchsia-600 flex items-center justify-center shadow-[0_0_20px_rgba(124,77,255,0.5)] hover:shadow-[0_0_35px_rgba(124,77,255,0.7)] transition-shadow duration-300 border border-white/20"
        title="Laisser un commentaire"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}
              xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </motion.svg>
          ) : (
            <motion.svg key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}
              xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
