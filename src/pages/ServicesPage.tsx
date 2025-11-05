import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Smartphone, TrendingUp, Bot, MessageCircle, Share2, Palette, Sparkles, Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Transform your digital presence with custom, responsive, and high-performance websites.',
    features: [
      'Custom website design and development',
      'E-commerce solutions with secure payments',
      'Progressive Web Apps (PWAs)',
      'Content Management Systems (CMS)',
      'Website maintenance and support',
      'Performance optimization and SEO',
    ],
    color: 'from-orange-400 to-amber-500',
    bgColor: 'from-orange-50 to-amber-50',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: [
      'iOS and Android native apps',
      'Cross-platform development (React Native)',
      'App UI/UX design',
      'Backend API development',
      'App Store deployment',
      'Maintenance and updates',
    ],
    color: 'from-purple-400 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Performance Marketing',
    description: 'Data-driven strategies to boost your online visibility and drive organic growth.',
    features: [
      'Technical SEO audits',
      'On-page and off-page optimization',
      'Keyword research and strategy',
      'Content marketing',
      'Performance tracking and analytics',
      'Conversion rate optimization',
    ],
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    icon: Bot,
    title: 'AI Automations & Chatbots',
    description: 'Intelligent automation solutions that work 24/7 to support your business operations.',
    features: [
      'AI-powered chatbots',
      'Customer support automation',
      'Business process automation',
      'Natural language processing',
      'Integration with existing systems',
      'Analytics and insights',
    ],
    color: 'from-green-400 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    description: 'Leverage WhatsApp Business API to automate customer engagement and support.',
    features: [
      'WhatsApp Business API setup',
      'Automated messaging workflows',
      'Customer notification systems',
      'Two-way communication',
      'Integration with CRM',
      'Analytics and reporting',
    ],
    color: 'from-teal-400 to-green-500',
    bgColor: 'from-teal-50 to-green-50',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Creative campaigns and strategies to build your brand and engage your audience.',
    features: [
      'Social media strategy',
      'Content creation and curation',
      'Community management',
      'Paid advertising campaigns',
      'Influencer partnerships',
      'Performance analytics',
    ],
    color: 'from-pink-400 to-rose-500',
    bgColor: 'from-pink-50 to-rose-50',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
  },
  {
    icon: Palette,
    title: 'Branding & Graphic Design',
    description: 'Create a powerful brand identity that resonates with your target audience.',
    features: [
      'Logo design and branding',
      'Brand style guide creation',
      'Marketing collateral design',
      'UI/UX design',
      'Packaging design',
      'Print and digital assets',
    ],
    color: 'from-amber-400 to-orange-500',
    bgColor: 'from-amber-50 to-orange-50',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    icon: Sparkles,
    title: 'AI Powered Solutions',
    description: 'Next-generation intelligent systems that transform how you operate and serve customers.',
    features: [
      'Custom AI model development',
      'Predictive analytics',
      'Computer vision solutions',
      'Voice recognition systems',
      'Recommendation engines',
      'AI strategy consulting',
    ],
    color: 'from-violet-400 to-purple-500',
    bgColor: 'from-violet-50 to-purple-50',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Hero Animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.3
      });

      // Service Cards Stagger Animation
      servicesRefs.current.forEach((card, index) => {
        if (!card) return;

        // Main card reveal
        gsap.fromTo(card,
          {
            opacity: 0,
            scale: 0.9,
            y: 100,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1,
              invalidateOnRefresh: true
            }
          }
        );

        // Icon animation
        gsap.fromTo(card.querySelector('.service-icon'),
          { scale: 0, rotation: -180 },
          {
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%'
            }
          }
        );

        // Feature items stagger
        gsap.from(card.querySelectorAll('.feature-item'), {
          opacity: 0,
          x: -30,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 70%'
          }
        });

        // Image reveal with scale and clip-path
        gsap.fromTo(card.querySelector('.service-image'),
          { scale: 1.2, clipPath: 'inset(0% 100% 0% 0%)' },
          {
            scale: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%'
            }
          }
        );
      });

      // CTA Animation
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%'
          }
        }
      );

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50">
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#FC6D26]/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-purple-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-sm md:text-base uppercase tracking-wider text-[#FC6D26] bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full inline-block font-bold shadow-lg mb-8">
            What We Offer
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
            Our <span className="bg-gradient-to-r from-[#FC6D26] via-orange-500 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and accelerate growth. 
            We combine cutting-edge technology with strategic thinking to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-20 md:pb-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-40">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => (servicesRefs.current[index] = el)}
                className="will-change-transform"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-16 lg:gap-20 items-center`}>
                  
                  {/* Content Side */}
                  <div className="flex-1 space-y-8">
                    {/* Icon with gradient background */}
                    <div className="service-icon">
                      <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl`}>
                        <Icon className="text-white" size={40} strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-4">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4 pt-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="feature-item flex items-start gap-4 group">
                          <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Check className="text-white" size={16} strokeWidth={3} />
                          </div>
                          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                      <button className={`group bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3`}>
                        Learn More
                        <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Image Side with Glassmorphism */}
                  <div className="flex-1">
                    <div className="relative">
                      {/* Glassmorphism container */}
                      <div className={`relative rounded-3xl md:rounded-[3rem] p-8 md:p-12 bg-gradient-to-br ${service.bgColor} backdrop-blur-lg border-2 border-white/50 shadow-2xl overflow-hidden`}>
                        {/* Glass effect overlay */}
                        <div className="absolute inset-0 bg-white/30 backdrop-blur-md" />
                        
                        {/* Decorative gradient orbs */}
                        <div className={`absolute top-10 right-10 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-30`} />
                        <div className={`absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-20`} />
                        
                        {/* Image Display */}
                        <div className="relative aspect-square bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                          <img 
                            src={service.image}
                            alt={service.title}
                            className="service-image w-full h-full object-cover"
                          />
                          
                          {/* Gradient overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 mix-blend-multiply`} />
                          
                          {/* Icon overlay in corner */}
                          <div className={`absolute bottom-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl backdrop-blur-sm bg-opacity-90`}>
                            <Icon className="text-white" size={32} strokeWidth={2} />
                          </div>
                        </div>

                        {/* Floating badges */}
                        <div className="relative mt-8 flex justify-center gap-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
                            <span className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                              Premium Quality
                            </span>
                          </div>
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/50">
                            <span className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                              24/7 Support
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      
    </div>
  );
}
