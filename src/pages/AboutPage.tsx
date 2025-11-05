import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const image4Ref = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLHeadingElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const visionStat1Ref = useRef<HTMLDivElement>(null);
  const visionStat2Ref = useRef<HTMLDivElement>(null);
  const visionStat3Ref = useRef<HTMLDivElement>(null);
  const visionStat4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Hero fade in
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.3
      });

      // Images Section Timeline
      const imagesTl = gsap.timeline({
        scrollTrigger: {
          trigger: imagesContainerRef.current,
          start: 'top top',
          end: '+=2500',
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          pinSpacing: true,
          invalidateOnRefresh: true
        }
      });

      imagesTl.to(bgTextRef.current, {
        opacity: 0.12,
        scale: 1.15,
        ease: 'none'
      }, 0);

      imagesTl.fromTo(image1Ref.current,
        { opacity: 0, y: 150, scale: 0.7, rotation: -8 },
        { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.4)' },
        0.1
      );

      imagesTl.fromTo(image2Ref.current,
        { opacity: 0, y: 180, scale: 0.7, rotation: 8 },
        { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.4)' },
        0.25
      );

      imagesTl.fromTo(image3Ref.current,
        { opacity: 0, y: 160, scale: 0.7, rotation: -6 },
        { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.4)' },
        0.4
      );

      imagesTl.fromTo(image4Ref.current,
        { opacity: 0, y: 170, scale: 0.7, rotation: 6 },
        { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.4)' },
        0.55
      );

      imagesTl.to([image1Ref.current, image3Ref.current], {
        y: -15,
        ease: 'sine.inOut'
      }, 0.75);

      imagesTl.to([image2Ref.current, image4Ref.current], {
        y: -20,
        ease: 'sine.inOut'
      }, 0.8);

      // Smooth fade out of images container and transition to mission
      imagesTl.to(imagesContainerRef.current, {
        opacity: 0,
        scale: 0.98,
        filter: 'blur(5px)',
        duration: 0.3,
        ease: 'power2.inOut'
      }, 0.85);

      // Mission Section - smooth transition
      gsap.fromTo(missionRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 50,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 0.8,
            invalidateOnRefresh: true
          }
        }
      );

      // Mission text animations
      gsap.from('.mission-text', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top 70%'
        }
      });

      // Vision Section
      gsap.fromTo(visionRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: 100,
          filter: 'blur(20px)'
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: visionRef.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1.2,
            invalidateOnRefresh: true
          }
        }
      );

      // Vision Stats Timeline
      const visionStatsTl = gsap.timeline({
        scrollTrigger: {
          trigger: visionRef.current,
          start: 'top 65%',
          end: 'top 20%',
          scrub: 1,
          invalidateOnRefresh: true
        }
      });

      visionStatsTl.fromTo(visionStat1Ref.current,
        { opacity: 0, y: 150, scale: 0.7, rotation: -8 },
        { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.4)' },
        0
      );

      visionStatsTl.fromTo(visionStat2Ref.current,
        { opacity: 0, y: 180, scale: 0.7, rotation: 8 },
        { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.4)' },
        0.15
      );

      visionStatsTl.fromTo(visionStat3Ref.current,
        { opacity: 0, y: 160, scale: 0.7, rotation: -6 },
        { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.4)' },
        0.3
      );

      visionStatsTl.fromTo(visionStat4Ref.current,
        { opacity: 0, y: 170, scale: 0.7, rotation: 6 },
        { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.4)' },
        0.45
      );

      // Floating effect on stats
      visionStatsTl.to([visionStat1Ref.current, visionStat3Ref.current], {
        y: -10,
        ease: 'sine.inOut'
      }, 0.7);

      visionStatsTl.to([visionStat2Ref.current, visionStat4Ref.current], {
        y: -15,
        ease: 'sine.inOut'
      }, 0.75);

      // Vision text
      gsap.from('.vision-text', {
        opacity: 0,
        x: -60,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: visionRef.current,
          start: 'top 60%'
        }
      });


    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50 overflow-x-hidden">
      
      {/* SECTION 1: Hero */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 pt-20 pb-32">
        <div className="max-w-7xl w-full">
          <div className="mb-16 md:mb-20">
            <span className="text-sm md:text-base uppercase tracking-wider text-[#FC6D26] bg-white/80 px-5 py-3 rounded-full inline-block font-semibold shadow-lg">
              About Hian Technologies
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-gray-900">
                Innovation.<br/>
                Excellence.<br/>
                <span className="bg-gradient-to-r from-[#FC6D26] via-orange-500 to-purple-600 bg-clip-text text-transparent">
                  Results.
                </span>
              </h1>
            </div>
            
            <div className="space-y-8 lg:pt-12">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Hian Technologies is your trusted partner in digital transformation. We specialize in 
                cutting-edge web development, mobile applications, AI automation, and digital marketing 
                solutions that drive real business growth.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                From Mumbai to the world, we deliver fast, reliable, and innovative solutions that 
                help businesses thrive in the digital age.
              </p>
            </div>
          </div>
          
          <div className="mt-24 md:mt-32 w-full max-w-sm md:max-w-md">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FC6D26] transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Hian Technologies team"
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Sticky Floating Images */}
      <section className="relative">
        <div ref={imagesContainerRef} className="h-screen relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
          
          <h2 ref={bgTextRef} className="absolute inset-0 flex items-center justify-center text-6xl md:text-8xl lg:text-9xl font-black text-center px-4 leading-tight text-gray-900/5 pointer-events-none select-none">
            We build digital excellence.
          </h2>
          
          <div className="relative w-full h-full max-w-7xl mx-auto px-4">
            
            <div 
              ref={image1Ref}
              className="absolute top-12 md:top-20 left-4 md:left-12 lg:left-24 w-48 md:w-64 lg:w-80"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FC6D26]/30 transform hover:scale-105 hover:rotate-2 transition-all duration-500 will-change-transform">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" 
                  alt="Web Development"
                  className="w-full h-48 md:h-64 lg:h-80 object-cover"
                />
              </div>
            </div>

            <div 
              ref={image2Ref}
              className="absolute top-16 md:top-24 right-4 md:right-12 lg:right-32 w-56 md:w-72 lg:w-96"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-600/30 transform hover:scale-105 hover:-rotate-2 transition-all duration-500 will-change-transform">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" 
                  alt="Mobile Development"
                  className="w-full h-56 md:h-72 lg:h-96 object-cover"
                />
              </div>
            </div>

            <div 
              ref={image3Ref}
              className="absolute bottom-20 md:bottom-28 left-8 md:left-16 lg:left-32 w-40 md:w-56 lg:w-72"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-500/30 transform hover:scale-105 hover:rotate-3 transition-all duration-500 will-change-transform">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" 
                  alt="AI Solutions"
                  className="w-full h-40 md:h-56 lg:h-72 object-cover"
                />
              </div>
            </div>

            <div 
              ref={image4Ref}
              className="absolute bottom-12 md:bottom-20 right-8 md:right-20 lg:right-40 w-52 md:w-64 lg:w-80"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-pink-500/30 transform hover:scale-105 hover:-rotate-3 transition-all duration-500 will-change-transform">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                  alt="Digital Marketing"
                  className="w-full h-52 md:h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Mission */}
      <section ref={missionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-50/80 via-amber-50/80 to-yellow-50/80 will-change-transform py-32 md:py-40">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#FC6D26]/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-orange-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-300/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 px-4 md:px-8 lg:px-16 w-full">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-20 md:mb-28">
              <span className="mission-text text-xs md:text-sm uppercase tracking-widest text-[#FC6D26] inline-block font-bold bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-[#FC6D26]/20 mb-8">
                Our Mission
              </span>
              <h2 className="mission-text text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-4 md:mb-8 font-figtree text-gray-900">
                Empowering businesses<br className="hidden md:block"/>
                through technology.
              </h2>
              <p className="mission-text text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                We bridge the gap between innovative ideas and digital reality with cutting-edge solutions that drive measurable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Vision */}
      <section ref={visionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50/80 via-pink-50/80 to-indigo-50/80 will-change-transform py-32 md:py-40">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-tl from-pink-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-indigo-300/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="relative z-10 px-4 md:px-8 lg:px-16 w-full">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
              
              <div className="space-y-8 md:space-y-10">
                <span className="vision-text text-xs md:text-sm uppercase tracking-widest text-purple-700 inline-block font-bold bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-purple-600/20">
                  Our Vision
                </span>
                <h3 className="vision-text text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900">
                  Leading the digital transformation.
                </h3>
                <p className="vision-text text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  We envision a world where every business has access to world-class digital solutions through AI automation and innovative development.
                </p>
                
                <div className="vision-text flex gap-4 pt-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-purple-600/20">
                    <div className="text-2xl font-black text-purple-700 mb-1">5+</div>
                    <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-pink-500/20">
                    <div className="text-2xl font-black text-pink-600 mb-1">50+</div>
                    <div className="text-xs text-gray-600 font-medium">Industries Served</div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[600px]">
                
                <div 
                  ref={visionStat1Ref}
                  className="absolute top-0 left-0 w-48 md:w-56 will-change-transform"
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-[#FC6D26]/30 hover:border-[#FC6D26]/50 hover:scale-105 transition-all duration-500">
                    <div className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-br from-[#FC6D26] to-orange-500 bg-clip-text text-transparent">50+</div>
                    <div className="text-sm md:text-base text-gray-700 font-semibold">Projects Delivered</div>
                    <div className="mt-3 h-1 w-12 bg-gradient-to-r from-[#FC6D26] to-orange-500 rounded-full" />
                  </div>
                </div>

                <div 
                  ref={visionStat2Ref}
                  className="absolute top-12 right-0 w-52 md:w-60 will-change-transform"
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-purple-600/30 hover:border-purple-600/50 hover:scale-105 transition-all duration-500">
                    <div className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent">98%</div>
                    <div className="text-sm md:text-base text-gray-700 font-semibold">Client Satisfaction</div>
                    <div className="mt-3 h-1 w-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full" />
                  </div>
                </div>

                <div 
                  ref={visionStat3Ref}
                  className="absolute bottom-24 left-8 w-44 md:w-52 will-change-transform"
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-blue-500/30 hover:border-blue-500/50 hover:scale-105 transition-all duration-500">
                    <div className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 bg-clip-text text-transparent">15+</div>
                    <div className="text-sm md:text-base text-gray-700 font-semibold">Expert Developers</div>
                    <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  </div>
                </div>

                <div 
                  ref={visionStat4Ref}
                  className="absolute bottom-0 right-8 w-48 md:w-56 will-change-transform"
                >
                  <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-pink-500/30 hover:border-pink-500/50 hover:scale-105 transition-all duration-500">
                    <div className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-br from-pink-500 to-red-500 bg-clip-text text-transparent">24/7</div>
                    <div className="text-sm md:text-base text-gray-700 font-semibold">Support Available</div>
                    <div className="mt-3 h-1 w-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 5: CTA */}
      {/* <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FC6D26]/10 via-purple-600/10 to-pink-600/10" />
        
        <div className="absolute top-20 left-10 w-48 md:w-64 h-48 md:h-64 bg-[#FC6D26]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center space-y-8 md:space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-figtree">
            Ready to transform<br className="hidden md:block"/>
            your business?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of satisfied clients who've accelerated their growth with Hian Technologies. 
            Let's build something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => onNavigate && onNavigate('contact')}
              className="bg-gradient-to-r from-[#FC6D26] to-orange-500 text-white px-10 md:px-14 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('contact')}
              className="border-2 border-white text-white px-10 md:px-14 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
