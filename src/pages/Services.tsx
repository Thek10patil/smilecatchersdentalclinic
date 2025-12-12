import { motion } from "framer-motion";
import { Stethoscope, Heart, Sparkles, Baby, Crown, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Dental Implants",
    desc: "Full-mouth rehabilitations and single-tooth implants using premium materials and advanced techniques for natural-looking, long-lasting results.",
    features: ["Single Tooth Implants", "Full Mouth Rehabilitation", "Implant-Supported Dentures"],
  },
  {
    icon: Activity,
    title: "Root Canal Treatment",
    desc: "Pain-managed endodontic treatment with modern rotary instruments and apex locators for precise, comfortable procedures.",
    features: ["Single Visit RCT", "Re-RCT Procedures", "Post & Core"],
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with professional whitening, veneers, and complete smile design services tailored to your preferences.",
    features: ["Teeth Whitening", "Dental Veneers", "Smile Makeover"],
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    desc: "Gentle, child-friendly dental care creating positive experiences for young patients in a comfortable environment.",
    features: ["Preventive Care", "Fluoride Treatment", "Sealants"],
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    desc: "Durable, aesthetically pleasing restorations crafted to match your natural teeth and restore full functionality.",
    features: ["Ceramic Crowns", "Metal-Free Options", "Fixed Bridges"],
  },
  {
    icon: Heart,
    title: "Gum Treatment & Scaling",
    desc: "Comprehensive periodontal care including deep cleaning, gum surgery, and ongoing maintenance for healthy gums.",
    features: ["Deep Scaling", "Gum Surgery", "Periodontal Maintenance"],
  },
];

export default function Services() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive dental care solutions from routine checkups to advanced 
              implant and cosmetic procedures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl shadow-soft hover:shadow-card transition-shadow overflow-hidden group"
              >
                <div className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Not Sure Which Treatment You Need?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a consultation and let Dr. Kiran help you find the best solution for your dental health.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
