import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Clock, Award, Heart, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorPhoto from "@/assets/doctor-photo.png";
import beforeAfter1 from "@/assets/before-after-1.png";
import beforeAfter2 from "@/assets/before-after-2.png";
import beforeAfter3 from "@/assets/before-after-3.png";
import clinic1 from "@/assets/clinic-1.png";
import clinic2 from "@/assets/clinic-2.png";

const features = [
  { icon: Award, title: "14+ Years Experience", desc: "Trusted expertise in advanced dental care" },
  { icon: Shield, title: "Advanced Implants", desc: "Full-mouth and single-tooth solutions" },
  { icon: Heart, title: "Comfort-First Care", desc: "Pain-managed treatments for all ages" },
  { icon: Clock, title: "Flexible Hours", desc: "Morning & evening appointments available" },
];

const beforeAfterImages = [
  { src: beforeAfter1, alt: "Dental transformation case 1" },
  { src: beforeAfter2, alt: "Dental transformation case 2" },
  { src: beforeAfter3, alt: "Dental transformation case 3" },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Doctor Profile + Clinic Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Clinic Name with Doctor Photo */}
              <div className="flex items-center gap-5 mb-6">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative"
                >
                  <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-glow">
                    <img 
                      src={doctorPhoto} 
                      alt="Dr. Kiran Krishna Patil" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-4 h-4 text-primary-foreground" />
                  </div>
                </motion.div>
                <div>
                  <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                    Smile Catchers
                  </h1>
                  <p className="text-primary font-semibold text-lg">Dental Clinic & Implant Center</p>
                  <p className="text-sm text-muted-foreground mt-1">Dr. Kiran Krishna Patil • BDS</p>
                </div>
              </div>

              {/* Tagline */}
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
              >
                Comfortable.{" "}
                <span className="text-gradient">Trusted.</span>{" "}
                <br className="hidden sm:block" />
                Advanced Dental Care.
              </motion.h2>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-start gap-3 mb-6 p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Shop No. 208, 2nd Floor, R6 Commercial Complex, Life Republic Township, 
                  Tathawade, Marunji, Pimpri-Chinchwad, Maharashtra 411057
                </p>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg text-muted-foreground mb-8 max-w-lg"
              >
                Experience patient-focused dentistry with modern equipment, 
                strict sterilization standards, and 14+ years of expertise.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild variant="hero" size="lg" className="shadow-glow">
                  <Link to="/contact">
                    Book Appointment
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-card text-foreground border border-primary/30 hover:bg-accent hover:border-primary/50">
                  <a href="tel:+917387166259">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 73871 66259
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Clinic Images */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="col-span-2 rounded-2xl overflow-hidden shadow-card"
                >
                  <img src={clinic1} alt="Modern dental clinic interior" className="w-full h-64 object-cover" />
                </motion.div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="rounded-2xl overflow-hidden shadow-card"
                >
                  <img src={clinic2} alt="Dental treatment room" className="w-full h-40 object-cover" />
                </motion.div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-6 flex flex-col justify-center items-center text-center shadow-card"
                >
                  <span className="text-4xl font-bold text-primary-foreground">14+</span>
                  <span className="text-sm text-primary-foreground/90">Years of Excellence</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Real Results
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Smile <span className="text-gradient">Transformations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the incredible results achieved by our patients through advanced dental treatments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeAfterImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-shadow duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient">Smile Catchers</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine advanced technology with compassionate care to deliver exceptional dental experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group border border-transparent hover:border-primary/20"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready for Your Best Smile?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-xl mx-auto text-lg">
              Schedule your consultation today and experience the difference of patient-centered dental care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 shadow-lg">
                <Link to="/contact">
                  Book Your Appointment
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://wa.me/917387166259" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
