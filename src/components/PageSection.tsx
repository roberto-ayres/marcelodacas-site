// components/PageSection.tsx
type Props = {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function PageSection({ title, subtitle, children }: Props) {
  return (
    <section className="py-6 sm:py-8">
      <div className="space-y-6 rounded-3xl bg-white/95 p-6 shadow-sm ring-1 ring-slate-200 sm:p-9">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-2xl text-[15px] text-slate-600">
              {subtitle}
            </p>
          )}
        </header>
        <div className="space-y-4 text-base leading-relaxed text-slate-700">
          {children}
        </div>
      </div>
    </section>
  )
}
