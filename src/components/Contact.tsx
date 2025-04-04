import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section 
      id="contact" 
      className="py-20 relative"
      style={{
        backgroundImage: "url('/visax.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hidden Netlify form for build-time detection */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message" />
      </form>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-white/80">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="text-white" data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-6 text-blue-500">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-blue-500">Location</h4>
                  <p className="text-white/70">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-blue-500">Email</h4>
                  <p className="text-white/70">arthuroluoch624@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="mt-1 text-primary" />
                <div>
                  <h4 className="font-medium text-blue-500">Phone</h4>
                  <p className="text-white/70">+254796915506</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
              method="POST"
              name="contact"
              data-netlify="true"
              action="/success"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2 text-sm">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-white mb-2 text-sm">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded hover:bg-wood transition-colors"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;