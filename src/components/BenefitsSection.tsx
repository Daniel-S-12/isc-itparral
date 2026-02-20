import { motion } from "framer-motion";
import { Code, Cpu, Globe, Smartphone, BrainCircuit, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Code,
    title: "Desarrollo de Software",
    description: "Aprende a crear aplicaciones web, móviles y de escritorio con las tecnologías más modernas del mercado.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligencia Artificial",
    description: "Explora el mundo del machine learning, redes neuronales y sistemas inteligentes que están transformando industrias.",
  },
  {
    icon: Globe,
    title: "Redes y Ciberseguridad",
    description: "Domina la infraestructura de redes y protege sistemas contra amenazas digitales.",
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Diseña y programa aplicaciones para millones de usuarios en Android e iOS.",
  },
  {
    icon: Cpu,
    title: "Hardware e IoT",
    description: "Conecta el mundo físico con el digital: sensores, microcontroladores y sistemas embebidos.",
  },
  {
    icon: ShieldCheck,
    title: "Alta Demanda Laboral",
    description: "Una de las carreras mejor pagadas y con mayor demanda en México y el mundo.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BenefitsSection = () => {
  return (
    <section id="info" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            ¿Por qué estudiar ISC?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La Ingeniería en Sistemas Computacionales te prepara para ser protagonista
            de la revolución tecnológica.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
