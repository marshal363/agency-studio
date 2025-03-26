export function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-md mb-8">
            <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">Our Services</span>
          </div>
          <div className="space-y-2 max-w-[900px] mb-10">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-gray-700 dark:text-gray-300">
              Crafting Designs
            </h2>
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-gray-700 dark:text-gray-300">
              That Drive Growth
            </h2>
          </div>
          <div className="mb-20">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Fits best for: Agencies, SaaS, Digital Creators, Businesses, E-Commerce.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {/* Growth Card */}
            <div className="relative transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.25)] p-3 border border-gray-100 dark:border-gray-700 overflow-hidden h-[420px]">
                {/* Top part (image/element) */}
                <div className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950 dark:to-orange-950 rounded-[24px] p-8 h-[200px] flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 inline-flex items-center shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
                    <div className="text-gray-800 dark:text-gray-200 text-base font-medium mr-2">Turn on</div>
                    <div className="text-gray-900 dark:text-white font-bold text-xl mr-3">Growth</div>
                    <div className="w-16 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full relative flex items-center p-1 shadow-[0_2px_10px_rgba(255,90,0,0.3)]">
                      <div className="w-6 h-6 bg-white rounded-full absolute right-1 shadow-[0_2px_5px_rgba(0,0,0,0.2)]"></div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom part (text content) */}
                <div className="p-6 bg-white dark:bg-black">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Success as a Service</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We have been transforming SaaS products for over 5 years by designing unique interfaces and driving growth.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Conversions Card */}
            <div className="relative transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.25)] p-3 border border-gray-100 dark:border-gray-700 overflow-hidden h-[420px]">
                {/* Top part (image/element) */}
                <div className="bg-gradient-to-br from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 rounded-[24px] p-8 h-[200px] flex flex-col items-center justify-center relative">
                  {/* Radial lines decoration */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, transparent 0%, transparent 30%), repeating-conic-gradient(from 0deg, rgba(255,255,255,0.1) 0deg 10deg, transparent 10deg 20deg)" }}></div>
                  
                  <div className="relative z-10">
                    <div className="text-white text-7xl font-bold mb-3 text-center" style={{ textShadow: "0 3px 12px rgba(255,255,255,0.5)" }}>
                      200<span className="text-4xl align-super">%</span>
                    </div>
                    <div className="mt-2 bg-white/20 text-white font-semibold px-8 py-3 rounded-full shadow-[0_3px_15px_rgba(0,0,0,0.25)] backdrop-blur-sm text-center">
                      Conversions
                    </div>
                  </div>
                </div>
                
                {/* Bottom part (text content) */}
                <div className="p-6 bg-white dark:bg-black">
                  <h3 className="text-2xl font-bold mb-3 text-white dark:text-white">Conversion-Focused Design</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Websites so stunning that it will increases your conversion rate by 120%, decrease the bounce-rate and improve engagement.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="relative transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.25)] p-3 border border-gray-100 dark:border-gray-700 overflow-hidden h-[420px]">
                {/* Top part (image/element) */}
                <div className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950 dark:to-orange-950 rounded-[24px] p-8 h-[200px] flex flex-col items-center justify-center">
                  <div className="mb-2 text-gray-800 dark:text-gray-200 text-lg font-medium text-center">
                    Stats will speak for itself
                  </div>
                  <div className="space-y-3 mt-3 w-full max-w-[250px]">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium px-6 py-3 rounded-full flex justify-between items-center shadow-[0_3px_15px_rgba(255,90,0,0.3)]">
                      <span>User Retention</span>
                      <span className="font-bold">+80%</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium px-6 py-3 rounded-full flex justify-between items-center shadow-[0_3px_12px_rgba(0,0,0,0.08)]">
                      <span>Leads</span>
                      <span className="text-orange-500 font-bold">+150%</span>
                    </div>
                  </div>
                </div>
                
                {/* Bottom part (text content) */}
                <div className="p-6 bg-white dark:bg-black">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Stay Ahead of the Market</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Designs that makes you and your venture shine in the crowd of similar looking websites. Be the one that leads the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 