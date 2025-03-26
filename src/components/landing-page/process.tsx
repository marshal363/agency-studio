export function Process() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
              Project Scope
          </div>
          
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
              Our Process,<br />Step by Step
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              From the initial proposal to the final product at your hand.<br />
              A clear view of what you can expect at every stage!
            </p>
          </div>
          
          {/* Desktop layout with zigzag cards - hidden on mobile */}
          <div className="hidden md:block w-full max-w-6xl mt-16 relative">
            <div className="relative min-h-[900px] md:min-h-[950px] lg:min-h-[1000px] w-full">
              {/* Background with subtle line pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_39px,rgba(0,0,0,.05)_1px),linear-gradient(90deg,transparent_39px,rgba(0,0,0,.05)_1px)] bg-[length:40px_40px]"></div>
              
              {/* Dotted connecting lines - all consistent style */}
              <div className="absolute top-[12%] left-[35%] w-[40%] border-t-2 border-dashed border-gray-200 dark:border-gray-700 z-10"></div>
              <div className="absolute top-[33%] left-[20%] w-[30%] border-t-2 border-dashed border-gray-200 dark:border-gray-700 z-10 transform rotate-[10deg]"></div>
              <div className="absolute top-[52%] left-[30%] w-[40%] border-t-2 border-dashed border-gray-200 dark:border-gray-700 z-10 transform -rotate-[15deg]"></div>
              <div className="absolute top-[65%] left-[25%] w-[40%] border-t-2 border-dashed border-gray-200 dark:border-gray-700 z-10 transform rotate-[12deg]"></div>
              <div className="absolute top-[76%] left-[38%] w-[15%] border-t-2 border-dashed border-gray-200 dark:border-gray-700 z-10"></div>
              
              {/* Card 1 - Proposal - Top Right */}
              <div className="absolute right-[12%] top-[5%] transform rotate-2 w-[300px] z-20 hover:z-50 transition-all duration-300">
                {/* Pushpin */}
                <div className="absolute -top-6 right-[30%] w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg z-20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-red-500 border border-red-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] p-2 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)]">
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-2xl">
                    <div className="text-orange-500 dark:text-orange-300 text-xl font-light mb-2 font-mono">01</div>
                    <h3 className="text-3xl font-bold mb-3 text-left">Proposal</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      Detailed outline of our<br /> service tailored for<br /> your needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Wireframe - Top Left */}
              <div className="absolute left-[10%] top-[10%] transform -rotate-3 w-[300px] z-20 hover:z-50 transition-all duration-300">
                {/* Pushpin */}
                <div className="absolute -top-6 left-[25%] w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg z-20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500 border border-blue-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] p-2 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)]">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl">
                    <div className="text-blue-500 dark:text-blue-300 text-xl font-light mb-2 font-mono">02</div>
                    <h3 className="text-3xl font-bold mb-3 text-left">Wireframe</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      Ideation and wireframing<br /> to make sure UX flow is<br /> perfect.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Design Concept - Middle Right */}
              <div className="absolute right-[15%] top-[33%] transform rotate-1 w-[300px] z-20 hover:z-50 transition-all duration-300">
                {/* Pushpin */}
                <div className="absolute -top-6 left-[35%] w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg z-20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-purple-500 border border-purple-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] p-2 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)]">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-2xl">
                    <div className="text-purple-500 dark:text-purple-300 text-xl font-light mb-2 font-mono">03</div>
                    <h3 className="text-3xl font-bold mb-3 text-left">Design Concept</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      1-2 concepts and variants<br /> to achieve what you<br /> want.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card 4 - Final Design - Bottom Left */}
              <div className="absolute left-[10%] top-[48%] transform -rotate-2 w-[300px] z-20 hover:z-50 transition-all duration-300">
                {/* Pushpin */}
                <div className="absolute -top-6 right-[28%] w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg z-20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-red-500 border border-red-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] p-2 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)]">
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-2xl">
                    <div className="text-orange-500 dark:text-orange-300 text-xl font-light mb-2 font-mono">04</div>
                    <h3 className="text-3xl font-bold mb-3 text-left">Final Design</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      Smooth delivery and<br /> the support you can<br /> always count on.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card 5 - Development - Bottom Right */}
              <div className="absolute right-[12%] top-[62%] transform rotate-3 w-[300px] z-20 hover:z-50 transition-all duration-300">
                {/* Pushpin */}
                <div className="absolute -top-6 right-[25%] w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg z-20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-blue-500 border border-blue-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] p-2 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)]">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl">
                    <div className="text-blue-500 dark:text-blue-300 text-xl font-light mb-2 font-mono">05</div>
                    <h3 className="text-3xl font-bold mb-3 text-left">Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      Senior full-stack devs<br /> and Framer experts are<br /> here to help.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* "Your all in one design partner" text element - positioned to avoid overlap */}
              <div className="absolute left-[25%] top-[76%] text-left z-30">
                <div className="relative bg-white dark:bg-gray-800 rounded-xl p-4 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)]">
                  <p className="text-base md:text-lg font-medium">
                    Your <span className="text-red-500 font-bold">all in one</span><br /> 
                    design partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
            
          {/* Mobile layout with vertically arranged cards - visible only on mobile */}
          <div className="md:hidden w-full mt-8 flex flex-col items-center">
            <div className="relative w-[280px] space-y-6">
              {/* Card 1 - Proposal */}
              <div className="relative transform rotate-2 w-full">
                {/* Pushpin */}
                <div className="absolute -top-4 left-10 w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg z-10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-red-500 border border-red-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0_12px_20px_-5px_rgba(0,0,0,0.2)] p-1.5">
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-xl">
                    <div className="text-orange-500 dark:text-orange-300 text-xl font-light mb-2 font-mono">01</div>
                    <h3 className="text-3xl font-bold mb-3 text-left">Proposal</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      Detailed outline of our<br /> service tailored for<br /> your needs.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card 2 - Wireframe */}
              <div className="relative transform -rotate-1 w-full">
                {/* Pushpin */}
                <div className="absolute -top-4 right-14 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg z-10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-blue-500 border border-blue-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0_12px_20px_-5px_rgba(0,0,0,0.2)] p-1.5">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                    <div className="text-blue-500 dark:text-blue-300 text-xl font-light mb-2 font-mono">02</div>
                    <h3 className="text-3xl font-bold mb-3 text-left">Wireframe</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      Ideation and wireframing<br /> to make sure UX flow is<br /> perfect.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card 3 - Design Concept */}
              <div className="relative transform rotate-2 w-full">
                {/* Pushpin */}
                <div className="absolute -top-4 left-12 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg z-10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-purple-500 border border-purple-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0_12px_20px_-5px_rgba(0,0,0,0.2)] p-1.5">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-xl">
                    <div className="text-purple-500 dark:text-purple-300 text-xl font-light mb-2 font-mono">03</div>
                    <h3 className="text-3xl font-bold mb-3 text-left">Design Concept</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      1-2 concepts and variants<br /> to achieve what you<br /> want.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card 4 - Final Design */}
              <div className="relative transform -rotate-2 w-full">
                {/* Pushpin */}
                <div className="absolute -top-4 left-14 w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg z-10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-red-500 border border-red-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0_12px_20px_-5px_rgba(0,0,0,0.2)] p-1.5">
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-xl">
                    <div className="text-orange-500 dark:text-orange-300 text-xl font-light mb-2 font-mono">04</div>
                    <h3 className="text-3xl font-bold mb-3 text-left">Final Design</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      Smooth delivery and<br /> the support you can<br /> always count on.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card 5 - Development */}
              <div className="relative transform -rotate-1 w-full">
                {/* Pushpin */}
                <div className="absolute -top-4 right-12 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg z-10 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-blue-500 border border-blue-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0_12px_20px_-5px_rgba(0,0,0,0.2)] p-1.5">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                    <div className="text-blue-500 dark:text-blue-300 text-xl font-light mb-2 font-mono">05</div>
                    <h3 className="text-3xl font-bold mb-3 text-left">Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      Senior full-stack devs<br /> and Framer experts are<br /> here to help.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* "Your all in one design partner" text for mobile */}
              <div className="relative w-full mt-4">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-md inline-block">
                  <p className="text-base font-medium">
                    Your <span className="text-red-500 font-bold">all in one</span> design partner.
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