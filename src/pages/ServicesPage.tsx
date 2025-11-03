import { Code, Smartphone, TrendingUp, Bot, MessageCircle, Share2, Palette, Sparkles, Check } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Webdevelopment',
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
  },
  {
    icon: Smartphone,
    title: 'Appdevelopment',
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
  },
  {
    icon: TrendingUp,
    title: 'Seoandperformancemarketing',
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
  },
  {
    icon: Bot,
    title: 'Aiautomationsandchatbots',
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
  },
  {
    icon: MessageCircle,
    title: 'Whatsappintegration',
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
  },
  {
    icon: Share2,
    title: 'Socialmediamarketing',
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
  },
  {
    icon: Palette,
    title: 'Brandingandgraphicdesign',
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
  },
  {
    icon: Sparkles,
    title: 'Aipoweredsolutions',
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
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive digital solutions designed to transform your business and accelerate growth.
              We combine cutting-edge technology with strategic thinking to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                      <Icon className="text-white" size={40} />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-xl text-gray-600 mb-8">{service.description}</p>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="text-white" size={16} />
                          </div>
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className={`glass rounded-3xl p-12 bg-gradient-to-br ${service.color} bg-opacity-10`}>
                      <div className="aspect-video bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <Icon className={`bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} size={120} strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals
          </p>
          <button className="gradient-orange-purple text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105">
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
