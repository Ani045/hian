import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Do you work with small businesses or only startups?',
    answer: 'We work with businesses of all sizes - from small local businesses to growing startups and established enterprises. Our solutions are tailored to fit your specific needs and budget.',
  },
  {
    question: 'How long does a website or app take to build?',
    answer: 'Timeline varies based on project complexity. A simple website takes 2-4 weeks, while complex web applications or mobile apps can take 8-16 weeks. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer: 'Yes! We offer comprehensive maintenance and support packages to ensure your digital products continue to perform optimally. This includes updates, bug fixes, and technical assistance.',
  },
  {
    question: 'Is AI automation expensive?',
    answer: 'Not at all. Our AI automation solutions are designed to provide ROI by reducing manual work and increasing efficiency. We offer flexible pricing based on your specific requirements and scale.',
  },
];

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');



  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Let's Build Something <span className="text-gradient">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-600">
              Ready to transform your business with cutting-edge digital solutions? We're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <div className="glass rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                <form 
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    
                    try {
                      const formData = new FormData(e.target as HTMLFormElement);
                      
                      // Submit to Formsubmit
                      const response = await fetch('https://formsubmit.co/contact@hiantechnologies.com', {
                        method: 'POST',
                        body: formData
                      });
                      
                      if (response.ok) {
                        setSubmitStatus('success');
                        
                        // Reset form
                        (e.target as HTMLFormElement).reset();
                        
                        // Redirect to thank you page after short delay
                        setTimeout(() => {
                          if (onNavigate) {
                            onNavigate('thankyou');
                          }
                        }, 1500);
                      } else {
                        setSubmitStatus('error');
                      }
                    } catch (error) {
                      console.error('Form submission error:', error);
                      setSubmitStatus('error');
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  className="space-y-6"
                >
                  {/* Hidden fields for Formsubmit configuration */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission from Hian Technologies" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="+91 123 456 7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Webdevelopment</option>
                        <option value="app-development">Appdevelopment</option>
                        <option value="ai-automation">Aiautomation</option>
                        <option value="digital-marketing">Digitalmarketing</option>
                        <option value="branding">Brandinganddesign</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={20} />
                      <span className="text-green-700 font-medium">Message sent successfully! Redirecting...</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                      <AlertCircle className="text-red-500" size={20} />
                      <span className="text-red-700 font-medium">Failed to send message. Please try again or contact us directly.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full gradient-orange-purple text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle size={20} />
                        Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-orange-purple flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <a href="mailto:contact@hiantechnologies.com" className="text-gray-600 hover:text-orange-500 transition-colors">
                        contact@hiantechnologies.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-orange-purple flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Phone</p>
                      <a href="tel:+919729007351" className="text-gray-600 hover:text-orange-500 transition-colors">
                        +91 9729007351
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-orange-purple flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Location</p>
                      <p className="text-gray-600">Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gradient-orange-purple rounded-3xl p-8 text-white">
                <MessageCircle size={40} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Prefer a Quick Chat?</h3>
                <p className="mb-4 opacity-90">Schedule a free consultation call with our team</p>
                <button className="w-full bg-white text-orange-600 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
