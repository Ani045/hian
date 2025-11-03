import { useEffect, useState } from 'react';

const clientLogos = [
  {
    name: 'Microsoft',
    logo: '/IGEHRC-new-logo.webp',
    alt: 'Microsoft'
  },
  {
    name: 'Google',
    logo: '/download (1).png',
    alt: 'Google'
  },
  {
    name: 'Apple',
    logo: '/cf-logo.png',
    alt: 'Apple'
  },
  {
    name: 'Amazon',
    logo: '/kuk.png',
    alt: 'Amazon'
  },
  {
    name: 'Netflix',
    logo: '/royal.avif',
    alt: 'Netflix'
  },
  {
    name: 'Tesla',
    logo: '/Y-Axis-Logo.webp',
    alt: 'Tesla'
  }, {
    name: 'Tesla',
    logo: '/download.png',
    alt: 'Tesla'
  },
  {
    name: 'Tesla',
    logo: '/logo-dark.svg',
    alt: 'Tesla'
  }
  
  
];

export default function ClientCarousel() {
  const [currentTranslate, setCurrentTranslate] = useState(0);

  // Triple the logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTranslate(prev => {
        const logoWidth = 280; // Width of each logo container including gap
        const resetPoint = clientLogos.length * logoWidth;
        
        if (prev >= resetPoint) {
          return 0;
        }
        return prev + 0.8; // Smooth movement speed
      });
    }, 16); // 60fps for butter smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading - Matching Homepage Style */}
        {/* <div className="mb-12 md:mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black leading-[1.1] max-w-4xl">
            These brands<br />
            got <span className="text-gradient">hyped</span>.
          </h2>
        </div> */}

        {/* Carousel Container - Colorful Logos */}
        <div className="relative overflow-hidden py-8 md:py-12">
          <div 
            className="flex items-center gap-12 md:gap-16 lg:gap-20 will-change-transform"
            style={{
              transform: `translateX(-${currentTranslate}px)`,
              width: `${duplicatedLogos.length * 280}px`
            }}
          >
            {duplicatedLogos.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-48 md:w-56 lg:w-64 h-20 md:h-24 lg:h-28 flex items-center justify-center group cursor-pointer"
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-w-full max-h-full object-contain transition-all duration-500 opacity-80 hover:opacity-100 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Gradient Fade Effects - Matching Homepage */}
          <div className="absolute top-0 left-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-r from-orange-50 via-amber-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-16 md:w-24 lg:w-32 h-full bg-gradient-to-l from-purple-50 via-amber-50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-orange-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-br from-amber-200/10 to-orange-200/10 rounded-full blur-3xl"></div>
    </section>
  );
}
