import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-heading font-bold text-sm">
                SC
              </div>
              <div>
                <h3 className="font-heading font-semibold">Smile Catchers</h3>
                <p className="text-xs text-primary-foreground/70">Dental Clinic & Implant Center</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Providing exceptional dental care with modern technology and a patient-first approach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Dental Implants</li>
              <li>Root Canal Treatment</li>
              <li>Cosmetic Dentistry</li>
              <li>Pediatric Care</li>
              <li>Crowns & Bridges</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  Shop 208, 2nd Floor, R6 Commercial Complex, Life Republic Township, Marunji, Pune 411057
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+919999999999" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  +91-99999-99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:info@smilecatchers.in" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  info@smilecatchers.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  10AM–2PM & 5PM–9PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Smile Catchers Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
