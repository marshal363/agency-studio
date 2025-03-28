import Image from "next/image";
import Link from "next/link";

export default function EmailServiceProject() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">The best email, ever made.</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          Modern email service with advanced features and responsive design
        </p>
      </div>
      
      <div className="rounded-2xl overflow-hidden shadow-xl mb-12 aspect-[16/9] relative">
        <Image 
          src="/images/projects/email-service-preview.jpg"
          alt="Email Service Project Full Preview"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
          <h3 className="text-xl font-semibold mb-2">Client</h3>
          <p className="text-gray-600 dark:text-gray-400">MailPro Inc.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Services</h3>
          <p className="text-gray-600 dark:text-gray-400">Web Design, UI/UX, Development</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Year</h3>
          <p className="text-gray-600 dark:text-gray-400">2023</p>
        </div>
      </div>
      
      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="text-lg mb-4">
          MailPro needed a complete redesign of their email service platform. Our task was to create a modern, 
          intuitive interface that would highlight their advanced features while making the product more accessible 
          to new users.
        </p>
        <p className="text-lg">
          We created a clean, visually appealing design with intuitive navigation and clear call-to-action elements. 
          The new design focuses on key features that differentiate MailPro from competitors while maintaining simplicity
          and ease of use.
        </p>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Smart Inbox</h3>
            <p className="text-gray-600 dark:text-gray-400">Automatically sorts and prioritizes messages based on user behavior</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
            <p className="text-gray-600 dark:text-gray-400">End-to-end encryption and multi-factor authentication</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-gray-600 dark:text-gray-400">Works with popular productivity tools and platforms</p>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <Link 
          href="https://example.com"
          className="inline-block py-3 px-8 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition"
        >
          Visit Live Project
        </Link>
      </div>
    </main>
  );
} 