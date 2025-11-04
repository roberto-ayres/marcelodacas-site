// components/SiteFooter.tsx
export default function SiteFooter() {
  return (
    <footer className="bg-white/95">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-6 text-xs text-slate-500">
        <span>© {new Date().getFullYear()} Marcelo da Cas – Advocacia.</span>
      </div>
    </footer>
  )
}
