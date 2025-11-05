import { ArrowRight, Calendar, Zap } from 'lucide-react';

interface CTAProps {
  onNavigate?: (page: string) => void;
}

export default function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-orange-purple animate-gradient"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Build Your Next Big Thing
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to transform your business with cutting-edge technology?
            Let's discuss how we can help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => onNavigate && onNavigate('contact')}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <Calendar size={20} />
              Book a Free Strategy Call
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all hover:scale-105 flex items-center gap-2"
            >
              Start Your Digital Transformation
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="glass-dark rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="text-yellow-300" size={24} />
              <h3 className="text-2xl font-bold">Automate Your Business with AI Today</h3>
            </div>
            <p className="text-lg opacity-90">
              Join hundreds of businesses leveraging AI to save time, reduce costs, and scale faster
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-2xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-2xl opacity-20 animate-float-delayed"></div>
    </section>
  );
}
