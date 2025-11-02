import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_60%_at_50%_0%,rgba(255,140,0,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6 sm:px-10">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-orange-400" /> Live • Dubai Airports
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Dubai Airports Fintech & Travel Innovation Summit
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          A modern experience exploring the future of payments, loyalty, and seamless journeys — where boarding passes become interactive and travel becomes delightful.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#register"
            className="rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Register Now
          </a>
          <a
            href="#agenda"
            className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            View Agenda
          </a>
        </div>
        <div className="mt-6 text-sm text-white/60">Dubai • United Arab Emirates</div>
      </div>
    </section>
  );
}
