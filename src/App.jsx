import Hero from './components/Hero'
import Problem from './components/Problem'
import Modes from './components/Modes'
import Why from './components/Why'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0b]">
      <Hero />
      <section id="tagline" className="bg-[#0a0a0b] px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-white/70">
            Quillio blends a calm journaling rhythm with a powerful canvas for deep work. It remembers your journey and helps you ship what matters. Minimal, private, and thoughtfully intelligent.
          </p>
        </div>
      </section>
      <Modes />
      <Problem />
      <Why />
      <Footer />
    </div>
  )
}

export default App
