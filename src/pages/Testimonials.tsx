import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Anita S.",
    treatment: "Root Canal Treatment",
    rating: 5,
    text: "Very professional and pain-free root canal. Dr. Kiran explained every step and made sure I was comfortable throughout. Highly recommended!",
  },
  {
    name: "Rajesh M.",
    treatment: "Dental Implants",
    rating: 5,
    text: "I was nervous about implants, but the team at Smile Catchers made the entire process smooth. My new teeth look and feel completely natural.",
  },
  {
    name: "Priya K.",
    treatment: "Cosmetic Dentistry",
    rating: 5,
    text: "The smile makeover exceeded my expectations. The attention to detail and the final result were amazing. I can't stop smiling!",
  },
  {
    name: "Suresh P.",
    treatment: "General Checkup",
    rating: 5,
    text: "Clean, modern clinic with friendly staff. The doctor takes time to explain everything and doesn't push unnecessary treatments. Very trustworthy.",
  },
  {
    name: "Meera D.",
    treatment: "Teeth Whitening",
    rating: 5,
    text: "Amazing results! My teeth are several shades brighter and the process was quick and painless. The clinic is very hygienic and well-maintained.",
  },
  {
    name: "Vikram J.",
    treatment: "Dental Implants",
    rating: 5,
    text: "Dr. Kiran is extremely skilled. Got my implants done here and the results are perfect. The clinic uses latest technology and equipment.",
  },
  {
    name: "Sunita R.",
    treatment: "Root Canal Treatment",
    rating: 5,
    text: "Was dreading the root canal but Dr. Kiran made it completely painless. Very gentle approach and great aftercare instructions.",
  },
  {
    name: "Amit T.",
    treatment: "Crown & Bridge",
    rating: 5,
    text: "Excellent work on my dental bridge. The fit is perfect and looks completely natural. Staff is courteous and punctual with appointments.",
  },
  {
    name: "Kavita M.",
    treatment: "Pediatric Dentistry",
    rating: 5,
    text: "Brought my kids here and they actually enjoyed the visit! The doctor is very patient with children. Clean and kid-friendly environment.",
  },
  {
    name: "Ravi S.",
    treatment: "Full Mouth Rehabilitation",
    rating: 5,
    text: "Life-changing experience. After years of dental problems, I finally have a healthy smile. Dr. Kiran's expertise is unmatched.",
  },
];

export default function Testimonials() {
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
              Patient <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it — hear what our patients have to say 
              about their experience at Smile Catchers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Badge */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-bold text-2xl text-foreground">5.0</span>
            </div>
            <div className="text-muted-foreground">
              Based on <span className="font-semibold text-foreground">Google Reviews</span>
            </div>
            <a 
              href="https://www.google.com/search?client=mobilesearchapp&sca_esv=5ea70eeef6a2a5b7&channel=iss&cs=0&hl=en_GB&rlz=1MDAPLA_en-GBIN1097IN1097&v=397.0.836500703&sxsrf=AE3TifNKqzCPHQy8koQaoGhhuVt9Qk8Clg:1766011964984&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4nckhabZXxEoXpb2DeMFCqAlzhbDW5hBSROQTxtnOsZXQxPqLRaU0fLw9wQqU-DlETNo2vT7HPdl8yZV7Djb1YCqOb_fpSwLxAPTKBdrtadpTB_n9ZvqC4Vec0DL60l9Yfg6YZlbHC-GECBeBodnqpw_fo9&q=Smile+Catchers+Dental+Clinic+%26+Implant+Center+Marunji+Pune+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              See All Reviews on Google
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl p-6 shadow-soft relative hover:shadow-card transition-shadow"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-accent opacity-50" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-foreground mb-5 leading-relaxed text-sm">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-heading font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Experience the Smile Catchers Difference?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join our family of happy patients and get the smile you deserve.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-glow"
            >
              Book Your Appointment
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
