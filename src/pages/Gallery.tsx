import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [images, setImages] = useState<{ name: string; url: string }[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    const urls = files.map((f) => ({ name: f.name, url: URL.createObjectURL(f) }));
    setImages((prev) => [...urls, ...prev]);
  }

  function removeImage(index: number) {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Clinic <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our modern facility and see the transformations we've achieved 
              for our patients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Before & After Photos
            </h2>
            <Button onClick={() => fileInputRef.current?.click()} variant="default">
              <Upload className="w-4 h-4 mr-2" />
              Upload Images
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleUpload}
              className="hidden"
            />
          </div>

          {images.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-border rounded-2xl"
            >
              <Upload className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground mb-2">No images uploaded yet</p>
              <p className="text-sm text-muted-foreground/70">
                Upload before/after patient photos and clinic images
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <AnimatePresence>
                {images.map((img, i) => (
                  <motion.div
                    key={img.url}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative group rounded-xl overflow-hidden shadow-soft aspect-square"
                  >
                    <img
                      src={img.url}
                      alt={img.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => setSelectedImage(img.url)}
                        className="p-2 bg-card rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <ZoomIn className="w-5 h-5 text-foreground" />
                      </button>
                      <button
                        onClick={() => removeImage(i)}
                        className="p-2 bg-destructive rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <X className="w-5 h-5 text-destructive-foreground" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          <p className="text-sm text-muted-foreground mt-6">
            Tip: Upload anonymized before/after patient photos (blur faces when required) 
            along with clinic facility images.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-card rounded-full shadow-lg"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
