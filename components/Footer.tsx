import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-textSecondary text-sm">
        <div>© 2026 Ing Nix. All Rights Reserved.</div>
        <div className="flex items-center gap-2">
          Made with passion by
          <Image
            src="/logo.png"
            alt="NixDev"
            width={28}
            height={28}
            className="rounded-full border border-violet/30 shadow-[0_0_8px_rgba(124,77,255,0.4)] inline-block"
          />
          <span className="font-semibold text-white">NixDev inc</span>
        </div>
      </div>
    </footer>
  )
}
