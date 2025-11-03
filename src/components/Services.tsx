import { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, TrendingUp, Bot, MessageCircle, Share2, Palette, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Webdevelopment',
    description: 'We dive deep into your brand, target audience and goals. And translate data into a clear plan with formats that really make an impact.',
    cardColor: 'bg-[#F5F1E8]',
    numberColor: 'text-[#D4C3A0]/20', // Very light beige
    number: '01',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
  },
  {
    icon: Smartphone,
    title: 'Appdevelopment',
    description: 'We dive deep into your brand, target audience and goals. And translate data into a clear plan with formats that really make an impact.',
    cardColor: 'bg-[#E8F5F1]',
    numberColor: 'text-[#A0D4C0]/20', // Very light green
    number: '02',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
  },
  {
    icon: TrendingUp,
    title: 'Seoandperformancemarketing',
    description: 'We dive deep into your brand, target audience and goals. And translate data into a clear plan with formats that really make an impact.',
    cardColor: 'bg-[#F1E8F5]',
    numberColor: 'text-[#C3A0D4]/20', // Very light purple
    number: '03',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
  },
  {
    icon: Bot,
    title: 'Aiautomationsandchatbots',
    description: 'We dive deep into your brand, target audience and goals. And translate data into a clear plan with formats that really make an impact.',
    cardColor: 'bg-[#E8F1F5]',
    numberColor: 'text-[#A0C3D4]/20', // Very light blue
    number: '04',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
  },
  {
    icon: MessageCircle,
    title: 'Whatsappintegration',
    description: 'We dive deep into your brand, target audience and goals. And translate data into a clear plan with formats that really make an impact.',
    cardColor: 'bg-[#F5E8F1]',
    numberColor: 'text-[#D4A0C3]/20', // Very light pink
    number: '05',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400&h=300&fit=crop',
  },
  {
    icon: Share2,
    title: 'Socialmediamarketing',
    description: 'We dive deep into your brand, target audience and goals. And translate data into a clear plan with formats that really make an impact.',
    cardColor: 'bg-[#F1F5E8]',
    numberColor: 'text-[#C3D4A0]/20', // Very light lime
    number: '06',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
  },
  {
    icon: Palette,
    title: 'Brandingandgraphicdesign',
    description: 'We dive deep into your brand, target audience and goals. And translate data into a clear plan with formats that really make an impact.',
    cardColor: 'bg-[#F8E8E8]',
    numberColor: 'text-[#D4A0A0]/20', // Very light coral
    number: '07',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'Aipoweredsolutions',
    description: 'We dive deep into your brand, target audience and goals. And translate data into a clear plan with formats that really make an impact.',
    cardColor: 'bg-[#E8F8F5]',
    numberColor: 'text-[#A0D4C8]/20', // Very light mint
    number: '08',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop',
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const relativeScroll = scrollTop - sectionTop;
      
      // Calculate progress through the section
      const sectionProgress = relativeScroll / (sectionHeight - windowHeight);
      
      // Map progress to card index with smoother transitions
      const rawIndex = sectionProgress * (services.length - 1);
      const newIndex = Math.round(rawIndex);
      const clampedIndex = Math.min(Math.max(0, newIndex), services.length - 1);
      
      setCurrentIndex(clampedIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50 py-16 md:py-24 lg:py-32">
      <div className="relative">
        {services.map((service, index) => {
          const isActive = index === currentIndex;
          const isPrevious = index < currentIndex;
          
          // Better transform logic for all cards
          const getTransform = () => {
            if (isPrevious && index <= currentIndex - 1) {
              // Only slight tilt for immediate previous card
              if (index === currentIndex - 1) {
                return 'rotate-1 scale-98';
              }
              // More tilt for cards further back
              return 'rotate-2 scale-95';
            }
            return 'rotate-0 scale-100';
          };
          
          return (
            <div
              key={index}
              className="sticky mb-2 md:mb-4"
              style={{
                top: isActive ? '30px' : `${50 + index * 15}px`, // Tighter spacing for better flow
              }}
            >
              <div 
                className={`${service.cardColor} rounded-2xl md:rounded-3xl lg:rounded-[2rem] shadow-xl md:shadow-2xl transition-all duration-500 mx-4 md:mx-8 lg:mx-16 xl:mx-24 ${getTransform()} relative overflow-hidden`}
                style={{ 
                  minHeight: '80vh', // Taller cards for full visibility
                  zIndex: isActive ? 50 : Math.max(1, 20 - index) // Ensure all cards have proper z-index
                }}
              >
                {/* Card Number - Top Right */}
                <div className={`absolute top-6 right-6 md:top-8 md:right-8 lg:top-12 lg:right-12 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black ${service.numberColor} leading-none pointer-events-none select-none`}>
                  {service.number}
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block px-8 md:px-16 lg:px-24 xl:px-32 py-16 md:py-20 lg:py-28">
                  <div className="max-w-7xl mx-auto h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center h-full">
                      
                      {/* Left Content - Desktop */}
                      <div className="space-y-8 md:space-y-12 lg:space-y-16">
                        {/* Small Label */}
                        <div className="inline-block">
                          <span className="bg-black/10 text-black text-xs md:text-sm font-medium px-4 py-2 rounded-full">
                            Expertise
                          </span>
                        </div>

                        {/* Service Title - Same heading style for all */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black leading-[0.9]">
                          {service.title.toLowerCase()}
                        </h3>

                        {/* Description */}
                        <div className="space-y-6">
                          <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-black">
                            Smart strategy. Strong start.
                          </h4>
                          <p className="text-sm md:text-base lg:text-lg text-black/80 leading-relaxed max-w-xl">
                            {service.description}
                          </p>
                        </div>

                        {/* CTA Button - Always visible */}
                        <div className="pt-6">
                          <button className="group inline-flex items-center gap-3 bg-[#FC6D26] hover:bg-[#e85d1a] text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative z-10">
                            More about {service.title.toLowerCase()}
                            <svg 
                              className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" 
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
                          </button>
                        </div>
                      </div>

                      {/* Right Content - Desktop */}
                      <div className="relative flex flex-col items-end justify-center space-y-8">
                        {/* Image */}
                        <div className="w-full max-w-xs lg:max-w-sm rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border-3 border-[#FC6D26] transform hover:scale-105 transition-transform duration-500">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-32 md:h-40 lg:h-48 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="block md:hidden px-6 py-12">
                  <div className="space-y-8 text-center min-h-[65vh] flex flex-col justify-center">
                    
                    {/* Mobile Image */}
                    <div className="relative">
                      <div className="w-full max-w-xs mx-auto rounded-2xl overflow-hidden shadow-lg border-3 border-[#FC6D26]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    </div>

                    {/* Mobile Content */}
                    <div className="space-y-6">
                      {/* Small Label */}
                      <div className="inline-block">
                        <span className="bg-black/10 text-black text-xs font-medium px-3 py-1.5 rounded-full">
                          Expertise
                        </span>
                      </div>

                      {/* Service Title - Same heading style for all */}
                      <h3 className="text-2xl md:text-3xl font-black text-black leading-tight">
                        {service.title.toLowerCase()}
                      </h3>

                      {/* Description */}
                      <div className="space-y-4">
                        <h4 className="text-base font-bold text-black">
                          Smart strategy. Strong start.
                        </h4>
                        <p className="text-sm text-black/80 leading-relaxed max-w-sm mx-auto">
                          {service.description}
                        </p>
                      </div>

                      {/* CTA Button - Always visible */}
                      <div className="pt-4">
                        <button className="group inline-flex items-center gap-2 bg-[#FC6D26] hover:bg-[#e85d1a] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 relative z-10">
                          More about {service.title.toLowerCase()}
                          <svg 
                            className="w-3 h-3 text-white transition-transform duration-300 group-hover:translate-x-1" 
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
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Bottom Spacer - Space for smooth transitions */}
        <div className="h-[80vh] md:h-[100vh]"></div>
      </div>
    </section>
  );
}
