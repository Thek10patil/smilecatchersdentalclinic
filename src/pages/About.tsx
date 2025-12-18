import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Heart, Sparkles } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import doctorPhoto from "@/assets/doctor-photo.png";
import clinic1 from "@/assets/clinic-1.png";
import clinic2 from "@/assets/clinic-2.png";
import clinic3 from "@/assets/clinic-3.png";

const qualifications = [
  "BDS - Bachelor of Dental Surgery",
  "14+ Years Clinical Experience",
  "Specialization in Dental Implants",
  "Advanced Training in Root Canal Therapy",
  "Cosmetic Dentistry Expertise",
];

const values = [
  { icon: Users, title: "Patient-Centered Care", desc: "Your comfort and well-being are our top priorities" },
  { icon: Heart, title: "Transparency", desc: "Clear communication about treatments and costs" },
  { icon: Sparkles, title: "Modern Standards", desc: "Latest technology and sterilization protocols" },
  { icon: Award, title: "Continuous Learning", desc: "Staying updated with dental advancements" },
];

export default function About() {
  return (
    <PageTransition>
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
              About <span className="text-gradient">Smile Catchers</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Located in Life Republic Township, Marunji, Pune — we provide comprehensive 
              dental care with a focus on comfort, education, and clinically proven treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Your Dentist
              </span>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Meet Dr. Kiran Krishna Patil
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 14 years of clinical experience, Dr. Kiran Krishna Patil leads 
                Smile Catchers with a commitment to delivering honest, effective dental care. 
                His approach combines modern techniques with a gentle, patient-first philosophy.
              </p>

              <div className="space-y-3 mb-6">
                {qualifications.map((q) => (
                  <motion.div 
                    key={q} 
                    className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{q}</span>
                  </motion.div>
                ))}
              </div>

              <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-muted-foreground bg-accent/50 rounded-r-lg">
                "My goal is to help every patient achieve a healthy, confident smile through 
                personalized care and the latest dental innovations."
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-card ring-4 ring-primary/10">
                  <img
                    src={doctorPhoto}
                    alt="Dr. Kiran Krishna Patil"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent to-accent/50 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl -z-10" />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-card px-4 py-3 rounded-xl shadow-card border border-border/50"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">14+ Years</span>
                  </div>
                  <p className="text-xs text-muted-foreground">of Excellence</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinic Images */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
              Our Clinic
            </h2>
            <p className="text-muted-foreground">
              A modern, comfortable environment for your dental care
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[clinic1, clinic2, clinic3].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-card group"
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={img} 
                    alt={`Smile Catchers Dental Clinic - View ${i + 1}`} 
                    className="w-full h-full object-contain bg-background group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Mission & Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Delivering honest and effective dental care with respect, transparency, 
              and modern clinical standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-6 rounded-2xl shadow-soft text-center group hover:shadow-card transition-shadow border border-transparent hover:border-primary/20"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}
