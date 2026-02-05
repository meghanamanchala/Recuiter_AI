import Link from 'next/link';

export default function LandingHeader() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm px-8 py-4 flex items-center justify-between sticky top-0 left-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between w-full gap-12">
        {/* Logo */}
        <div className="flex items-center gap-4 pr-6 border-r border-gray-200">
          <div className="bg-blue-500 rounded-xl h-9 w-9 flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <span className="font-bold text-xl text-gray-900">RecruiterAI</span>
        </div>
        {/* Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-14 text-base font-medium text-gray-600">
          <li><Link href="#features" className="hover:text-gray-900 transition">Features</Link></li>
          <li><Link href="#how-it-works" className="hover:text-gray-900 transition">How It Works</Link></li>
          <li><Link href="#pricing" className="hover:text-gray-900 transition">Pricing</Link></li>
          <li><Link href="#faq" className="hover:text-gray-900 transition">FAQ</Link></li>
        </ul>
        {/* Actions */}
        <div className="flex items-center gap-8 pl-6 border-l border-gray-200">
          <Link href="#login" className="text-gray-900 text-base font-medium">Log In</Link>
          <Link href="#start-trial" className="bg-blue-500 text-white font-bold text-base px-6 py-2 rounded-xl shadow-md hover:bg-blue-600 transition">
            Start Free Trial
          </Link>
        </div>
      </nav>
    </header>
  );
}
