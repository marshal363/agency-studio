import React from "react";

export function Brands() {
  return (
    <section className="w-full py-16 border-b border-gray-100 dark:border-gray-800">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          {/* Top Row - Brand Logos */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              2 spots available
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-center opacity-70">
            {/* We'll use gray-scale logos with consistent styling */}
            <div className="flex items-center justify-center grayscale">
              <span className="text-2xl font-light text-gray-400 dark:text-gray-500">Motivation</span>
            </div>
            <div className="flex items-center justify-center grayscale">
              <span className="text-2xl font-light text-gray-400 dark:text-gray-500">dunderfelt</span>
            </div>
            <div className="flex items-center justify-center grayscale">
              <span className="text-xl font-light text-gray-400 dark:text-gray-500">CIIII</span>
            </div>
            <div className="flex items-center justify-center grayscale">
              <span className="text-2xl font-light text-gray-400 dark:text-gray-500">STELLANS</span>
            </div>
            <div className="flex items-center justify-center grayscale">
              <span className="text-2xl font-light text-gray-400 dark:text-gray-500">MARI</span>
            </div>
          </div>
          
          {/* Case Study Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
            {/* Email Service Case Study */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[240px] bg-blue-50 p-6 flex flex-col">
              <div className="font-medium mb-2">Features you will love.</div>
              <div className="grid grid-cols-3 gap-4 mt-auto">
                <div className="bg-blue-100 rounded-lg h-20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-md bg-blue-500"></div>
                </div>
                <div className="bg-blue-100 rounded-lg h-20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-md bg-blue-500"></div>
                </div>
                <div className="bg-blue-100 rounded-lg h-20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-md bg-blue-500"></div>
                </div>
              </div>
            </div>
            
            {/* Secret Case Study */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[240px] bg-black p-6 flex flex-col justify-center items-center">
              <h3 className="text-white text-xl font-semibold mb-4">Stop Being Your Industry&apos;s</h3>
              <h3 className="text-white text-xl font-semibold mb-2">Best-Kept Secret</h3>
              <div className="w-full h-28 bg-[rgba(255,255,255,0.1)] rounded-lg mt-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-md bg-[rgba(255,255,255,0.2)]"></div>
              </div>
            </div>
            
            {/* Web3 Case Study */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[240px] bg-blue-900 p-6 flex flex-col justify-center items-center">
              <h3 className="text-white text-xl font-semibold mb-1">Bringing Web3</h3>
              <h3 className="text-white text-xl font-semibold mb-4">To The World</h3>
              <div className="w-full h-28 mt-4 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-700 rounded-lg"></div>
                  <div className="absolute bottom-8 left-1/4 w-12 h-12 bg-blue-500 rounded-md"></div>
                  <div className="absolute bottom-8 right-1/4 w-12 h-12 bg-blue-500 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 