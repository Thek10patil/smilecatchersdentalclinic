import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Tooth Icon */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              {/* Tooth Logo */}
              <svg viewBox="0 0 40 48" fill="none" className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M20 2C12 2 6 8 6 14C6 20 8 24 10 30C12 36 14 44 16 46C17 47 19 47 20 44C21 47 23 47 24 46C26 44 28 36 30 30C32 24 34 20 34 14C34 8 28 2 20 2Z" 
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  d="M14 14C14 14 16 16 20 16C24 16 26 14 26 14" 
                  stroke="hsl(var(--card))"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-heading font-bold text-lg text-foreground hidden sm:block">Smile Catchers</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-accent rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+917387166259" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 73871 66259</span>
            </a>
            <Button asChild variant="hero" size="default">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? "bg-accent text-primary"
                      : "text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="hero" size="lg" className="mt-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
