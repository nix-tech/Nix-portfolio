'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import translations, { Lang } from '@/translations'

type TranslationValue = typeof translations[Lang]

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: TranslationValue
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations['en'],
})

function detectBrowserLang(): Lang {
  if (typeof navigator === 'undefined') return 'en'
  const browserLang = navigator.language || (navigator as unknown as { userLanguage: string }).userLanguage || 'en'
  return browserLang.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check localStorage first, then browser language
    const stored = localStorage.getItem('preferred-lang') as Lang | null
    const detected = stored && (stored === 'en' || stored === 'fr') ? stored : detectBrowserLang()
    setLangState(detected)
    setMounted(true)
  }, [])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('preferred-lang', newLang)
  }

  // Prevent hydration mismatch: render with default 'en' on server
  const resolvedLang = mounted ? lang : 'en'

  return (
    <LangContext.Provider value={{ lang: resolvedLang, setLang, t: translations[resolvedLang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
