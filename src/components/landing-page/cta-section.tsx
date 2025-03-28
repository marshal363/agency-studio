import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-6 mx-auto">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-md p-10 md:p-14">
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
            {/* Logo and Text */}
            <div className="space-y-6 flex-1">
              <div className="flex items-center">
                <div className="bg-[#ff5722] w-[48px] h-[48px] rounded-lg flex items-center justify-center shadow-[0_2px_8px_rgba(255,87,34,0.25)] mr-4">
                  <svg 
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="text-white relative -left-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 6 9 12 15 18"></polyline>
                  </svg>
                </div>
                <span className="text-[28px] font-semibold text-zinc-800 tracking-tight">skale</span>
              </div>
              
              <div className="space-y-2">
                <p className="text-xl font-medium text-gray-700">
                  Scale your business with ease.
                </p>
                <p className="text-lg text-gray-500">
                  Over 54+ startups trusted us<br className="hidden md:block" /> and increased their revenue!
                </p>
              </div>
              
              <div className="pt-4">
                <Link href="/book-call">
                  <Button 
                    className="bg-[#ff5722] hover:bg-[#ff5722]/90 text-white rounded-full px-8 py-6 h-[60px] text-lg font-medium flex items-center gap-3 shadow-[0_2px_8px_rgba(255,87,34,0.25)]"
                  >
                    Book a 30-min call
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex flex-col md:items-end">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Social Media</h3>
              
              <div className="flex gap-4">
                {/* Telegram */}
                <a 
                  href="https://t.me/markknd" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.2857 2.99709L1.71429 10.5685C0.571429 11.0399 0.597143 11.7256 1.51429 12.0113L6.42857 13.4542L8.57143 19.937C9.05714 21.3799 10.1143 21.3799 10.5429 20.137L15.2571 5.85423C15.6 4.55994 15.1714 3.82566 13.7143 4.51994L7.25714 8.42566L1.9 6.22566C0.771429 5.82566 0.771429 5.19709 2.14286 4.72566L20.8429 0.0113813C21.8 -0.383333 22.6857 0.0970956 22.2857 2.99709Z" fill="currentColor"/>
                  </svg>
                </a>
                
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/message" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.5027 3.50798C18.2646 1.25798 15.2498 0 12.0534 0C5.4646 0 0.106743 5.38145 0.106743 11.9999C0.106743 14.1257 0.664582 16.2029 1.73249 18.0486L0 24L6.07018 22.2921C7.84239 23.2701 9.9263 23.7799 12.0534 23.7799C18.6423 23.7799 24 18.3984 24 11.7799C24 8.58352 22.7407 5.75798 20.5027 3.50798ZM12.0534 21.7799C10.1499 21.7799 8.24643 21.2701 6.57797 20.2921L6.231 20.0721L2.67267 21.0501L3.66621 17.6029L3.40737 17.2516C2.33947 15.5044 1.76163 13.7572 1.76163 11.9999C1.76163 6.49385 6.33861 1.99993 12.0534 1.99993C14.7263 1.99993 17.1406 3.06629 19.0735 4.99972C20.9771 6.93314 22.2364 9.36706 22.2364 11.7799C22.3458 17.2857 17.7688 21.7799 12.0534 21.7799ZM17.4684 14.5156C17.1215 14.3542 15.6755 13.6371 15.3872 13.5156C15.0687 13.4342 14.8395 13.3727 14.5807 13.7242C14.3523 14.0756 13.7752 14.7327 13.5763 14.9527C13.3776 15.1727 13.179 15.1933 12.8322 15.0318C12.485 14.8704 11.5221 14.5371 10.3811 13.5156C9.46267 12.6971 8.90524 11.6984 8.70626 11.347C8.50728 10.9956 8.70626 10.8141 8.88527 10.6527C9.0643 10.4913 9.26294 10.2506 9.46267 10.0499C9.6624 9.84917 9.72266 9.72774 9.80365 9.5077C9.88431 9.28766 9.82398 9.0877 9.76337 8.92627C9.70274 8.76485 9.14543 7.31387 8.84878 6.61117C8.55213 5.90834 8.25548 6.01119 8.0565 6.01119C7.85751 6.01119 7.62834 5.99063 7.41931 5.99063C7.21032 5.99063 6.89173 6.05233 6.60368 6.4037C6.31564 6.75508 5.55651 7.47228 5.55651 8.92328C5.55651 10.3743 6.58372 11.7849 6.7231 12.0049C6.86247 12.2249 8.88493 15.3727 12.0229 16.6618C12.7224 16.9538 13.2797 17.1238 13.7166 17.245C14.4158 17.4657 15.0392 17.4343 15.5383 17.3727C16.0966 17.301 17.2979 16.6618 17.5945 15.8433C17.8911 15.0248 17.8911 14.3276 17.8305 14.2055C17.7698 14.0834 17.6001 14.0156 17.2532 13.8542L17.4684 14.5156Z" fill="currentColor"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                
                {/* Twitter/X */}
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.8 10.5L21.75 1.5H19.875L13.0312 9.375L7.5 1.5H1.5L10.0312 13.5L1.5 23.25H3.375L10.8 14.625L16.5 23.25H22.5L13.8 10.5ZM11.625 13.5L10.6875 12.1875L4.125 3H6.75L12 10.3125L13.125 11.625L20.25 21.75H17.625L11.625 13.5Z" fill="currentColor"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 