import { Zap, TrendingUp, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Crafting Designs That Drive Growth
            </p>
            <p className="text-sm text-muted-foreground">
              Fits best for: Agencies, SaaS, Digital Creators, Businesses, E-Commerce.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <div className="p-2 bg-primary-foreground rounded-full mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Growth</CardTitle>
                <CardDescription className="text-lg font-medium">
                  Success as a Service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  We have been transforming SaaS products for over 5 years by designing unique interfaces and driving growth.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-6">
              <CardHeader>
                <div className="p-2 bg-primary-foreground rounded-full mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Conversions</CardTitle>
                <CardDescription className="text-lg font-medium">
                  Conversion-Focused Design
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Websites so stunning that it will increases your conversion rate by 120%, decrease the bounce-rate and improve engagement.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-6 md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="p-2 bg-primary-foreground rounded-full mb-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Stats will speak for itself</CardTitle>
                <CardDescription className="flex justify-center gap-6 text-lg font-medium">
                  <span>User Retention +80%</span>
                  <span>Leads +150%</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  Designs that makes you and your venture shine in the crowd of similar looking websites. Be the one that leads the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 