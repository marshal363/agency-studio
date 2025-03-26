import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Vanja Popovic",
      text: "Mark's redesign of our landing page exceeded our expectations. His design not only encapsulated our brand essence but also met our standards for modern, user-friendly design. The visually appealing...",
      result: "+15% in Session Duration"
    },
    {
      name: "Ya",
      text: "The design is very nice, my associate and I are pleased with the improvements made to our basic design. Once the work began, the delivery of the design was quite prompt!",
      result: "-40% Bounce Rate"
    },
    {
      name: "Aleksandr Lyubkin",
      text: "The design exceeded all my expectations - unique, modern, with creative use of space. It attracted visitors' attention and significantly improved the conversion rate from 0.5% to 3%. The work was...",
      result: "6x Conversion Increase"
    },
    {
      name: "Anton Malyshev",
      text: "I had the pleasure of working with Mark and his team on building a website for my business, and I couldn't be more thrilled with the results. They were incredibly talented, creative, and easy to work with...",
      result: "+85% in User Satisfaction"
    },
    {
      name: "Alexander Tsvirko",
      text: "The guys did the design for my website, I was very pleased!",
      result: "+27% Conversion Increase"
    },
    {
      name: "Jesse Cox",
      text: "Mark Vassilevskiy did an outstanding job designing our website! His attention to detail, creativity, and ability to understand our vision were truly impressive. The final product not only looks stunning but also...",
      result: "+2 Angel Investors"
    },
    {
      name: "Chris Barrineau",
      text: "Hey Mark, thank you so much for the website! The design and cinematic elements for YourPurposeIsYourPower.com are fantastic. You really brought the vision to life. The mobile-responsive...",
      result: "3 clients in a first week"
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-md mb-8">
            <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">Testimonials</span>
          </div>
          <div className="space-y-2 max-w-[900px] mb-10">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-gray-700 dark:text-gray-300">
              What People Say
            </h2>
            <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-gray-700 dark:text-gray-300">
              About Us
            </h2>
            <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-6">
              Real feedback from real clients. See how our work drives results.
            </p>
          </div>
          
          <div className="w-full max-w-5xl">
            <Carousel className="w-full py-10">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <Card className="p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <Avatar className="mr-3">
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex-1">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      <p className="text-primary font-medium text-sm mt-4">
                        {testimonial.result}
                      </p>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative mr-2" />
                <CarouselNext className="relative ml-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
} 