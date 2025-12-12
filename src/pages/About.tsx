import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle2 } from "lucide-react";

const qualifications = [
  "BDS - Bachelor of Dental Surgery",
  "14+ Years Clinical Experience",
  "Specialization in Dental Implants",
  "Advanced Training in Root Canal Therapy",
  "Cosmetic Dentistry Expertise",
];

const values = [
  { title: "Patient-Centered Care", desc: "Your comfort and well-being are our top priorities" },
  { title: "Transparency", desc: "Clear communication about treatments and costs" },
  { title: "Modern Standards", desc: "Latest technology and sterilization protocols" },
  { title: "Continuous Learning", desc: "Staying updated with dental advancements" },
];

export default function About() {
  const [doctorPhoto, setDoctorPhoto] = useState<string | null>(null);

  function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setDoctorPhoto(URL.createObjectURL(file));
    }
  }

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
                  <div key={q} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{q}</span>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
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
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden bg-muted shadow-card">
                  {doctorPhoto ? (
                    <img
                      src={doctorPhoto}
                      alt="Dr. Kiran Krishna Patil"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                      <Upload className="w-12 h-12 mb-3 opacity-50" />
                      <p className="text-sm">Upload doctor photo</p>
                    </div>
                  )}
                </div>
                <label className="absolute bottom-4 right-4 cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                  <span className="flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium shadow-lg hover:bg-primary/90 transition-colors">
                    <Upload className="w-4 h-4" />
                    Upload Photo
                  </span>
                </label>
                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              </div>
            </motion.div>
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
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Mission & Values
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
                className="bg-background p-6 rounded-xl shadow-soft text-center"
              >
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
  );
}
