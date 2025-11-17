import { PenLine, Layers, LineChart } from 'lucide-react'

export default function Modes() {
  const modes = [
    {
      key: 'Stream',
      icon: <PenLine className="h-5 w-5" />,
      title: 'Stream Mode',
      desc: 'Low‑friction daily journaling on a calm vertical timeline. Mix handwriting, voice, and text.'
    },
    {
      key: 'Canvas',
      icon: <Layers className="h-5 w-5" />,
      title: 'Canvas Mode',
      desc: 'Spatial thinking for complex decisions. Spread ideas out, cluster, and see relationships.'
    },
    {
      key: 'Insights',
      icon: <LineChart className="h-5 w-5" />,
      title: 'Insights Mode',
      desc: 'Long‑term patterns, beautifully visualized. Your memory across months, not moments.'
    }
  ]

  return (
    <section id="modes" className="bg-[#0a0a0b] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Three modes. One mind.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            Daily flow for momentum. Spatial canvas for depth. Visual memory for meaning. Your work and your life — finally connected.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {modes.map((m) => (
            <div key={m.key} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10">
              <div className="mb-3 inline-flex items-center gap-2 text-white/80">
                {m.icon}
                <span className="text-sm font-medium">{m.title}</span>
              </div>
              <p className="text-sm text-white/70">{m.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
              <ul className="mt-4 space-y-2 text-xs text-white/60">
                {m.key === 'Stream' && (
                  <>
                    <li>• Pencil, voice, typing — switch seamlessly</li>
                    <li>• Contextual prompts that stay out of the way</li>
                    <li>• Morning → evening continuity</li>
                  </>
                )}
                {m.key === 'Canvas' && (
                  <>
                    <li>• Spatial clustering and relationships</li>
                    <li>• Think out loud with audio + sticky notes</li>
                    <li>• Move from chaos to clarity</li>
                  </>
                )}
                {m.key === 'Insights' && (
                  <>
                    <li>• Pattern detection over months</li>
                    <li>• Emotional + strategic signals together</li>
                    <li>• Memory that compounds</li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
