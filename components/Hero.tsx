"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/context/LangContext'

export default function Hero() {
  const { t } = useLang()

  const [text, setText] = useState("")
  const [showCode, setShowCode] = useState(false)
  const [codeText, setCodeText] = useState("")

  const codeSnippet = `function startProject() {\n  const needGreatDev = true;\n  \n  if (needGreatDev) {\n    return contact("Ing Nix Saint-val");\n  }\n  \n  return "Keep searching...";\n}\n\nstartProject();`

  // Typing effect for subtitle — restarts when language changes
  useEffect(() => {
    const fullText = t.hero.subtitle
    let i = 0
    let typing: ReturnType<typeof setInterval>
    let loop: ReturnType<typeof setTimeout>

    const startTyping = () => {
      i = 0
      setText("")
      typing = setInterval(() => {
        i++
        setText(fullText.slice(0, i))
        if (i >= fullText.length) {
          clearInterval(typing)
          loop = setTimeout(() => startTyping(), 15000)
        }
      }, 40)
    }

    startTyping()
    return () => { clearInterval(typing); clearTimeout(loop) }
  }, [t.hero.subtitle])

  // 5 seconds toggle interval for avatar/code
  useEffect(() => {
    const toggleInterval = setInterval(() => {
      setShowCode(prev => !prev)
    }, 5000)
    return () => clearInterval(toggleInterval)
  }, [])

  // Typing effect for the code block
  useEffect(() => {
    if (showCode) {
      let i = 0
      setCodeText("")
      const typing = setInterval(() => {
        i++
        setCodeText(codeSnippet.slice(0, i))
        if (i >= codeSnippet.length) {
          clearInterval(typing)
        }
      }, 15)
      return () => clearInterval(typing)
    } else {
      setCodeText("")
    }
  }, [showCode])

  return (
    <section className="max-w-7xl mx-auto px-6 pt-28 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-secondaryBg text-violet text-sm mb-4 border border-foreground/5">
            {t.hero.badge}
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold leading-tight">
            {t.hero.greeting} <span className="text-violet">Ing Nix Saint-val</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-xl text-textSecondary max-w-xl min-h-[90px]">
            {text}
            <span className="animate-pulse ml-1 border-r-2 border-violet inline-block h-6 align-middle"></span>
          </motion.p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 rounded-xl text-white font-semibold shadow-[0_0_15px_rgba(124,77,255,0.4)] hover:shadow-[0_0_25px_rgba(124,77,255,0.6)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-block text-center border border-white/10">
              {t.hero.viewWork}
            </a>
            <a href="/CV_Nixnither_Saint-val.pdf" download="CV_Nixnither_Saint-val.pdf" className="glass px-6 py-3 rounded-xl hover:bg-foreground/5 transition-colors inline-block text-center text-foreground">
              {t.hero.downloadCV}
            </a>
          </div>

          <div className="mt-10 flex gap-3 items-center flex-wrap">
            <div className="flex gap-3 items-center flex-wrap text-sm text-foreground font-medium">
              {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Git'].map((tech, i) => (
                <motion.div 
                  key={tech}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                  className="relative overflow-hidden rounded-lg p-[1px] cursor-default group shadow-sm"
                >
                  <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#7c4dff_50%,transparent_100%)] opacity-70 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDuration: '4s' }} />
                  <div className="relative bg-background px-4 py-2 rounded-lg text-foreground/90 group-hover:text-foreground transition-colors w-full h-full flex items-center justify-center border border-foreground/5 group-hover:bg-secondaryBg">
                    {tech}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* AVATAR / CODE SECTION */}
        <div className="relative flex items-center justify-center h-80 md:h-96" style={{ perspective: 1200 }}>
          <AnimatePresence mode="wait">
            {!showCode ? (
              <motion.div
                key="avatar"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full violet-glow bg-gradient-to-br from-[#7c4dff]/20 to-transparent flex items-center justify-center shadow-[0_0_60px_rgba(124,77,255,0.4)]"
              >
                <img 
                  src="/profil.jpeg" 
                  alt="Ing Nix" 
                  className="rounded-full w-72 h-72 md:w-80 md:h-80 object-cover shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-[3px] border-[#7c4dff]/50" 
                />
              </motion.div>
            ) : (
              <motion.div
                key="code"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="absolute w-full max-w-md h-72 md:h-80 bg-secondaryBg rounded-2xl border border-foreground/10 shadow-[0_0_50px_rgba(124,77,255,0.2)] p-6 overflow-hidden flex flex-col"
              >
                <div className="flex gap-2 mb-4 pb-4 border-b border-foreground/10">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-[#a5b4fc] text-sm md:text-base font-mono whitespace-pre-wrap flex-1 overflow-hidden">
                  <code>
                    {codeText}
                    <span className="animate-pulse ml-1 inline-block w-2 h-4 bg-[#7c4dff] align-middle"></span>
                  </code>
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
