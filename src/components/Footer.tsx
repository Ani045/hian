import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-[1.1] mb-8 md:mb-12 font-figtree">
            Let's Build <span className="text-gradient">Something Amazing</span>!
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6">
            <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 md:gap-3 bg-white hover:bg-gray-100 text-black font-semibold text-sm md:text-base lg:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-inter">
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              Contact Us Now
            </button>
            
            <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 md:gap-3 bg-[#FC6D26] hover:bg-[#e85d1a] text-white font-semibold text-sm md:text-base lg:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-inter">
              Start Your Project
              <span className="text-lg md:text-xl">🚀</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section - Diagonal Triangle Shape */}
      <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 " style={{ minHeight: '4vh' }}>
        
        {/* Diagonal Beige Footer Background - Forms Triangle */}
        <div 
          className="absolute inset-0 bg-[#F5F1E8]"
          style={{
            clipPath: 'polygon(0% 40%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-end">
              
              {/* Left Side - Logo at Bottom Left */}
              <div className="lg:col-span-4 order-2 lg:order-1">
                <div className="inline-block">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/src/assets/foot.jpeg" 
                      alt="Hian Technologies Logo" 
                      className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-30 rounded-lg object-cover border-2 border-black"
                    />
                   
                  </div>
                </div>
              </div>

              {/* Right Side - All Content */}
              <div className="lg:col-span-8 order-1 lg:order-2">
                <div className="max-w-2xl ml-auto">
                  
                  {/* Navigation Links */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <a href="#services" className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white hover:bg-gray-50 text-black font-semibold rounded-full border border-gray-200 transition-all duration-300 hover:shadow-md text-xs sm:text-sm font-inter">
                        Services
                      </a>
                      <a href="#products" className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white hover:bg-gray-50 text-black font-semibold rounded-full border border-gray-200 transition-all duration-300 hover:shadow-md text-xs sm:text-sm font-inter">
                        Products
                      </a>
                      <a href="#about" className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white hover:bg-gray-50 text-black font-semibold rounded-full border border-gray-200 transition-all duration-300 hover:shadow-md text-xs sm:text-sm font-inter">
                        About
                      </a>
                      <a href="#contact" className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white hover:bg-gray-50 text-black font-semibold rounded-full border border-gray-200 transition-all duration-300 hover:shadow-md text-xs sm:text-sm font-inter">
                        Contact
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
                    
                    {/* Contact Info */}
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-black mb-2 md:mb-3 font-figtree">Contact</h3>
                      <div className="space-y-1.5">
                        <a href="mailto:contact@hiantechnologies.com" className="block text-xs sm:text-sm text-black hover:text-[#FC6D26] transition-colors font-inter break-all">
                          contact@hiantechnologies.com
                        </a>
                        <a href="tel:+919729007351" className="block text-xs sm:text-sm text-black hover:text-[#FC6D26] transition-colors font-inter">
                          +91 9729007351
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-black mb-2 md:mb-3 font-figtree">Address</h3>
                      <address className="not-italic text-xs sm:text-sm text-black leading-relaxed font-inter">
                        123 Innovation Drive<br />
                        Tech Valley, CA 94000<br />
                        United States
                      </address>
                    </div>

                    {/* Social Media */}
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-black mb-2 md:mb-3 font-figtree">Follow us</h3>
                      <div className="flex gap-2">
                        <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300 hover:shadow-md">
                          <Linkedin className="w-4 h-4 text-black" />
                        </a>
                        <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300 hover:shadow-md">
                          <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                        <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300 hover:shadow-md">
                          <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                          </svg>
                        </a>
                        <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center border border-gray-200 transition-all duration-300 hover:shadow-md">
                          <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Copyright & Privacy */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 pt-6 border-t border-gray-300">
                    <p className="text-xs text-black/70 font-inter">© 2025 Hian Technologies</p>
                    <a href="#" className="text-xs text-black/70 hover:text-[#FC6D26] transition-colors font-inter">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rotating Badge - Responsive */}
      {/* <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
          <div className="absolute inset-0 animate-spin-slow">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
              </defs>
              <text className="text-[6px] sm:text-[7px] font-bold fill-orange-500" style={{ letterSpacing: '2px' }}>
                <textPath href="#circlePath">
                  HIAN TECH • GET NOTICED • HIAN TECH •
                </textPath>
              </text>
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-orange-400 to-purple-500 flex items-center justify-center shadow-2xl">
              <span className="text-white font-black text-sm sm:text-base md:text-lg lg:text-xl font-figtree">HT</span>
            </div>
          </div>
        </div>
      </div> */}

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </footer>
  );
}
