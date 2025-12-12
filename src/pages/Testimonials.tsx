import { motion } from "framer-motion";
import { Quote, Star, Play } from "lucide-react";

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

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-soft relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-accent opacity-50" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-heading font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Video Testimonials
            </h2>
            <p className="text-muted-foreground">
              Watch our patients share their experiences in their own words.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-video bg-muted rounded-2xl flex flex-col items-center justify-center text-muted-foreground"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
                <p className="text-sm">Video Testimonial {i}</p>
                <p className="text-xs text-muted-foreground/70">Coming soon</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
