import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Process() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Project Scope
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our Process, Step by Step
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              From the initial proposal to the final product at your hand. A clear view of what you can expect at every stage!
            </p>
          </div>
          <div className="mx-auto max-w-3xl mt-8">
            <Card className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">
                  Your all in one
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl md:text-2xl font-bold">design partner.</h3>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center p-4">
                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-primary-foreground font-bold mb-4">1</span>
                <h3 className="text-xl font-bold">Discovery</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Understanding your business goals</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-primary-foreground font-bold mb-4">2</span>
                <h3 className="text-xl font-bold">Design</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Creating beautiful, conversion-focused designs</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-primary-foreground font-bold mb-4">3</span>
                <h3 className="text-xl font-bold">Development</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Building high-performance websites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 