import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Listo para{" "}
            <span className="gradient-text">construir el futuro</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Inscríbete en Ingeniería en Sistemas Computacionales en el Instituto
            Tecnológico de Parral y comienza tu camino en el mundo de la tecnología.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.itparral.edu.mx/inicio/oferta-educativa/sistemas-computacionales/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg box-glow hover:scale-105 transition-transform"
            >
              Más Información →
            </a>
            <a
              href="https://itparral.mindbox.app/aspirantes/registro/bienvenido"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-secondary text-secondary-foreground font-bold text-lg hover:scale-105 transition-transform"
            >
              Solicitar Ficha
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Instituto Tecnológico de Parral — TecNM
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Ingeniería en Sistemas Computacionales
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
