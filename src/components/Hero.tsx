import { useState } from 'react';

interface HeroAndAboutProps {
  onNavigate?: (page: string) => void;
}

export default function HeroAndAbout({ onNavigate }: HeroAndAboutProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [cardTilt, setCardTilt] = useState<{ [key: number]: 'clockwise' | 'anticlockwise' | null }>({});

  const handleCardClick = (cardNumber: number, event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickY = event.clientY - rect.top;
    const cardHeight = rect.height;
    const isUpperHalf = clickY < cardHeight / 2;
    
    const newTilt = isUpperHalf ? 'anticlockwise' : 'clockwise';
    
    if (activeCard === cardNumber && cardTilt[cardNumber] === newTilt) {
      setActiveCard(null);
      setCardTilt({ ...cardTilt, [cardNumber]: null });
    } else {
      setActiveCard(cardNumber);
      setCardTilt({ ...cardTilt, [cardNumber]: newTilt });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50 overflow-x-hidden flex items-center pb-0">
        <main className="px-6 md:px-12 lg:px-16 py-8 md:py-8 w-full pt-20 md:pt-32">
          <div className="max-w-[1600px] mx-auto">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-4 md:mb-8 font-figtree">
              Build. <span className="text-gradient">Automate.</span>
              <br />
              Scale.
            </h1>

            {/* Subheading */}
            <h2 className="text-base md:text-2xl lg:text-3xl font-bold text-gray-800 mb-8 md:mb-12 font-figtree">
              Empowering Businesses with Future-Ready Digital & AI Solutions
            </h2>

            {/* Image Cards - Mobile: Overlapping with angles, Desktop: 4 in row */}
            <div className="flex flex-wrap justify-center items-center mt-8 md:mt-16 relative min-h-[550px] md:min-h-0">
              {/* Card 1 - Orange Gradient with 50+ */}
              <div 
                className={`relative h-60 md:h-96 lg:h-[28rem] w-[42%] md:w-72 lg:w-80 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 transform rotate-3 md:ml-6 md:rotate-3 z-10 shadow-lg hover:shadow-2xl ${
                  activeCard === 1 
                    ? `scale-105 md:scale-110 z-30 shadow-2xl ${
                        cardTilt[1] === 'clockwise' ? 'rotate-12 md:rotate-[18deg]' : 
                        cardTilt[1] === 'anticlockwise' ? '-rotate-12 md:-rotate-[18deg]' : 'rotate-6 md:rotate-[12deg]'
                      }` 
                    : 'hover:scale-110 hover:rotate-[8deg] md:hover:rotate-[12deg]'
                }`}
                onClick={(e) => handleCardClick(1, e)}
              >
                <div className="absolute inset-0 gradient-orange-purple transition-transform duration-500 scale-105 flex flex-col justify-between p-3 md:p-8">
                  <div className="text-white">
                    <div className="text-3xl md:text-7xl font-black">50+</div>
                  </div>
                  <div className="text-white">
                    <div className="w-12 md:w-16 h-[2px] bg-white/50 mb-2"></div>
                    <div className="text-[10px] md:text-lg opacity-90 font-medium">Projects Delivered</div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Image without gradient overlay */}
              <div 
                className={`relative h-60 md:h-96 lg:h-[28rem] w-[42%] md:w-72 lg:w-80 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 transform -ml-4 -rotate-1 md:ml-3 md:-rotate-1 z-20 shadow-lg hover:shadow-2xl ${
                  activeCard === 2 
                    ? `scale-105 md:scale-110 z-30 shadow-2xl ${
                        cardTilt[2] === 'clockwise' ? 'rotate-12 md:rotate-[18deg]' : 
                        cardTilt[2] === 'anticlockwise' ? '-rotate-12 md:-rotate-[18deg]' : '-rotate-6 md:-rotate-[12deg]'
                      }` 
                    : 'hover:scale-110 hover:-rotate-[8deg] md:hover:-rotate-[12deg]'
                }`}
                onClick={(e) => handleCardClick(2, e)}
              >
                <div className="absolute inset-0 transition-transform duration-500 scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=1000&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover transition-transform duration-500 scale-110"
                  />
                  <div className="absolute bottom-3 md:bottom-8 right-3 md:right-8 text-white">
                    <div className="text-xs md:text-2xl font-black bg-black/50 px-2 md:px-6 py-1.5 md:py-3 rounded-lg md:rounded-xl backdrop-blur-sm">
                      AI POWERED
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Purple with 98% */}
              <div 
                className={`relative h-60 md:h-96 lg:h-[28rem] w-[42%] md:w-72 lg:w-80 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 transform rotate-1 -ml-4 md:-ml-3 md:rotate-1 z-20 shadow-lg hover:shadow-2xl mt-2 md:mt-0 ${
                  activeCard === 3 
                    ? `scale-105 md:scale-110 z-30 shadow-2xl ${
                        cardTilt[3] === 'clockwise' ? 'rotate-12 md:rotate-[18deg]' : 
                        cardTilt[3] === 'anticlockwise' ? '-rotate-12 md:-rotate-[18deg]' : 'rotate-6 md:rotate-[12deg]'
                      }` 
                    : 'hover:scale-110 hover:rotate-[8deg] md:hover:rotate-[12deg]'
                }`}
                onClick={(e) => handleCardClick(3, e)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 transition-transform duration-500 scale-105 flex flex-col justify-between p-3 md:p-8">
                  <div className="text-white">
                    <div className="text-3xl md:text-7xl font-black">98%</div>
                  </div>
                  <div className="text-white">
                    <div className="w-12 md:w-16 h-[2px] bg-white/50 mb-2"></div>
                    <div className="text-[10px] md:text-lg opacity-90 font-medium">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Team Image without gradient overlay */}
              <div 
                className={`relative h-60 md:h-96 lg:h-[28rem] w-[42%] md:w-72 lg:w-80 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 transform -rotate-3 -ml-4 md:-ml-6 md:-rotate-3 z-10 shadow-lg hover:shadow-2xl mt-2 md:mt-0 ${
                  activeCard === 4 
                    ? `scale-105 md:scale-110 z-30 shadow-2xl ${
                        cardTilt[4] === 'clockwise' ? 'rotate-12 md:rotate-[18deg]' : 
                        cardTilt[4] === 'anticlockwise' ? '-rotate-12 md:-rotate-[18deg]' : '-rotate-6 md:-rotate-[12deg]'
                      }` 
                    : 'hover:scale-110 hover:-rotate-[8deg] md:hover:-rotate-[12deg]'
                }`}
                onClick={(e) => handleCardClick(4, e)}
              >
                <div className="absolute inset-0 transition-transform duration-500 scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                    alt="Team success"
                    className="w-full h-full object-cover transition-transform duration-500 scale-110"
                  />
                  <div className="absolute bottom-3 md:bottom-8 right-3 md:right-8 text-white">
                    <div className="text-xs md:text-2xl font-black bg-black/50 px-2 md:px-6 py-1.5 md:py-3 rounded-lg md:rounded-xl backdrop-blur-sm">
                      EXPERT TEAM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* About Section - Seamlessly Blended */}
      <section className="w-full bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50 py-12 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Gradient Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-[1800px] mx-auto relative z-10">
          {/* Main Headline - Smaller Text */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-[1.2] mb-12 md:mb-24 lg:mb-32 max-w-6xl">
            We build digital products that convert. Solutions that scale. Technology that puts your brand in motion. Fast, smart, and future-ready.
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 xl:gap-32 items-center">
            {/* Image Section - Technology Related */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-purple-400/10 rounded-3xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=600&fit=crop"
                  alt="Developer working on laptop"
                  className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </div>

            {/* Text Content Section - Smaller Text */}
            <div className="order-1 lg:order-2 space-y-4 md:space-y-5">
              <p className="text-base md:text-xl lg:text-2xl font-semibold text-black leading-relaxed">
                We don't stop at beautiful websites and sleek apps. We make them perform.
              </p>
              <p className="text-base md:text-xl lg:text-2xl font-semibold text-black leading-relaxed">
                So you know exactly what drives results and what doesn't.
              </p>
              <p className="text-base md:text-xl lg:text-2xl font-semibold text-black leading-relaxed">
                No more tech without strategy.
              </p>
              <p className="text-base md:text-xl lg:text-2xl font-semibold text-black leading-relaxed">
                No more solutions without ROI.
              </p>

              {/* CTA Button - Solid Orange */}
              <div className="pt-4 md:pt-8">
                <button 
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="group inline-flex items-center gap-2 md:gap-3 bg-[#FC6D26] hover:bg-[#e85d1a] text-white font-semibold text-sm md:text-lg px-6 md:px-9 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Free Consultation
                  <span className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full transition-all duration-300 group-hover:bg-white/30">
                    <svg 
                      className="w-3 h-3 md:w-4 md:h-4 text-white transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="flex justify-center lg:justify-end mt-12 md:mt-20">
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-black transition-all duration-300 group">
              <svg 
                className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-white transition-colors duration-300 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
