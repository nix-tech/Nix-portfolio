"use client"

import { ThemeProvider } from 'next-themes'
import { LangProvider } from '@/context/LangContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
      </ThemeProvider>
    </LangProvider>
  )
}
