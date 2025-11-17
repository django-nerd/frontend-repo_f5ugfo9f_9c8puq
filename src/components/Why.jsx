import { Shield, Cpu, Mic, PenTool } from 'lucide-react'

export default function Why() {
  const features = [
    { icon: <PenTool className="h-5 w-5" />, title: 'Daily habit', text: 'A gentle rhythm that keeps you coming back. The opposite of noisy tools.' },
    { icon: <Cpu className="h-5 w-5" />, title: 'Intelligent partner', text: 'Context‑aware AI that remembers, connects, and nudges at the right moment.' },
    { icon: <Mic className="h-5 w-5" />, title: 'Truly multi‑modal', text: 'Handwriting, voice, and text — captured and connected.' },
    { icon: <Shield className="h-5 w-5" />, title: 'Privacy‑first', text: 'On‑device processing when possible. Your thoughts are yours.' }
  ]

  return (
    <section id="why" className="bg-[#0b0b0c] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Why this wins</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            A daily journaling habit ensures retention. High‑value canvas sessions justify premium pricing. Long‑term memory creates an emotional moat.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="mb-2 flex items-center gap-2 text-white/80">
                {f.icon}
                <span className="text-sm font-medium">{f.title}</span>
              </div>
              <p className="text-sm text-white/70">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
          <p className="text-sm text-white/80">
            "An AI that forgets after each session is just a chatbot. An AI that remembers your journey becomes irreplaceable."
          </p>
        </div>
      </div>
    </section>
  )
}
