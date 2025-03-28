import Image from "next/image";
import Link from "next/link";

export default function Web3WorldProject() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bringing Web3 To The World</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
          Accessible blockchain platform with intuitive interface for mainstream adoption
        </p>
      </div>
      
      <div className="rounded-2xl overflow-hidden shadow-xl mb-12 aspect-[16/9] relative">
        <Image 
          src="/images/projects/web3-world-preview.jpg"
          alt="Web3 World Project Full Preview"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div>
          <h3 className="text-xl font-semibold mb-2">Client</h3>
          <p className="text-gray-600 dark:text-gray-400">NextBlock Technologies</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Services</h3>
          <p className="text-gray-600 dark:text-gray-400">UI/UX Design, Web Development, Blockchain Integration</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Year</h3>
          <p className="text-gray-600 dark:text-gray-400">2023</p>
        </div>
      </div>
      
      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <p className="text-lg mb-4">
          NextBlock Technologies wanted to create a platform that would make blockchain technology accessible to everyday users.
          The challenge was to simplify complex blockchain concepts and create an intuitive interface that would appeal to 
          non-technical users.
        </p>
        <p className="text-lg">
          We designed a visually engaging platform with simplified onboarding processes, clear educational resources, 
          and an intuitive wallet system. The result is a platform that maintains all the security and benefits of blockchain
          while eliminating the typical barriers to entry.
        </p>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">React</h3>
            <p className="text-gray-600 dark:text-gray-400">Frontend framework</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Solidity</h3>
            <p className="text-gray-600 dark:text-gray-400">Smart contract development</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Web3.js</h3>
            <p className="text-gray-600 dark:text-gray-400">Blockchain interaction</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Three.js</h3>
            <p className="text-gray-600 dark:text-gray-400">3D visualizations</p>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Simplified Wallet</h3>
            <p className="text-gray-600 dark:text-gray-400">User-friendly crypto wallet with enhanced security features and simplified recovery process</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
            <p className="text-gray-600 dark:text-gray-400">Gamified educational content explaining blockchain concepts through interactive demos</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Multi-chain Support</h3>
            <p className="text-gray-600 dark:text-gray-400">Seamless integration with multiple blockchain networks for maximum flexibility</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">dApp Marketplace</h3>
            <p className="text-gray-600 dark:text-gray-400">Curated selection of decentralized applications with straightforward access</p>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <Link 
          href="https://example.com"
          className="inline-block py-3 px-8 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition"
        >
          Visit Live Project
        </Link>
      </div>
    </main>
  );
} 