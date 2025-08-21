import { useState } from 'react';
import { toast } from "sonner";
import { useTranslation } from 'react-i18next';
import { Send, User, Mail, Phone, Building, MessageSquare, CheckCircle } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const ModernContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
        position: "top-center",
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const inputFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      icon: User,
      required: true,
      placeholder: 'John Doe'
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      icon: Mail,
      required: true,
      placeholder: 'you@example.com'
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      icon: Phone,
      required: false,
      placeholder: '+234 800 000 0000'
    },
    {
      name: 'company',
      label: 'Company Name',
      type: 'text',
      icon: Building,
      required: false,
      placeholder: 'Your Company (Optional)'
    }
  ];

  const subjectOptions = [
    { value: '', label: 'Select inquiry type' },
    { value: 'Residential Installation', label: 'Residential Installation' },
    { value: 'Commercial Installation', label: 'Commercial Installation' },
    { value: 'Energy Storage System', label: 'Energy Storage System' },
    { value: 'Product Inquiry', label: 'Product Inquiry' },
    { value: 'Service Request', label: 'Service Request' },
    { value: 'Other', label: 'Other' }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style={{
             backgroundImage: `url('/lovable-uploads/2cd49726-2b3c-4c67-8cc8-416dbc8fa7ec.png')`
           }}>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
                <MessageSquare className="w-4 h-4 text-primary mr-2" />
                <span className="text-primary text-sm font-medium">Send Message</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Start Your Solar Journey Today
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tell us about your project and energy needs. Our solar experts will provide you with a customized solution and quote.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200}>
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Input Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {inputFields.map((field) => {
                    const Icon = field.icon;
                    const isFocused = focusedField === field.name;
                    const hasValue = formData[field.name as keyof typeof formData];
                    
                    return (
                      <div key={field.name} className="relative group">
                        <div className={`relative transition-all duration-300 ${isFocused ? 'transform scale-[1.02]' : ''}`}>
                          <Icon className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 z-10 ${
                            isFocused || hasValue ? 'text-primary' : 'text-gray-400'
                          }`} />
                          
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            required={field.required}
                            className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50/50 focus:bg-white focus:outline-none ${
                              isFocused 
                                ? 'border-primary shadow-lg shadow-primary/10' 
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            placeholder=" "
                          />
                          
                          <label
                            htmlFor={field.name}
                            className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                              isFocused || hasValue
                                ? 'top-2 text-xs text-primary font-medium'
                                : 'top-1/2 transform -translate-y-1/2 text-gray-500'
                            }`}
                          >
                            {field.label} {field.required && <span className="text-red-500">*</span>}
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Subject Dropdown */}
                <div className="relative group">
                  <div className={`relative transition-all duration-300 ${focusedField === 'subject' ? 'transform scale-[1.02]' : ''}`}>
                    <MessageSquare className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 z-10 ${
                      focusedField === 'subject' || formData.subject ? 'text-primary' : 'text-gray-400'
                    }`} />
                    
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50/50 focus:bg-white focus:outline-none appearance-none ${
                        focusedField === 'subject'
                          ? 'border-primary shadow-lg shadow-primary/10' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {subjectOptions.map((option) => (
                        <option key={option.value} value={option.value} disabled={!option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    
                    <label
                      htmlFor="subject"
                      className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                        focusedField === 'subject' || formData.subject
                          ? 'top-2 text-xs text-primary font-medium'
                          : 'top-1/2 transform -translate-y-1/2 text-gray-500'
                      }`}
                    >
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative group">
                  <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'transform scale-[1.02]' : ''}`}>
                    <MessageSquare className={`absolute left-4 top-6 w-5 h-5 transition-colors duration-300 z-10 ${
                      focusedField === 'message' || formData.message ? 'text-primary' : 'text-gray-400'
                    }`} />
                    
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50/50 focus:bg-white focus:outline-none resize-none ${
                        focusedField === 'message'
                          ? 'border-primary shadow-lg shadow-primary/10' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder=" "
                    ></textarea>
                    
                    <label
                      htmlFor="message"
                      className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                        focusedField === 'message' || formData.message
                          ? 'top-2 text-xs text-primary font-medium'
                          : 'top-6 text-gray-500'
                      }`}
                    >
                      Tell us about your project <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-primary to-primary/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:from-primary/90 hover:to-primary hover:shadow-xl hover:shadow-primary/25 focus:outline-none focus:ring-4 focus:ring-primary/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                  >
                    {/* Button Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </button>
                  
                  <p className="text-center text-gray-500 text-sm mt-4">
                    We typically respond within 2-4 hours during business hours.
                  </p>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ModernContactForm;