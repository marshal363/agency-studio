import { Button } from "@/components/ui/button";
import { Check, Calendar } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FF5E3A]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <div className="space-y-2 max-w-[900px]">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl font-medium text-white/90 max-w-3xl mx-auto mt-4">
              No hidden fees or surprises — just flexible plans that grow with your business
            </p>
          </div>
        </div>

        <div className="grid w-full max-w-5xl mx-auto grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* First Card */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-lg relative">
            {/* Badge - Hidden on mobile */}
            <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 hidden md:block">
              <div className="bg-[#FF5E3A] text-white px-6 py-3 rounded-full shadow-lg">
                <span className="font-medium">Clients&apos; choice</span>
              </div>
            </div>

            <div className="p-8 flex flex-col h-full">
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="mb-5">
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">Landing Creation</h3>
                  <p className="text-gray-600 text-lg">
                    Every business needs a landing, and it&apos;s never been easier to get one...
                  </p>
                </div>

                <div className="mt-2 mb-6">
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold text-gray-900">$4450</span>
                    <span className="text-gray-500 ml-2 text-xl">/fixed</span>
                  </div>
                  <div className="text-base text-gray-500 mt-1">Design only</div>
                  <div className="text-base text-gray-500">$6,450 with development</div>
                </div>

                <Link href="/book-call">
                  <Button className="w-full bg-[#ff5722] hover:bg-[#ff5722]/90 text-white rounded-full px-8 py-0 h-[58px] text-[17px] font-medium flex items-center justify-center shadow-[0_2px_8px_rgba(255,87,34,0.25)]">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book a 30-min call
                  </Button>
                </Link>
                <div className="flex items-center justify-start mb-8">
                  <div className="w-3 h-3 rounded-full bg-[#FF5E3A] mr-2"></div>
                  <span className="text-sm text-gray-500">2 spots available</span>
                </div>

                <div className="flex">
                  <div className="border-r border-gray-200 pr-2 mr-2">
                    {[
                      "2 Design concepts",
                      "Full copywriting",
                      "360° Sales funnel building",
                      "Custom 3D models",
                      "1 month of free support",
                      "Framer Development"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center justify-center py-3">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#FFDED6] flex items-center justify-center">
                          <Check className="h-5 w-5 text-[#FF5E3A]" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pl-2">
                    {[
                      "2 Design concepts",
                      "Full copywriting",
                      "360° Sales funnel building",
                      "Custom 3D models",
                      "1 month of free support",
                      "Framer Development"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center h-16">
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-row h-full">
                {/* Left Side */}
                <div className="flex flex-col pr-8 border-r border-gray-200 h-full">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Landing Creation</h3>
                    <p className="text-gray-600">
                      Every business needs a landing, and it&apos;s never been easier to get one...
                    </p>
                  </div>

                  <div className="mt-2 mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">$4450</span>
                      <span className="text-gray-500 ml-1">/fixed</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Design only</div>
                    <div className="text-sm text-gray-500">$6,450 with development</div>
                  </div>

                  <div className="mt-auto">
                    <Link href="/book-call">
                      <Button className="w-full bg-[#ff5722] hover:bg-[#ff5722]/90 text-white rounded-full px-8 py-0 h-[58px] text-[17px] font-medium flex items-center justify-center shadow-[0_2px_8px_rgba(255,87,34,0.25)]">
                        <Calendar className="h-5 w-5 mr-2" />
                        Book a 30-min call
                      </Button>
                    </Link>
                    <div className="flex items-center justify-start mt-4">
                      <div className="w-3 h-3 rounded-full bg-[#FF5E3A] mr-2"></div>
                      <span className="text-sm text-gray-500">2 spots available</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Features */}
                <div className="flex flex-col pl-8 w-full">
                  <div className="space-y-6">
                    {[
                      "2 Design concepts",
                      "Full copywriting",
                      "360° Sales funnel building",
                      "Custom 3D models",
                      "1 month of free support",
                      "Framer Development"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FFDED6] flex items-center justify-center">
                          <Check className="h-4 w-4 text-[#FF5E3A]" />
                        </div>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-[32px] overflow-hidden shadow-lg">
            <div className="p-8 flex flex-col h-full">
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="mb-5">
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">Product Design</h3>
                  <p className="text-gray-600 text-lg">
                    All-in-one solution for Startups & SaaS.
                  </p>
                </div>

                <div className="mt-2 mb-6">
                  <div className="flex items-baseline">
                    <span className="text-6xl font-bold text-gray-900">$8000</span>
                    <span className="text-gray-500 ml-2 text-xl">+</span>
                  </div>
                  <div className="text-base text-gray-500 mt-1">Based on project scope</div>
                </div>

                <Link href="/book-call">
                  <Button className="w-full bg-[#ff5722] hover:bg-[#ff5722]/90 text-white rounded-full px-8 py-0 h-[58px] text-[17px] font-medium flex items-center justify-center shadow-[0_2px_8px_rgba(255,87,34,0.25)]">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book a 30-min call
                  </Button>
                </Link>
                <div className="flex items-center justify-start mb-8">
                  <div className="w-3 h-3 rounded-full bg-[#FF5E3A] mr-2"></div>
                  <span className="text-sm text-gray-500">1 spot available</span>
                </div>

                <div className="flex">
                  <div className="border-r border-gray-200 pr-2 mr-2">
                    {[
                      "2 Design concepts",
                      "5+ Page Included",
                      "Full copywriting",
                      "Custom 3D models",
                      "1 month of free support"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center justify-center py-3">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#FFDED6] flex items-center justify-center">
                          <Check className="h-5 w-5 text-[#FF5E3A]" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pl-2">
                    {[
                      "2 Design concepts",
                      "5+ Page Included",
                      "Full copywriting",
                      "Custom 3D models",
                      "1 month of free support"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center h-16">
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-row h-full">
                {/* Left Side */}
                <div className="flex flex-col pr-8 border-r border-gray-200 h-full">
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Product Design</h3>
                    <p className="text-gray-600">
                      All-in-one solution for Startups & SaaS.
                    </p>
                  </div>

                  <div className="mt-2 mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">$8000</span>
                      <span className="text-gray-500 ml-1">+</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Based on project scope</div>
                  </div>

                  <div className="mt-auto">
                    <Link href="/book-call">
                      <Button className="w-full bg-[#ff5722] hover:bg-[#ff5722]/90 text-white rounded-full px-8 py-0 h-[58px] text-[17px] font-medium flex items-center justify-center shadow-[0_2px_8px_rgba(255,87,34,0.25)]">
                        <Calendar className="h-5 w-5 mr-2" />
                        Book a 30-min call
                      </Button>
                    </Link>
                    <div className="flex items-center justify-start mt-4">
                      <div className="w-3 h-3 rounded-full bg-[#FF5E3A] mr-2"></div>
                      <span className="text-sm text-gray-500">1 spot available</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Features */}
                <div className="flex flex-col pl-8 w-full">
                  <div className="space-y-6">
                    {[
                      "2 Design concepts",
                      "5+ Page Included",
                      "Full copywriting",
                      "Custom 3D models",
                      "1 month of free support"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FFDED6] flex items-center justify-center">
                          <Check className="h-4 w-4 text-[#FF5E3A]" />
                        </div>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-white/80">
            or reach me out on WhatsApp / Telegram :3
          </p>
        </div>
      </div>
    </section>
  );
} 