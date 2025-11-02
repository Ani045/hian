import { CheckCircle, Home, MessageCircle } from 'lucide-react';

interface ThankYouPageProps {
  onNavigate: (page: string) => void;
}

export default function ThankYouPage({ onNavigate }: ThankYouPageProps) {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50">
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass rounded-3xl p-12 md:p-16">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full gradient-orange-purple flex items-center justify-center animate-scale-in">
                <CheckCircle className="text-white" size={40} />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Thank You!
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
                Your message has been sent successfully. We'll get back to you within 24 hours.
              </p>
              
              <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl p-6 mb-8 animate-fade-in-up">
                <div className="flex items-center justify-center gap-3 text-gray-700">
                  <MessageCircle size={20} className="text-orange-500" />
                  <span className="font-medium">
                    We've received your inquiry and will respond soon!
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-3 gradient-orange-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all hover:scale-[1.02] animate-fade-in-up"
              >
                <Home size={20} />
                Back to Home
              </button>
              
              <p className="text-sm text-gray-500 mt-6 animate-fade-in-up">
                Need immediate assistance? Call us at{' '}
                <a href="tel:+919729007351" className="text-orange-500 hover:text-orange-600 font-medium">
                  +91 9729007351
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-orange-purple flex items-center justify-center">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-orange-purple flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Free Consultation</h3>
                <p className="text-gray-600 text-sm">Initial consultation is always free of charge</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-orange-purple flex items-center justify-center">
                  <Home className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Tailored Solutions</h3>
                <p className="text-gray-600 text-sm">Custom solutions designed for your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}