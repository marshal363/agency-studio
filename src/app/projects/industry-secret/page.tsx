import Image from "next/image";
import Link from "next/link";

export default function IndustrySecretProject() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Stop Being Your Industry&apos;s Best-Kept Secret</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          Strategic branding and marketing for a publishing house looking to expand market reach
        </p>
      </div>
      
      <div className="rounded-2xl overflow-hidden shadow-xl mb-12 aspect-[16/9] relative">
        <Image 
          src="/images/projects/industry-secret-preview.jpg"
          alt="Industry Secret Project Full Preview"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
          <h3 className="text-xl font-semibold mb-2">Client</h3>
          <p className="text-gray-600 dark:text-gray-400">Whitman & Sons Publishing</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Services</h3>
          <p className="text-gray-600 dark:text-gray-400">Branding, Marketing Strategy, Web Development</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Year</h3>
          <p className="text-gray-600 dark:text-gray-400">2023</p>
        </div>
      </div>
      
      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="text-lg mb-4">
          Whitman & Sons is a long-established publishing house with a stellar reputation among literary circles,
          but they were struggling to reach new audiences in the digital age. Our challenge was to create a brand
          strategy that honored their legacy while expanding their reach.
        </p>
        <p className="text-lg">
          We developed a comprehensive marketing strategy that included a complete website redesign, social media
          presence development, and digital content strategy that highlighted their extensive catalog and industry expertise.
        </p>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Key Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">320%</h3>
            <p className="text-gray-600 dark:text-gray-400">Increase in online sales within first 6 months</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">15K+</h3>
            <p className="text-gray-600 dark:text-gray-400">New newsletter subscribers</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">47%</h3>
            <p className="text-gray-600 dark:text-gray-400">Reduction in customer acquisition costs</p>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <Link 
          href="https://example.com"
          className="inline-block py-3 px-8 bg-gray-900 text-white rounded-full font-medium hover:bg-black transition"
        >
          Visit Live Project
        </Link>
      </div>
    </main>
  );
} 