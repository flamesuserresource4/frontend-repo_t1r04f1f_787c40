import { Calendar, MapPin, Plane, Ticket } from 'lucide-react';

const Item = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-sm backdrop-blur transition hover:bg-white/10">
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-1 text-sm text-white/70">{desc}</p>
  </div>
);

export default function Highlights() {
  return (
    <section id="highlights" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Event Highlights</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Discover what's waiting for you at Dubai International — from hands-on demos to visionary keynotes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Item icon={Calendar} title="12–13 March 2025" desc="Two days of insights, showcases, and networking in the heart of the airport." />
          <Item icon={MapPin} title="Dubai International" desc="Hosted by Dubai Airports with access to exclusive airside experiences." />
          <Item icon={Plane} title="Seamless Journeys" desc="See how biometrics, digital wallets, and smart passes elevate every step." />
          <Item icon={Ticket} title="Interactive Boarding" desc="Explore a tactile, interactive boarding pass experience powered by fintech." />
        </div>
      </div>
    </section>
  );
}
