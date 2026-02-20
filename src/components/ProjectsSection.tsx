import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import imgGestion from "@/assets/project-gestion-escolar.jpg";
import imgRobot from "@/assets/project-robot.jpg";
import imgChatbot from "@/assets/project-chatbot.jpg";
import imgTransporte from "@/assets/project-transporte.jpg";
import imgInventario from "@/assets/project-inventario.jpg";
import imgVideojuego from "@/assets/project-videojuego.jpg";

const projects = [
  {
    title: "App de Gestión Escolar",
    description: "Sistema web desarrollado por alumnos de ISC para administrar calificaciones y horarios.",
    tags: ["React", "Node.js", "MySQL"],
    image: imgGestion,
  },
  {
    title: "Robot Seguidor de Línea",
    description: "Proyecto de IoT con Arduino y sensores para competencias de robótica.",
    tags: ["Arduino", "C++", "IoT"],
    image: imgRobot,
  },
  {
    title: "Chatbot con IA",
    description: "Asistente virtual inteligente creado con Python y modelos de lenguaje.",
    tags: ["Python", "IA", "NLP"],
    image: imgChatbot,
  },
  {
    title: "App Móvil de Transporte",
    description: "Aplicación Android para consultar rutas de transporte público en Parral.",
    tags: ["Kotlin", "Android", "Firebase"],
    image: imgTransporte,
  },
  {
    title: "Sistema de Inventario",
    description: "Plataforma completa para control de inventario con dashboard en tiempo real.",
    tags: ["Vue.js", "PostgreSQL", "Docker"],
    image: imgInventario,
  },
  {
    title: "Videojuego 2D",
    description: "Videojuego multiplataforma desarrollado con Unity como proyecto de semestre.",
    tags: ["Unity", "C#", "GameDev"],
    image: imgVideojuego,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            Proyectos de Estudiantes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mira lo que nuestros estudiantes han creado. Tú también podrás construir cosas increíbles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-muted relative overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <span className="font-mono text-primary/40 text-6xl">&lt;/&gt;</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
