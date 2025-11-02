import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app this would post to a backend.
    alert(`Thanks! We'll be in touch at ${email}`);
    setEmail('');
  };

  return (
    <footer className="w-full bg-black text-white">
      <section id="register" className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold">Be the first to register</h3>
              <p className="mt-2 max-w-xl text-white/70">
                Limited seats for an exclusive experience at Dubai Airports. Drop your email and we'll notify you the moment registration opens.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 flex max-w-xl items-center gap-3">
                <div className="flex w-full flex-1 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                  <Mail className="h-5 w-5 text-white/60" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="shrink-0 rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-orange-400"
                >
                  Notify Me
                </button>
              </form>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="mb-3 flex items-center gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4 text-orange-400" />
                Dubai International Airport (DXB)
              </div>
              <p className="text-sm text-white/70">
                Hosted by Dubai Airports • Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Dubai Airports — Event Experience</p>
          <a href="#home" className="text-xs font-medium text-white/80 hover:text-white">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
