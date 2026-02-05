import Link from 'next/link';

export default function LandingHeader() {
  return (
    <header className="w-full bg-gradient-to-r from-[#f6faff] to-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 rounded-xl h-9 w-9 flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="font-bold text-xl text-gray-900">RecruiterAI</span>
        </div>
        {/* Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-12 text-base font-medium text-gray-600">
          <li><Link href="#features" className="hover:text-gray-900 transition">Features</Link></li>
          <li><Link href="#how-it-works" className="hover:text-gray-900 transition">How It Works</Link></li>
          <li><Link href="#pricing" className="hover:text-gray-900 transition">Pricing</Link></li>
          <li><Link href="#faq" className="hover:text-gray-900 transition">FAQ</Link></li>
        </ul>
        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link href="#login" className="text-gray-900 text-base font-medium">Log In</Link>
          <Link href="#start-trial" className="bg-blue-500 text-white font-bold text-base px-6 py-2 rounded-xl shadow-md hover:bg-blue-600 transition">
            Start Free Trial
          </Link>
        </div>
      </nav>
    </header>
  );
}
