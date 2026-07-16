import './globals.css'

export const metadata = {
  title: 'Ing Nix — Portfolio',
  description: 'Ing Nix — Full Stack Web Developer',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

import { Providers } from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
