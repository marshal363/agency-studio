export function Process() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-md mb-8">
              <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">Project Scope</span>
          </div>
          
          <div className="space-y-2 max-w-[900px] mb-10">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-gray-700 dark:text-gray-300">
              Our Process,
            </h2>
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-gray-700 dark:text-gray-300">
              Step by Step
            </h2>
            <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-6">
              From the initial proposal to the final product at your hand.<br />
              A clear view of what you can expect at every stage!
            </p>
          </div>
          
          {/* Desktop layout with zigzag cards - hidden on mobile */}
          <div className="hidden md:block w-full max-w-6xl mt-16 relative">
            <div className="relative min-h-[900px] md:min-h-[950px] lg:min-h-[1000px] w-full">
              {/* Background with subtle line pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_39px,rgba(0,0,0,.05)_1px),linear-gradient(90deg,transparent_39px,rgba(0,0,0,.05)_1px)] bg-[length:40px_40px]"></div>
              
              {/* Direct card-to-card connecting lines */}
              {/* Line from Card 1 to Card 2 */}
              <div className="absolute top-[12%] left-[42%] w-[30%] border-t-2 border-dashed border-gray-200 dark:border-gray-700 z-10"></div>
              
              {/* Line from Card 2 to Card 3 */}
              <div className="absolute top-[28%] left-[38%] w-[30%] border-t-2 border-dashed border-gray-200 dark:border-gray-700 z-10 transform rotate-[30deg]"></div>
              
              {/* Line from Card 3 to Card 4 */}
              <div className="absolute top-[45%] left-[40%] w-[28%] border-t-2 border-dashed border-gray-200 dark:border-gray-700 z-10 transform -rotate-[30deg]"></div>
              
              {/* Line from Card 4 to Card 5 */}
              <div className="absolute top-[60%] left-[35%] w-[32%] border-t-2 border-dashed border-gray-200 dark:border-gray-700 z-10 transform rotate-[25deg]"></div>
              
              {/* Line from Card 5 to Text */}
              <div className="absolute top-[78%] left-[35%] w-[15%] border-t-2 border-dashed border-gray-200 dark:border-gray-700 z-10 transform rotate-[-20deg]"></div>
              
              {/* Card 1 - Proposal - Top Right */}
              <div className="absolute right-[15%] top-[5%] transform rotate-2 w-[300px] z-20 hover:z-50 transition-all duration-300">
                {/* Pushpin */}
                <div className="absolute -top-7 right-[30%] w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-red-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] p-3 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-gray-700">
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-8 rounded-[24px]">
                    <div className="text-orange-500 dark:text-orange-300 text-2xl font-light mb-3 font-mono">01</div>
                    <h3 className="text-3xl font-bold mb-4 text-left">Proposal</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      Detailed outline of our<br /> service tailored for<br /> your needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Wireframe - Top Left */}
              <div className="absolute left-[15%] top-[15%] transform -rotate-3 w-[300px] z-20 hover:z-50 transition-all duration-300">
                {/* Pushpin */}
                <div className="absolute -top-7 left-[25%] w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-blue-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] p-3 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-gray-700">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-[24px]">
                    <div className="text-blue-500 dark:text-blue-300 text-2xl font-light mb-3 font-mono">02</div>
                    <h3 className="text-3xl font-bold mb-4 text-left">Wireframe</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      Ideation and wireframing<br /> to make sure UX flow is<br /> perfect.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Design Concept - Middle Right */}
              <div className="absolute right-[18%] top-[35%] transform rotate-1 w-[300px] z-20 hover:z-50 transition-all duration-300">
                {/* Pushpin */}
                <div className="absolute -top-7 left-[35%] w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-purple-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] p-3 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-gray-700">
                  <div className="bg-purple-50 dark:bg-purple-900/30 p-8 rounded-[24px]">
                    <div className="text-purple-500 dark:text-purple-300 text-2xl font-light mb-3 font-mono">03</div>
                    <h3 className="text-3xl font-bold mb-4 text-left">Design Concept</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      1-2 concepts and variants<br /> to achieve what you<br /> want.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card 4 - Final Design - Bottom Left */}
              <div className="absolute left-[15%] top-[53%] transform -rotate-2 w-[300px] z-20 hover:z-50 transition-all duration-300">
                {/* Pushpin */}
                <div className="absolute -top-7 right-[28%] w-12 h-12 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-red-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] p-3 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-gray-700">
                  <div className="bg-orange-50 dark:bg-orange-900/30 p-8 rounded-[24px]">
                    <div className="text-orange-500 dark:text-orange-300 text-2xl font-light mb-3 font-mono">04</div>
                    <h3 className="text-3xl font-bold mb-4 text-left">Final Design</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      Smooth delivery and<br /> the support you can<br /> always count on.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card 5 - Development - Bottom Right */}
              <div className="absolute right-[16%] top-[68%] transform rotate-3 w-[300px] z-20 hover:z-50 transition-all duration-300">
                {/* Pushpin */}
                <div className="absolute -top-7 right-[25%] w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-blue-400 shadow-inner"></div>
                </div>
                
                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-[32px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.3)] p-3 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-gray-700">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-[24px]">
                    <div className="text-blue-500 dark:text-blue-300 text-2xl font-light mb-3 font-mono">05</div>
                    <h3 className="text-3xl font-bold mb-4 text-left">Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                      Senior full-stack devs<br /> and Framer experts are<br /> here to help.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* "Your all in one design partner" text element - positioned to avoid overlap */}
              <div className="absolute left-[25%] top-[84%] text-left z-30">
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
            <div className="relative w-full max-w-[320px] min-h-[850px] mx-auto">
              {/* Background with subtle line pattern - same as desktop */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_39px,rgba(0,0,0,.05)_1px),linear-gradient(90deg,transparent_39px,rgba(0,0,0,.05)_1px)] bg-[length:40px_40px]"></div>
              
              <div className="relative w-[280px] space-y-[70px] mx-auto pt-10">
                {/* Card 1 - Proposal */}
                <div className="relative transform rotate-2 w-full">
                  {/* Pushpin */}
                  <div className="absolute -top-5 left-10 w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-red-400 shadow-inner"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] p-2 border border-gray-100 dark:border-gray-700">
                    <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-[18px]">
                      <div className="text-orange-500 dark:text-orange-300 text-xl font-light mb-3 font-mono">01</div>
                      <h3 className="text-3xl font-bold mb-4 text-left">Proposal</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                        Detailed outline of our<br /> service tailored for<br /> your needs.
                      </p>
                    </div>
                  </div>
                  
                  {/* Direct connecting line to next card */}
                  <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 h-[40px] border-l-2 border-dashed border-gray-200 dark:border-gray-700 z-0"></div>
                </div>
                
                {/* Card 2 - Wireframe */}
                <div className="relative transform -rotate-1 w-full">
                  {/* Pushpin */}
                  <div className="absolute -top-5 right-14 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-blue-400 shadow-inner"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] p-2 border border-gray-100 dark:border-gray-700">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-[18px]">
                      <div className="text-blue-500 dark:text-blue-300 text-xl font-light mb-3 font-mono">02</div>
                      <h3 className="text-3xl font-bold mb-4 text-left">Wireframe</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                        Ideation and wireframing<br /> to make sure UX flow is<br /> perfect.
                      </p>
                    </div>
                  </div>
                  
                  {/* Direct connecting line to next card */}
                  <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 h-[40px] border-l-2 border-dashed border-gray-200 dark:border-gray-700 z-0"></div>
                </div>
                
                {/* Card 3 - Design Concept */}
                <div className="relative transform rotate-2 w-full">
                  {/* Pushpin */}
                  <div className="absolute -top-5 left-12 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-purple-400 shadow-inner"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] p-2 border border-gray-100 dark:border-gray-700">
                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-[18px]">
                      <div className="text-purple-500 dark:text-purple-300 text-xl font-light mb-3 font-mono">03</div>
                      <h3 className="text-3xl font-bold mb-4 text-left">Design Concept</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                        1-2 concepts and variants<br /> to achieve what you<br /> want.
                      </p>
                    </div>
                  </div>
                  
                  {/* Direct connecting line to next card */}
                  <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 h-[40px] border-l-2 border-dashed border-gray-200 dark:border-gray-700 z-0"></div>
                </div>
                
                {/* Card 4 - Final Design */}
                <div className="relative transform -rotate-2 w-full">
                  {/* Pushpin */}
                  <div className="absolute -top-5 left-14 w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-red-400 shadow-inner"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] p-2 border border-gray-100 dark:border-gray-700">
                    <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-[18px]">
                      <div className="text-orange-500 dark:text-orange-300 text-xl font-light mb-3 font-mono">04</div>
                      <h3 className="text-3xl font-bold mb-4 text-left">Final Design</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                        Smooth delivery and<br /> the support you can<br /> always count on.
                      </p>
                    </div>
                  </div>
                  
                  {/* Direct connecting line to next card */}
                  <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 h-[40px] border-l-2 border-dashed border-gray-200 dark:border-gray-700 z-0"></div>
                </div>
                
                {/* Card 5 - Development */}
                <div className="relative transform -rotate-1 w-full">
                  {/* Pushpin */}
                  <div className="absolute -top-5 right-12 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-blue-400 shadow-inner"></div>
                  </div>
                  
                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-[24px] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] p-2 border border-gray-100 dark:border-gray-700">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-[18px]">
                      <div className="text-blue-500 dark:text-blue-300 text-xl font-light mb-3 font-mono">05</div>
                      <h3 className="text-3xl font-bold mb-4 text-left">Development</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-left text-sm leading-relaxed">
                        Senior full-stack devs<br /> and Framer experts are<br /> here to help.
                      </p>
                    </div>
                  </div>
                  
                  {/* Direct connecting line to text */}
                  <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 h-[40px] border-l-2 border-dashed border-gray-200 dark:border-gray-700 z-0"></div>
                </div>
                
                {/* "Your all in one design partner" text for mobile */}
                <div className="relative w-full mt-4 flex justify-center">
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
      </div>
    </section>
  );
} 