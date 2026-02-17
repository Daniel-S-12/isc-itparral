import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-widest uppercase text-glow">
            Instituto Tecnológico de Parral — TecNM
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Ingeniería en</span>
          <br />
          <span className="gradient-text">Sistemas Computacionales</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Construye el futuro con código. Diseña, programa y transforma el mundo
          con la carrera más demandada de la era digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#info"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg box-glow hover:scale-105 transition-transform"
          >
            Conoce la carrera
          </a>
          <a
            href="#conecta"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-primary/50 text-primary font-semibold text-lg hover:bg-primary/10 transition-colors"
          >
            Conéctate con nosotros
          </a>
        </motion.div>

        {/* Animated code snippet */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 mx-auto max-w-lg"
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-lg border border-border p-4 text-left font-mono text-sm">
            <div className="flex gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-destructive/80" />
              <span className="w-3 h-3 rounded-full bg-accent/60" />
              <span className="w-3 h-3 rounded-full bg-primary/60" />
            </div>
            <p className="text-muted-foreground">
              <span className="text-secondary">const</span>{" "}
              <span className="text-accent">tuFuturo</span>{" "}
              <span className="text-muted-foreground">=</span>{" "}
              <span className="text-secondary">await</span>{" "}
              <span className="text-primary">estudiar</span>
              <span className="text-foreground">(</span>
              <span className="text-accent">&apos;ISC&apos;</span>
              <span className="text-foreground">);</span>
            </p>
            <p className="text-muted-foreground mt-1">
              <span className="text-primary">console</span>
              <span className="text-foreground">.</span>
              <span className="text-primary">log</span>
              <span className="text-foreground">(</span>
              <span className="text-accent">&apos;🚀 Futuro iniciado&apos;</span>
              <span className="text-foreground">);</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
