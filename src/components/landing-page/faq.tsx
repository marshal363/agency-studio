import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import React from "react";

export function FAQ() {
  const faqs = [
    {
      question: "How long does it take to complete a project?",
      answer: "Typically, we complete landing page projects in 2-3 weeks, and full websites in 4-6 weeks. The timeline may vary based on project complexity and client feedback cycles."
    },
    {
      question: "What is included in the design process?",
      answer: "Our design process includes discovery, wireframing, design concepts, revisions, and finalization. We provide multiple concepts and revisions to ensure your complete satisfaction."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we include 1 month of free support after launch for all projects. After that, we offer various maintenance plans to ensure your website stays up-to-date and secure."
    },
    {
      question: "Can I customize the package?",
      answer: "Absolutely! Our packages are flexible, and we can tailor them to your specific needs. Contact us to discuss your requirements, and we'll create a custom solution for you."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, PayPal, bank transfers, and crypto. We typically require a 50% deposit to begin work and the remaining 50% upon completion."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col items-center lg:items-start space-y-6 max-w-3xl">
            <div className="bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-md">
              <span className="text-gray-700 dark:text-gray-300 text-lg font-medium">FAQ</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-700 dark:text-gray-300">
                Frequently asked questions
              </h2>
              <p className="text-xl font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
                We{"'"}ve gathered the most common questions to make things simple. If you don{"'"}t find your answer here, feel free to reach out!
              </p>
            </div>
            
            <div className="pt-4">
              <Button variant="outline" className="gap-2">
                Any questions? Reach out <PhoneCall className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="w-full max-w-3xl lg:max-w-none mt-8 lg:mt-0">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b last:border-0 py-2"
                >
                  <AccordionTrigger className="py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-500 dark:text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
