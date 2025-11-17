import { AlertCircle, Blocks, MessageSquareWarning, Brain } from 'lucide-react'

export default function Problem() {
  const items = [
    {
      icon: <Blocks className="h-5 w-5" />,
      title: 'Fragmented thinking',
      text: 'Notes, docs, boards and chats — scattered across 5–7 tools that never talk to each other.'
    },
    {
      icon: <MessageSquareWarning className="h-5 w-5" />,
      title: 'No memory',
      text: 'Insights disappear. Conversations vanish. Patterns across months stay invisible.'
    },
    {
      icon: <AlertCircle className="h-5 w-5" />,
      title: 'No emotional context',
      text: 'Strategy tools ignore feelings; journaling apps ignore strategy. Real life needs both.'
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: 'AI without understanding',
      text: 'Chatbots reset each session. Quillio builds long‑term memory that understands your journey.'
    }
  ]

  return (
    <section id="problem" className="bg-[#0b0b0c] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">The fragmented thinking crisis</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
            Daily reflections, strategic plans, and emotional processing happen in different places. The dots never connect. Quillio sees the whole picture.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="mb-2 flex items-center gap-2 text-white/80">
                {item.icon}
                <span className="text-sm font-medium">{item.title}</span>
              </div>
              <p className="text-sm text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
