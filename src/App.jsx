import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Agenda from './components/Agenda';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      {/* Simple top navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <span className="text-sm font-semibold tracking-wide">Dubai Airports</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#highlights" className="hover:text-white">Highlights</a>
            <a href="#agenda" className="hover:text-white">Agenda</a>
            <a href="#register" className="rounded-md bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Register</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Highlights />
        <Agenda />
      </main>

      <Footer />
    </div>
  );
}

export default App;
