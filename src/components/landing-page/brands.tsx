import * as React from "react";
import Link from "next/link";
import { Mail, Lock, LayoutGrid } from "lucide-react";

export function Brands() {
  return (
    <section className="w-full py-16 border-b border-gray-100 dark:border-gray-800">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          {/* Featured Projects Heading */}
          <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-md mb-8">
            <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">Featured Projects</span>
          </div>
          
          {/* Project Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {/* Email Service Project */}
            <div className="relative transform transition-all duration-300 hover:-translate-y-2">
              <Link href="/projects/email-service" className="block h-full">
                <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.25)] p-3 border border-gray-100 dark:border-gray-700 overflow-hidden h-[420px]">
                  <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-gradient-to-b from-blue-400 to-blue-600 p-6 flex flex-col">
                    {/* Decorative Circles */}
                    <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-blue-500/20"></div>
                    <div className="absolute top-36 left-8 w-16 h-16 rounded-full bg-blue-300/20"></div>
                    
                    {/* Content */}
                    <div className="flex items-center justify-center grow py-8">
                      <Mail className="w-20 h-20 text-white/90" strokeWidth={1.5} />
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="text-white text-2xl font-bold mb-2">The best email, ever made.</h3>
                      <p className="text-blue-100 mb-4">Modern email service with advanced features</p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Email</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">SaaS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Secret Case Study */}
            <div className="relative transform transition-all duration-300 hover:-translate-y-2">
              <Link href="/projects/industry-secret" className="block h-full">
                <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.25)] p-3 border border-gray-100 dark:border-gray-700 overflow-hidden h-[420px]">
                  <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-gradient-to-b from-gray-700 to-gray-900 p-6 flex flex-col">
                    {/* Decorative Circles */}
                    <div className="absolute top-16 right-16 w-28 h-28 rounded-full bg-white/5"></div>
                    <div className="absolute bottom-40 left-8 w-20 h-20 rounded-full bg-white/5"></div>
                    
                    {/* Content */}
                    <div className="flex items-center justify-center grow py-8">
                      <Lock className="w-20 h-20 text-white/80" strokeWidth={1.5} />
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="text-white text-2xl font-bold mb-1">Stop Being Your Industry&apos;s</h3>
                      <h4 className="text-white text-xl font-semibold mb-4">Best-Kept Secret</h4>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Marketing</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Brand</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Web3 Case Study */}
            <div className="relative transform transition-all duration-300 hover:-translate-y-2">
              <Link href="/projects/web3-world" className="block h-full">
                <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.25)] p-3 border border-gray-100 dark:border-gray-700 overflow-hidden h-[420px]">
                  <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-gradient-to-b from-blue-800 to-blue-950 p-6 flex flex-col">
                    {/* Decorative Circles */}
                    <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-blue-500/20"></div>
                    <div className="absolute bottom-40 left-8 w-16 h-16 rounded-full bg-blue-400/20"></div>
                    <div className="absolute top-36 left-12 w-12 h-12 rounded-full bg-blue-300/20"></div>
                    
                    {/* Content */}
                    <div className="flex items-center justify-center grow py-8">
                      <LayoutGrid className="w-20 h-20 text-blue-200/90" strokeWidth={1.5} />
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="text-white text-2xl font-bold mb-1">Bringing Web3</h3>
                      <h4 className="text-white text-xl font-semibold mb-4">To The World</h4>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Web3</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">Blockchain</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 