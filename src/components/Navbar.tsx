import { Atom, Globe2 } from 'lucide-react';

export default function Navbar() {
  return (
    // Navbar container fix to top and middle of the screen with max width and centered
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl mx-auto mt-8 px-6 py-4 backdrop-blur-xl bg-white/8 border border-white/10 rounded-full shadow-2xl z-20">
      <div className="flex items-center justify-between px-8">
        <div className="flex items-center gap-3">
          <Atom className="w-6 h-6 text-white" strokeWidth={2} />
          <span className="text-white text-lg font-medium">Programming Blogs</span>
        </div>

        <div className="flex items-center gap-8">
            <a href="/portfolio" className="text-white hover:text-white transition-colors text-md font-medium rounded hover:border-b-2 cursor-pointer ">Portfolio</a>
            <a href="/github" className="text-white hover:text-white transition-colors text-md font-medium rounded hover:border-b-2 cursor-pointer ">Github</a>

        </div>
      </div>
    </nav>
  );
}
