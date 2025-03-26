import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full pt-16 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        {/* Testimonial bubble */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 md:left-auto md:right-24 md:translate-x-0 bg-white dark:bg-zinc-900 rounded-full py-3 px-6 shadow-md flex items-center gap-3">
          <div className="flex -space-x-2">
            {/* Using User icon as fallback in case images aren't available */}
            <div className="bg-orange-100 rounded-full w-7 h-7 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-orange-500">
              <User className="h-3 w-3" />
            </div>
            <div className="bg-blue-100 rounded-full w-7 h-7 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-blue-500">
              <User className="h-3 w-3" />
            </div>
            <div className="bg-green-100 rounded-full w-7 h-7 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-green-500">
              <User className="h-3 w-3" />
            </div>
          </div>
          <span className="text-sm font-medium">
            54+ startups & founders chose skale.solutions
          </span>
        </div>

        <div className="flex flex-col items-center space-y-10 text-center mt-24 md:mt-28">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-zinc-900 dark:text-white">
              Premium Websites for <span className="block">SaaS & Startups</span>
            </h1>
            <p className="text-xl text-zinc-600 md:text-2xl max-w-2xl mx-auto dark:text-zinc-400">
              Get a website that will fulfill your business goals and drive conversions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-7 h-auto text-lg font-medium flex items-center gap-3 shadow-sm" 
              size="lg"
            >
              <Calendar className="h-5 w-5" />
              Book a 30-min call
            </Button>
            
            <div className="flex items-center mt-3 sm:mt-0">
              <div className="w-2 h-2 rounded-full bg-orange-500 mr-3"></div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                2 spots available
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-zinc-900 -z-10"></div>
    </section>
  );
} 