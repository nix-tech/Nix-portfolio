"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useLang } from '@/context/LangContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isDark = theme === 'dark'

  const navItems = [
    { label: t.nav.home, href: '#' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.blog, href: '#blog' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 left-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--background)]/85 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>

        {/* Logo + Theme Toggle */}
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NixDev"
              width={40}
              height={40}
              className="rounded-full object-cover border-2 border-[var(--primary)]/30 shadow-[0_0_15px_rgba(124,77,255,0.4)]"
            />
            <div className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              Nix<span className="text-[var(--primary)]">Dev</span>
            </div>
          </Link>

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label="Toggle Theme"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--secondary-bg)] hover:bg-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-all duration-200 text-[var(--text-secondary)] hover:text-[var(--primary)]"
            >
              {isDark ? (
                /* Sun icon */
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2"/><path d="M12 20v2"/>
                  <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
                  <path d="M2 12h2"/><path d="M20 12h2"/>
                  <path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                </svg>
              ) : (
                /* Moon icon */
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 items-center text-sm text-[var(--text-secondary)]">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="relative group hover:text-[var(--foreground)] transition-colors duration-300 py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--primary)] shadow-[0_0_10px_var(--primary)] transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side: Lang Toggle + Hire Me + Hamburger */}
        <div className="flex items-center gap-3">

          {/* Language Toggle */}
          {mounted && (
            <button
              id="lang-toggle"
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              aria-label="Toggle Language"
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[var(--card-border)] bg-[var(--secondary-bg)] hover:bg-[var(--primary)]/10 hover:border-[var(--primary)]/40 transition-all duration-200 text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--primary)]"
            >
              <span className={lang === 'en' ? 'text-[var(--primary)]' : ''}>EN</span>
              <span className="opacity-30">|</span>
              <span className={lang === 'fr' ? 'text-[var(--primary)]' : ''}>FR</span>
            </button>
          )}

          {/* Hire Me Dropdown */}
          <div className="relative group hidden sm:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2.5 rounded-xl font-semibold text-white bg-[var(--primary)] shadow-[0_0_15px_rgba(124,77,255,0.4)] hover:shadow-[0_0_30px_rgba(124,77,255,0.7)] transition-all duration-300 border border-white/20 overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative z-10 flex items-center gap-2">
                {t.nav.hireMe}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </motion.div>

            {/* Dropdown */}
            <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] rounded-xl flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl overflow-hidden z-50">
              <a
                href="https://wa.me/50931743955"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 hover:bg-[#25D366]/15 hover:text-[#25D366] text-[var(--text-secondary)] transition-colors flex items-center gap-3 text-sm font-medium border-b border-[var(--card-border)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:nixnithersaintval@gmail.com"
                className="px-4 py-3 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] text-[var(--text-secondary)] transition-colors flex items-center gap-3 text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[var(--text-secondary)] hover:text-[var(--foreground)] p-2 focus:outline-none transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full right-6 mt-3 w-52 bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] rounded-2xl overflow-hidden shadow-xl"
          >
            <ul className="flex flex-col py-2 text-sm text-[var(--text-secondary)]">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-5 py-2.5 text-sm font-medium hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Mobile lang toggle */}
            <div className="border-t border-[var(--card-border)] px-5 py-3 flex items-center gap-3">
              <span className="text-xs text-[var(--text-secondary)]">Lang:</span>
              <button
                onClick={() => setLang('en')}
                className={`text-xs font-semibold px-2 py-1 rounded-md transition-colors ${lang === 'en' ? 'bg-[var(--primary)]/20 text-[var(--primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--foreground)]'}`}
              >EN</button>
              <button
                onClick={() => setLang('fr')}
                className={`text-xs font-semibold px-2 py-1 rounded-md transition-colors ${lang === 'fr' ? 'bg-[var(--primary)]/20 text-[var(--primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--foreground)]'}`}
              >FR</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
