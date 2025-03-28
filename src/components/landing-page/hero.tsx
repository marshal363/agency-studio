import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full pt-28 pb-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
        {/* Testimonial bubble */}
        <div className="mx-auto w-fit bg-white dark:bg-zinc-900 rounded-full py-3.5 px-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center gap-4 mb-16">
          <div className="flex -space-x-3">
            <div className="bg-[#ffd4d4] rounded-full w-[34px] h-[34px] border-[2.5px] border-white dark:border-zinc-900 flex items-center justify-center"></div>
            <div className="bg-[#d4e4ff] rounded-full w-[34px] h-[34px] border-[2.5px] border-white dark:border-zinc-900 flex items-center justify-center"></div>
            <div className="bg-[#d4ffd4] rounded-full w-[34px] h-[34px] border-[2.5px] border-white dark:border-zinc-900 flex items-center justify-center"></div>
          </div>
          <span className="text-[17px] text-zinc-500 dark:text-zinc-400">
            54+ startups & founders chose skale.solutions
          </span>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-700 dark:text-white mx-auto">
              <span className="block">Premium Websites for</span>
              <span className="block">SaaS & Startups</span>
            </h1>
            <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-6">
              Get a website that will fulfill your business goals and drive conversions.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-4 mt-16">
            <Link href="/book-call">
              <Button 
                className="bg-[#ff5722] hover:bg-[#ff5722]/90 text-white rounded-full px-8 py-0 h-[58px] text-[17px] font-medium flex items-center gap-3 shadow-[0_2px_8px_rgba(255,87,34,0.25)]" 
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="22" 
                  height="22" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-1"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                </svg>
                Book a 30-min call
              </Button>
            </Link>
            
            <div className="flex items-center mt-2">
              <div className="w-[7px] h-[7px] rounded-full bg-[#ff5722] mr-2.5 flex-shrink-0"></div>
              <p className="text-[15px] text-zinc-400 dark:text-zinc-500">
                2 spots available
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-900 -z-10"></div>
    </section>
  );
} 