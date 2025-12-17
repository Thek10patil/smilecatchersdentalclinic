import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Shop No. 208, 2nd Floor, R6 Commercial Complex, Life Republic Township, Tathawade, Marunji, Pimpri-Chinchwad, Maharashtra 411057",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 73871 66259",
    href: "tel:+917387166259",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 73871 66259",
    href: "https://wa.me/917387166259",
  },
  {
    icon: Mail,
    label: "Email",
    value: "smilecatchers22@gmail.com",
    href: "mailto:smilecatchers22@gmail.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM (Daily)",
  },
];

const services = [
  "General Checkup",
  "Dental Implants",
  "Root Canal Treatment",
  "Cosmetic Dentistry",
  "Crowns & Bridges",
  "Gum Treatment",
  "Other",
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast({
      title: "Appointment Request Submitted!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({ name: "", phone: "", service: "", message: "" });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to schedule your appointment? Contact us today or fill out the 
              form below and we'll get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("https") ? "_blank" : undefined}
                          rel={info.href.startsWith("https") ? "noopener noreferrer" : undefined}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card bg-card border border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4892097037444!2d73.7566!3d18.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f9a9c8d7e5%3A0x4d0d2e5a3e6c8f0a!2sLife%20Republic%2C%20Marunji%2C%20Pune%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Smile Catchers Dental Clinic Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>

            {/* Appointment Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl shadow-card p-8 border border-border/50">
                <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Book Appointment
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form and we'll contact you to confirm.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="+91-XXXXX-XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    >
                      <option value="">Choose a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Any specific concerns or preferred appointment times..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full shadow-glow">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Appointment Request
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border/50 text-center">
                  <p className="text-sm text-muted-foreground mb-3">Or reach us directly</p>
                  <div className="flex justify-center gap-3">
                    <Button asChild variant="outline" size="sm">
                      <a href="tel:+917387166259">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href="https://wa.me/917387166259" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
