import LandingHeader from './components/LandingHeader';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="min-h-screen w-full bg-gradient-to-br from-[#f6faff] to-white pt-24 pb-12 px-4 flex flex-col items-center justify-start overflow-hidden">
        {/* ======================== Hero Section ======================== */}
        <section className="w-full max-w-3xl mx-auto flex flex-col items-center text-center relative" style={{ minHeight: '520px' }}>
          {/* Floating message bubbles around headline */}
          <div className="absolute left-0 top-8 -translate-x-[100%] md:-translate-x-[110%] z-10 float-bubble float-delay-1">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 text-gray-500 text-base min-w-[220px]">
              <span className="inline-block h-4 w-4 bg-gray-200 rounded-full"></span>
              We've been reviewing resumes for 3 weeks...
            </div>
          </div>
          <div className="absolute left-1/2 top-16 translate-x-[100%] md:translate-x-[120%] z-10 float-bubble float-delay-2">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 text-gray-500 text-base min-w-[220px]">
              <span className="inline-block h-4 w-4 bg-gray-200 rounded-full"></span>
              Still waiting to hear back from candidates
            </div>
          </div>
          <div className="absolute left-1/2 bottom-0 mb-8 -translate-x-[150%] md:-translate-x-[180%] z-10 float-bubble float-delay-3">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 text-gray-500 text-base min-w-[220px]">
              <span className="inline-block h-4 w-4 bg-gray-200 rounded-full"></span>
              Our best candidate just accepted another offer
            </div>
          </div>
          <div className="absolute left-1/2 bottom-0 mb-8 translate-x-[100%] md:translate-x-[130%] z-10 float-bubble float-delay-4">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 text-gray-500 text-base min-w-[220px]">
              <span className="inline-block h-4 w-4 bg-gray-200 rounded-full"></span>
              Interview scheduling is a nightmare
            </div>
          </div>
          {/* Platform label above headline */}
          <div className="mb-6 relative z-20">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-5 py-2 rounded-full shadow-sm">AI-Powered Recruiting Platform</span>
          </div>
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight relative z-20">
            Every Hire, <span className="text-blue-600">Faster</span> and <span className="text-blue-700">Better</span>
          </h1>
          {/* Subheadline/description */}
          <p className="max-w-xl mx-auto text-gray-600 mb-8 text-lg relative z-20">
            Stop losing top candidates to slow hiring. RecruiterAI automates screening, scheduling, and interviews—so you hire the best talent before your competitors do.
          </p>
          {/* CTA buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8 relative z-20">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-md hover:bg-blue-700 flex items-center gap-2">
              Start Hiring Smarter <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-white border-2 border-blue-600 text-blue-700 px-6 py-3 rounded-xl font-semibold text-base shadow-md hover:bg-blue-50 flex items-center gap-2">
              <PlayCircle className="h-5 w-5" /> See How It Works
            </button>
          </div>
        </section>

        {/* Floating points (dots) below CTA buttons, carousel indicator */}
        <div className="flex flex-col items-center mb-2 relative z-20">
          <div className="flex gap-2 justify-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="h-3 w-3 rounded-full bg-gray-200 inline-block"></span>
            ))}
          </div>
        </div>

        {/* 500+ companies and Trusted by section below hero */}
        <div className="flex flex-col items-center mt-24 mb-2">
          <span className="text-gray-900 text-sm font-medium font-bold mb-4">500+ companies already hiring smarter</span>
          <section className="py-4 lg:py-8 w-full flex flex-col items-center justify-center">
            <div className="mb-4">
              <p className="text-center text-gray-500 font-medium">Trusted by innovative companies worldwide</p>
            </div>
            <div className="relative w-full overflow-hidden flex justify-center">
              <div className="flex animate-scroll whitespace-nowrap items-center py-3" style={{ minWidth: 'max-content' }}>
                {Array(2).fill([
                  'NextGen', 'FutureTech', 'CloudFirst', 'DataDriven', 'TechCorp', 'InnovateCo', 'StartupHub', 'GrowthLabs',
                ]).flat().map((company, i) => (
                  <div key={i} className="flex-shrink-0 mx-6 lg:mx-10 group">
                    <div className="w-32 h-12 flex items-center justify-center rounded-lg bg-gray-100 border border-transparent hover:border-gray-300 transition-all grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
                      <span className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">{company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
