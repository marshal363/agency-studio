import { Separator } from "@/components/ui/separator";

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
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently asked 
            </h2>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              questions
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We{"'"}ve gathered the most common questions to make things simple. If you don{"'"}t find your answer here, feel free to reach out!
            </p>
          </div>
          
          <div className="mx-auto w-full max-w-3xl space-y-4 mt-8">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <Separator className="my-3" />
                <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
