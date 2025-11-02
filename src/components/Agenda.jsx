import { Clock, Star } from 'lucide-react';

const Session = ({ time, title, speaker }) => (
  <div className="relative rounded-xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur">
    <div className="mb-2 flex items-center gap-2 text-sm text-white/70">
      <Clock className="h-4 w-4" />
      <span>{time}</span>
    </div>
    <h4 className="text-base font-semibold">{title}</h4>
    {speaker ? <p className="mt-1 text-sm text-white/70">{speaker}</p> : null}
  </div>
);

export default function Agenda() {
  return (
    <section id="agenda" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mb-8 flex items-center gap-3">
          <Star className="h-5 w-5 text-orange-400" />
          <h2 className="text-2xl font-semibold sm:text-3xl">Agenda Snapshot</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-5">
            <Session time="09:30" title="Opening Keynote: The Airport as a Platform" speaker="Dubai Airports Leadership" />
            <Session time="10:30" title="Frictionless Payments & Duty Free 2.0" speaker="Partners & Ecosystem" />
            <Session time="11:30" title="Designing the Interactive Boarding Pass" speaker="Product & Design" />
          </div>
          <div className="space-y-5">
            <Session time="13:30" title="Biometrics, Identity, and Trust" speaker="Security & Innovation" />
            <Session time="14:30" title="From Lounge to Gate: Personalised Journeys" speaker="Experience Teams" />
            <Session time="16:00" title="Runway Demos & Networking" speaker="All Participants" />
          </div>
        </div>
      </div>
    </section>
  );
}
