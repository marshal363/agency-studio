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
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950 dark:to-orange-950 p-10 flex flex-col items-center text-center h-full">
                <div className="mb-10 w-full">
                  <div className="bg-white dark:bg-gray-800 rounded-full p-4 inline-flex items-center shadow-md">
                    <div className="text-gray-800 dark:text-gray-200 text-base font-medium mr-3">Turn on</div>
                    <div className="text-gray-900 dark:text-white font-bold text-xl">Growth</div>
                    <div className="ml-5 w-16 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full relative flex items-center p-1">
                      <div className="w-6 h-6 bg-white rounded-full absolute right-1 shadow-md"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Success as a Service</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We have been transforming SaaS products for over 5 years by designing unique interfaces and driving growth.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Conversions Card */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 p-10 flex flex-col items-center text-center h-full relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>
                <div className="relative z-10 mb-10">
                  <div className="text-white text-7xl font-bold mb-5" style={{ textShadow: "0 2px 10px rgba(255,255,255,0.4)" }}>
                    200<span className="text-4xl align-super">%</span>
                  </div>
                  <div className="mt-3 bg-white/20 text-white font-semibold px-8 py-3 rounded-full shadow-lg">
                    Conversions
                  </div>
                </div>
                <div className="mt-auto relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-white">Conversion-Focused Design</h3>
                  <p className="text-white/90">
                    Websites so stunning that it will increases your conversion rate by 120%, decrease the bounce-rate and improve engagement.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 dark:from-pink-950 dark:to-orange-950 p-10 flex flex-col items-center text-center h-full">
                <div className="mb-10 w-full">
                  <div className="text-gray-800 dark:text-gray-200 text-lg font-medium mb-5">
                    Stats will speak for itself
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium px-6 py-3 rounded-full flex justify-between items-center shadow-md">
                      <span>User Retention</span>
                      <span className="font-bold">+80%</span>
                    </div>
                    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium px-6 py-3 rounded-full flex justify-between items-center shadow-sm">
                      <span>Leads</span>
                      <span className="text-orange-500 font-bold">+150%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Stay Ahead of the Market</h3>
                  <p className="text-gray-600 dark:text-gray-400">
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