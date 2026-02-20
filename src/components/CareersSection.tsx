import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Briefcase, MapPin } from "lucide-react";

const stats = [
  { icon: DollarSign, value: "$25,000+", label: "Salario inicial mensual promedio" },
  { icon: TrendingUp, value: "95%", label: "Tasa de empleabilidad" },
  { icon: Briefcase, value: "50+", label: "Empresas buscan egresados" },
  { icon: MapPin, value: "Global", label: "Oportunidades en todo el mundo" },
];

const roles = [
  "Desarrollador Full Stack",
  "Ingeniero de Software",
  "Analista de Ciberseguridad",
  "Ingeniero DevOps",
  "Científico de Datos",
  "Desarrollador de Apps Móviles",
  "Administrador de Redes",
  "Consultor IT",
  "Ingeniero de IA",
  "Emprendedor Tecnológico",
];

const CareersSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            Tu Futuro Profesional
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Las empresas más importantes del mundo buscan Ingenieros en Sistemas Computacionales.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-card rounded-xl p-6 border border-border"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-2xl md:text-3xl font-bold text-foreground text-glow">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {roles.map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2.5 rounded-full border border-primary/30 text-foreground font-medium hover:bg-primary/10 hover:border-primary/60 transition-all cursor-default"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
