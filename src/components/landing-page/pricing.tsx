import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Calendar } from "lucide-react";

export function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, Transparent Pricing for Startups
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              No hidden fees or surprises — just flexible plans that grow with your business
            </p>
          </div>
          
          <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 mt-8">
            <Card className="flex flex-col p-6">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Landing Creation</CardTitle>
                    <CardDescription className="text-base mt-1.5">
                      Every business needs a landing
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-bold">$4,450</span>
                      <span className="text-gray-500">/fixed</span>
                    </div>
                    <span className="text-sm text-gray-500">Design only</span>
                    <span className="text-sm text-gray-500">$6,450 with development</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>2 Design concepts</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>Full copywriting</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>360° Sales funnel building</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>Custom 3D models</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>1 month of free support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    <span>Framer Development</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button className="w-full flex items-center justify-center gap-2 rounded-full" size="lg">
                  <Calendar className="h-4 w-4" />
                  Book a 30-min call
                </Button>
                <p className="text-xs text-center mt-2 text-muted-foreground">2 spots available</p>
              </CardFooter>
            </Card>
            
            <Card className="flex flex-col p-6 border-primary">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-primary">Success as a Service</CardTitle>
                    <CardDescription className="text-base mt-1.5">
                      All-in-one solution for Startups & SaaS
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-bold text-primary">$8,000</span>
                      <span className="text-gray-500">+</span>
                    </div>
                    <span className="text-sm text-gray-500">Based on project scope</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>2 Design concepts</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>4+ Page Included</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Full copywriting</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Dedicated brand manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>1 month of free support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Framer Development</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button variant="default" className="w-full flex items-center justify-center gap-2 rounded-full" size="lg">
                  <Calendar className="h-4 w-4" />
                  Book a 30-min call
                </Button>
                <p className="text-xs text-center mt-2 text-muted-foreground">1 spot available</p>
              </CardFooter>
            </Card>
          </div>
          
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            or reach me out on WhatsApp / Telegram :3
          </p>
        </div>
      </div>
    </section>
  );
} 