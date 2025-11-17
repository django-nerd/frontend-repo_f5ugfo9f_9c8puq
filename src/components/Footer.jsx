export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] py-10 text-white/60">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs">© {new Date().getFullYear()} Quillio. All thinking is connected.</p>
        <div className="flex items-center gap-4 text-xs">
          <a href="#modes" className="hover:text-white">Modes</a>
          <a href="#problem" className="hover:text-white">Problem</a>
          <a href="#why" className="hover:text-white">Why</a>
        </div>
      </div>
    </footer>
  )
}
