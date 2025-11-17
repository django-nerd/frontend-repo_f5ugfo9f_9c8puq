import Spline from '@splinetool/react-spline'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#0a0a0b] text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient wash over 3D for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_20%,rgba(255,255,255,0.06),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 md:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-yellow-300" />
          Calm, intelligent thinking — every day
        </div>
        <h1 className="text-center text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Quillio — your AI thinking partner
        </h1>
        <p className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/80 sm:text-base">
          Seamlessly blend daily journaling with strategic decisions. Linear flow for your day. Spatial canvas for complex ideas. A memory that grows with you.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#modes" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#0a0a0b] transition hover:bg-white/90">
            Explore the modes
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#why" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10">
            Watch a calm demo
            <Play className="h-4 w-4" />
          </a>
        </div>

        {/* Trust row */}
        <div className="mt-10 grid grid-cols-2 gap-4 text-left text-xs text-white/60 sm:grid-cols-4">
          <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2">On-device privacy first</div>
          <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Voice • Handwriting • Text</div>
          <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Contextual memory</div>
          <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2">Calm, non‑intrusive AI</div>
        </div>
      </div>
    </section>
  )
}
