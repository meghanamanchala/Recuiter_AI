import LandingHeader from './components/LandingHeader';
import { ArrowRight, PlayCircle, Users, ScanLine, Calendar, MessageSquare, Triangle, ArrowUpRight, RefreshCw, Square, Mail } from 'lucide-react';
import FaqItem from './components/FaqItem';
import LandingFooter from './components/LandingFooter';

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="min-h-screen w-full bg-gradient-to-br from-[#f6faff] to-white pt-24 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start overflow-hidden">
        {/* ======================== Hero Section ======================== */}
        <section className="w-full max-w-3xl mx-auto flex flex-col items-center text-center relative" style={{ minHeight: '520px' }}>
          {/* Floating message bubbles around headline */}
          <div className=" hidden md:block absolute left-0 top-8 -translate-x-[100%] md:-translate-x-[110%] z-10 float-bubble float-delay-1">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 text-gray-500 text-base min-w-[220px]">
              <span className="inline-block h-4 w-4 bg-gray-200 rounded-full"></span>
              We've been reviewing resumes for 3 weeks...
            </div>
          </div>
          <div className="hidden md:block absolute left-1/2 top-16 translate-x-[100%] md:translate-x-[120%] z-10 float-bubble float-delay-2">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 text-gray-500 text-base min-w-[220px]">
              <span className="inline-block h-4 w-4 bg-gray-200 rounded-full"></span>
              Still waiting to hear back from candidates
            </div>
          </div>
          <div className="hidden md:block absolute left-1/2 bottom-0 mb-8 -translate-x-[150%] md:-translate-x-[180%] z-10 float-bubble float-delay-3">
            <div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-3 text-gray-500 text-base min-w-[220px]">
              <span className="inline-block h-4 w-4 bg-gray-200 rounded-full"></span>
              Our best candidate just accepted another offer
            </div>
          </div>
          <div className="hidden md:block absolute left-1/2 bottom-0 mb-8 translate-x-[100%] md:translate-x-[130%] z-10 float-bubble float-delay-4">
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
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight relative z-20">
            Every Hire, <span className="text-blue-600">Faster</span> and <span className="text-blue-700">Better</span>
          </h1>
          {/* Subheadline/description */}
          <p className="max-w-xl mx-auto text-gray-600 mb-8 sm:text-lg text-lg relative z-20">
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

        {/* ======================== Features Section ======================== */}
        <section className="w-full py-35 bg-transparent flex flex-col items-center justify-center">
          <div className="mb-10 text-center">
            <span className="text-blue-600 font-semibold text-md tracking-wide uppercase" style={{ letterSpacing: '0.05em' }}>How It Works</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight" style={{ lineHeight: 1.15 }}>
              AI Recruiting Software That Works<br className="hidden md:block" />Like Your Own <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">HR Team</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-normal">Build powerful hiring workflows in minutes—no code required.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl px-2 sm:px-0 justify-center items-stretch">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 min-w-0 sm:min-w-[320px] flex flex-col items-start overflow-hidden w-full">
              <h3 className="font-bold text-lg text-gray-900 mb-2 text-left">Candidate Screening & Scheduling</h3>
              <p className="text-gray-500 mb-6 text-left">AI reviews every application and schedules qualified candidates automatically.</p>
                <div className="flex items-center w-full justify-center mt-auto gap-2">
                  {/* Applications Icon and Label */}
                  <div className="flex flex-col items-center min-w-0 flex-1">
                    <span className="bg-blue-600 text-white rounded-full p-3 mb-1"><Users size={22} /></span>
                    <span className="text-xs text-gray-700 font-semibold whitespace-nowrap">Applications</span>
                  </div>
                  {/* Diamond connector and label */}
                  <div className="flex flex-col items-center min-w-0 flex-1">
                    <div className="flex flex-col items-center">
                      <span className="bg-gray-100 text-gray-600 rounded-lg px-3 py-1 font-semibold text-xs shadow-sm flex items-center justify-center mb-1" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', minWidth: 48, minHeight: 22 }}>AI Screen</span>
                    </div>
                  </div>
                  {/* Auto Schedule Icon and Label */}
                  <div className="flex flex-col items-center min-w-0 flex-1">
                    <span className="bg-purple-400 text-white rounded-full p-3 mb-1"><Calendar size={22} /></span>
                    <span className="text-xs text-gray-700 font-semibold whitespace-nowrap">Auto Schedule</span>
                  </div>
                </div>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 min-w-0 sm:min-w-[320px] flex flex-col items-start overflow-hidden w-full">
              <h3 className="font-bold text-lg text-gray-900 mb-2 text-left">Multi-Round Interview Automation</h3>
              <p className="text-gray-500 mb-6 text-left">Conduct AI-powered interviews that adapt in real time and quickly surface top performers.</p>
                <div className="flex items-center w-full justify-center mt-auto gap-2">
                  {/* AI Interview Icon and Label */}
                  <div className="flex flex-col items-center min-w-0 flex-1">
                    <span className="bg-blue-600 text-white rounded-full p-3 mb-1"><MessageSquare size={22} /></span>
                    <span className="text-xs text-gray-700 font-semibold whitespace-nowrap">AI Interview</span>
                  </div>
                  {/* Diamond connector and label */}
                  <div className="flex flex-col items-center min-w-0 flex-1">
                    <div className="flex flex-col items-center">
                      <span className="bg-gray-100 text-gray-600 rounded-lg px-3 py-1 font-semibold text-xs shadow-sm flex items-center justify-center mb-1" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', minWidth: 48, minHeight: 22 }}>Evaluate</span>
                    </div>
                  </div>
                  {/* Advance Icon and Label */}
                  <div className="flex flex-col items-center min-w-0 flex-1">
                    <span className="bg-purple-400 text-white rounded-full p-3 mb-1"><ArrowUpRight size={22} /></span>
                    <span className="text-xs text-gray-700 font-semibold whitespace-nowrap">Advance</span>
                  </div>
                </div>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 min-w-0 sm:min-w-[320px] flex flex-col items-start overflow-hidden w-full">
              <h3 className="font-bold text-lg text-gray-900 mb-2 text-left">Passive Candidate Re-engagement</h3>
              <p className="text-gray-500 mb-6 text-left">Automatically reconnect with past applicants when new roles open.</p>
                <div className="flex items-center w-full justify-center mt-auto gap-2">
                  {/* New Role Icon and Label */}
                  <div className="flex flex-col items-center min-w-0 flex-1">
                    <span className="bg-blue-600 text-white rounded-full p-3 mb-1"><RefreshCw size={22} /></span>
                    <span className="text-xs text-gray-700 font-semibold whitespace-nowrap">New Role</span>
                  </div>
                  {/* Diamond connector and label */}
                  <div className="flex flex-col items-center min-w-0 flex-1">
                    <div className="flex flex-col items-center">
                      <span className="bg-gray-100 text-gray-600 rounded-lg px-3 py-1 font-semibold text-xs shadow-sm flex items-center justify-center mb-1" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', minWidth: 48, minHeight: 22 }}>Match</span>
                    </div>
                  </div>
                  {/* Outreach Icon and Label */}
                  <div className="flex flex-col items-center min-w-0 flex-1">
                    <span className="bg-purple-400 text-white rounded-full p-3 mb-1"><Mail size={22} /></span>
                    <span className="text-xs text-gray-700 font-semibold whitespace-nowrap">Outreach</span>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* ======================== Impact & Results Section ======================== */}
        <section className="w-full py-35 bg-[#f3f7fd] flex flex-col items-center justify-center">
          <div className="mb-8 text-center">
            <span className="text-blue-600 font-semibold text-md tracking-wide uppercase" style={{ letterSpacing: '0.05em' }}>Impact & Results</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight" style={{ lineHeight: 1.15 }}>
              Real Results from <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">Real Companies</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-normal">Our customers see measurable improvements from day one.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl px-2 sm:px-0 justify-center items-stretch mt-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow p-8 flex-1 min-w-[300px] flex flex-col items-center">
              <span className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4"><svg width="28" height="28" fill="none" stroke="currentColor"><path d="M4 17l6-6 4 4 8-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 21V17h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">10×</div>
              <div className="font-bold text-gray-700 mb-1">Faster Screening</div>
              <div className="text-gray-400 text-sm text-center">Screen candidates in seconds, not hours</div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow p-8 flex-1 min-w-[300px] flex flex-col items-center">
              <span className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4"><svg width="28" height="28" fill="none" stroke="currentColor"><circle cx="14" cy="14" r="10" strokeWidth="2" /><path d="M14 8v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">70%</div>
              <div className="font-bold text-gray-700 mb-1">Faster Time-to-Hire</div>
              <div className="text-gray-400 text-sm text-center">From weeks to days on average</div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow p-8 flex-1 min-w-[300px] flex flex-col items-center">
              <span className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4"><svg width="28" height="28" fill="none" stroke="currentColor"><circle cx="14" cy="14" r="10" strokeWidth="2" /><path d="M10 14h8M14 10v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">25×</div>
              <div className="font-bold text-gray-700 mb-1">Interview Capacity</div>
              <div className="text-gray-400 text-sm text-center">Handle more candidates simultaneously</div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow p-8 flex-1 min-w-[300px] flex flex-col items-center">
              <span className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4"><svg width="28" height="28" fill="none" stroke="currentColor"><circle cx="14" cy="14" r="10" strokeWidth="2" /><path d="M10 14l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">95%</div>
              <div className="font-bold text-gray-700 mb-1">Application Completion</div>
              <div className="text-gray-400 text-sm text-center">Frictionless candidate experience</div>
            </div>
            {/* Card 5 */}
            <div className="bg-white rounded-2xl shadow p-8 flex-1 min-w-[300px] flex flex-col items-center">
              <span className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4"><svg width="28" height="28" fill="none" stroke="currentColor"><circle cx="14" cy="14" r="10" strokeWidth="2" /><path d="M10 18h8M10 14h8M10 10h8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">80%</div>
              <div className="font-bold text-gray-700 mb-1">Lower Costs</div>
              <div className="text-gray-400 text-sm text-center">Reduce cost-per-hire dramatically</div>
            </div>
          </div>
        </section>

        {/* ======================== Testimonials Section ======================== */}
          <section className="w-full py-35 bg-white flex flex-col items-center justify-center">
            <div className="mb-10 text-center">
              <span className="text-blue-600 font-semibold text-md tracking-wide uppercase" style={{ letterSpacing: '0.05em' }}>Testimonials</span>
              <h2 className="mt-4 text-4xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight" style={{ lineHeight: 1.15 }}>
                Loved by <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">Hiring Teams</span>
              </h2>
            </div>
            <div className="w-full max-w-7xl px-2 sm:px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <span className="bg-gray-200 text-gray-600 rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mr-4">S</span>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Sarah Chen</div>
                      <div className="text-gray-500 text-sm">VP of People, TechScale</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-blue-500 text-lg mr-1">★</span>
                    ))}
                  </div>
                  <div className="text-gray-700 text-base mb-2 italic">"RecruiterAI cut our time-to-hire by 60%. We went from struggling to fill roles in 45 days to closing positions in under 2 weeks."</div>
                </div>
                {/* Testimonial 2 */}
                <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <span className="bg-gray-200 text-gray-600 rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mr-4">M</span>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Marcus Johnson</div>
                      <div className="text-gray-500 text-sm">CEO & Founder, GrowthStack</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-blue-500 text-lg mr-1">★</span>
                    ))}
                  </div>
                  <div className="text-gray-700 text-base mb-2 italic">"The AI interviews are incredible. Candidates love the experience, and we get consistent, unbiased evaluations every time."</div>
                </div>
                {/* Testimonial 3 */}
                <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <span className="bg-gray-200 text-gray-600 rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg mr-4">E</span>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Emily Rodriguez</div>
                      <div className="text-gray-500 text-sm">Head of HR, Innovate Labs</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-blue-500 text-lg mr-1">★</span>
                    ))}
                  </div>
                  <div className="text-gray-700 text-base mb-2 italic">"We scaled from 20 to 150 employees in 8 months without adding a single recruiter. RecruiterAI made it possible."</div>
                </div>
              </div>
            </div>
          </section>

        {/* ======================== FAQ Section ======================== */}
        <section className="w-full py-20 bg-[#f3f7fd] flex flex-col items-center justify-center">
          <div className="mb-8 text-center">
            <span className="text-blue-600 font-semibold text-md tracking-wide uppercase" style={{ letterSpacing: '0.05em' }}>FAQ</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight" style={{ lineHeight: 1.15 }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="w-full max-w-3xl px-2 sm:px-0 flex flex-col gap-4">
            <FaqItem question="How does RecruiterAI's AI interviewing work?">
              Our AI conducts structured interviews via chat or voice, asking role-specific questions and follow-ups based on candidate responses. It evaluates answers against your criteria and provides detailed scorecards, ensuring consistent and fair assessments for every candidate.
            </FaqItem>
            <FaqItem question="Can I customize the screening criteria?">
              Absolutely. You define the skills, experience levels, and qualifications that matter for each role. Our AI learns your preferences and applies them consistently across all applications, ensuring only qualified candidates move forward.
            </FaqItem>
            <FaqItem question="How long does it take to get started?">
              Most teams are up and running within 30 minutes. Simply connect your job postings, define your criteria, and RecruiterAI handles the rest. No technical setup or integrations required to start screening candidates.
            </FaqItem>
            <FaqItem question="Is RecruiterAI suitable for high-volume hiring?">
              Yes, RecruiterAI is designed to scale. Whether you're hiring 10 or 10,000 candidates, our AI processes applications instantly and can conduct unlimited simultaneous interviews without quality degradation.
            </FaqItem>
            <FaqItem question="What about data privacy and compliance?">
              We're SOC 2 Type II certified and GDPR compliant. All candidate data is encrypted at rest and in transit. We never sell data, and you maintain full ownership and control of all information in your account.
            </FaqItem>
            <FaqItem question="Can candidates talk to a human if needed?">
              Of course. RecruiterAI augments your team, not replaces it. Candidates can request human interaction at any point, and you can configure when to automatically involve your recruiters in the process.
            </FaqItem>
          </div>
        </section>

        {/* ======================== Final CTA Section ======================== */}
        <section className="w-full py-28 flex flex-col items-center justify-center bg-white relative">
          <div className="max-w-3xl w-full mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Ready to Hire <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">Smarter</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 text-lg md:text-xl font-normal mb-8">
              Join 500+ companies that have transformed their hiring process with RecruiterAI. Start your free trial today—no credit card required.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
              <button
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl border-2 border-blue-600 flex items-center gap-2 transition-transform duration-200 hover:bg-blue-700 hover:scale-105 hover:-translate-y-1 active:scale-95 active:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                Start Free Trial <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-white border border-black/30 hover:border-black/60 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl flex items-center gap-2 transition-all duration-200 hover:bg-gray-50 hover:scale-105 hover:-translate-y-1 active:scale-95 active:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-100">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
                Schedule Demo
              </button>
            </div>
            <div className="text-gray-400 text-base">14-day free trial • No credit card required • Cancel anytime</div>
          </div>
        </section>
        <LandingFooter />
      </main>
    </>
  );
}
