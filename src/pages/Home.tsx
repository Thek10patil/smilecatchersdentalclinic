import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload, ChevronRight, Shield, Clock, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Award, title: "14+ Years Experience", desc: "Trusted expertise in advanced dental care" },
  { icon: Shield, title: "Advanced Implants", desc: "Full-mouth and single-tooth solutions" },
  { icon: Heart, title: "Comfort-First Care", desc: "Pain-managed treatments for all ages" },
  { icon: Clock, title: "Flexible Hours", desc: "Morning & evening appointments available" },
];

export default function Home() {
  const [uploadedImages, setUploadedImages] = useState<{ name: string; url: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    const urls = files.map((f) => ({ name: f.name, url: URL.createObjectURL(f) }));
    setUploadedImages((prev) => [...urls, ...prev]);
  }

  return (
    <div className="bg-hero-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                Life Republic Township, Marunji, Pune
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Comfortable.{" "}
                <span className="text-gradient">Trusted.</span>{" "}
                Advanced Dental Care.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Smile Catchers Dental Clinic & Implant Center offers patient-focused dentistry 
                with modern equipment, sterilization standards, and experienced care by{" "}
                <strong>Dr. Kiran Krishna Patil</strong>.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">
                    Book Appointment
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </motion.div>

            {/* Before/After Gallery Upload */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl shadow-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-xl font-semibold">Before & After Gallery</h3>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-primary bg-accent rounded-lg hover:bg-accent/80 transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Upload
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 min-h-[240px]">
                {uploadedImages.length === 0 ? (
                  <div className="col-span-full flex flex-col items-center justify-center py-12 text-muted-foreground border-2 border-dashed border-border rounded-xl">
                    <Upload className="w-10 h-10 mb-3 opacity-50" />
                    <p className="text-sm">Upload before/after images</p>
                  </div>
                ) : (
                  uploadedImages.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="rounded-lg overflow-hidden shadow-soft group"
                    >
                      <img
                        src={img.url}
                        alt={img.name}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl -z-10" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Smile Catchers?
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
                className="bg-background p-6 rounded-xl shadow-soft hover:shadow-card transition-shadow group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready for Your Best Smile?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Schedule your consultation today and experience the difference of patient-centered dental care.
            </p>
            <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 shadow-lg">
              <Link to="/contact">
                Book Your Appointment
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
