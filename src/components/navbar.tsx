import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <header className="w-full py-5 absolute top-0 left-0 right-0 z-50">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-[#ff5722] w-[42px] h-[42px] rounded-lg flex items-center justify-center shadow-[0_2px_8px_rgba(255,87,34,0.25)] relative">
              <svg 
                viewBox="0 0 24 24"
                width="17"
                height="17"
                className="text-white relative -left-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 6 9 12 15 18"></polyline>
              </svg>
            </div>
            <span className="text-[22px] font-semibold text-zinc-800 dark:text-white tracking-tight">skale</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-[15px] font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white transition-colors">
              Our Services
            </a>
            <a href="#pricing" className="text-[15px] font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-[15px] font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#case-studies" className="text-[15px] font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white transition-colors">
              Case Studies
            </a>
          </nav>

          {/* CTA Button */}
          <Link href="/book-call">
            <Button className="hidden md:flex items-center gap-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 px-5 py-2.5 h-10 transition-colors">
              <span className="text-[15px] font-medium">Got an idea?</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-white">
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </div>
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link href="/book-call">
              <Button variant="outline" className="flex items-center gap-1 rounded-full h-9">
                <span className="text-[14px]">Book a call</span>
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M13 5l7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
            <Button className="md:hidden" variant="ghost" size="icon">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 