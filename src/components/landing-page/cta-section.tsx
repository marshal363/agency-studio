import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Scale your business with ease
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Over 54+ startups trusted us and increased their revenue!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className="flex items-center gap-2 rounded-full" size="lg">
              <Calendar className="h-4 w-4" />
              Book a 30-min call
            </Button>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 w-full">
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium mb-2">Social Media</p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  skale.solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 