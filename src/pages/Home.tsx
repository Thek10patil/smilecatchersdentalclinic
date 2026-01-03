import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Clock, Award, Heart, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import doctorPhoto from "@/assets/doctor-photo.png";
import clinicBg from "@/assets/clinic-hero-bg.jpg";
import smileCatchersLogo from "@/assets/smile-catchers-logo.png";

const features = [
  { icon: Award, title: "14+ Years Experience", desc: "Trusted expertise in advanced dental care" },
  { icon: Shield, title: "Advanced Implants", desc: "Full-mouth and single-tooth solutions" },
  { icon: Heart, title: "Comfort-First Care", desc: "Pain-managed treatments for all ages" },
  { icon: Clock, title: "Flexible Hours", desc: "Morning & evening appointments available" },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="bg-background">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={clinicBg} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* Animated decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-accent/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left: Clinic Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              {/* Clinic Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Smile Catchers
                  </h1>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-transparent rounded-full blur-md" />
                    <img 
                      src={smileCatchersLogo} 
                      alt="Smile Catchers Logo" 
                      className="relative h-10 sm:h-12 lg:h-14 w-auto mix-blend-multiply dark:mix-blend-screen opacity-90"
                    />
                  </div>
                </div>
                <p className="text-primary font-semibold text-xl sm:text-2xl">Dental Clinic & Implant Center</p>
              </motion.div>

              {/* Tagline */}
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground/80 leading-tight mb-8"
              >
                Comfortable.{" "}
                <span className="text-gradient font-bold">Trusted.</span>{" "}
                Advanced Dental Care.
              </motion.h2>

              {/* Doctor Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex items-center gap-4 mb-6 p-4 bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 shadow-soft max-w-md"
              >
                <Award className="w-10 h-10 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Dr. Kiran Krishna Patil</p>
                  <p className="text-sm text-muted-foreground">BDS • 14+ Years Experience</p>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-start gap-3 mb-8 p-4 bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 shadow-soft max-w-lg"
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
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg text-muted-foreground mb-8 max-w-lg"
              >
                Experience patient-focused dentistry with modern equipment, 
                strict sterilization standards, and compassionate care.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
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

            {/* Right: Doctor Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-lg" />
                
                {/* Doctor Photo */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl">
                  <img 
                    src={doctorPhoto} 
                    alt="Dr. Kiran Krishna Patil" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Experience badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-2xl shadow-lg"
                >
                  <span className="text-2xl font-bold">14+</span>
                  <span className="text-sm block">Years</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="relative bg-background p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group border border-transparent hover:border-primary/20"
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
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-foreground bg-card hover:bg-card/90">
                <a href="https://wa.me/917387166259" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
