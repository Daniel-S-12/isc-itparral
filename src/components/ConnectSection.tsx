import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Facebook, Globe, MessageCircle } from "lucide-react";

const links = [
  {
    label: "Sitio Oficial",
    url: "https://www.itparral.edu.mx/inicio/oferta-educativa/sistemas-computacionales/",
    icon: Globe,
    description: "Visita la página oficial de ISC en el Instituto Tecnológico de Parral",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/TecnmParral/?locale=es_LA",
    icon: Facebook,
    description: "Síguenos en Facebook para noticias y eventos",
  },
  {
    label: "Solicitar Ficha",
    url: "https://itparral.mindbox.app/aspirantes/registro/bienvenido",
    icon: MessageCircle,
    description: "Inicia tu proceso de inscripción aquí",
  },
];

const ConnectSection = () => {
  return (
    <section id="conecta" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text inline-block">
            Conéctate con Nosotros
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escanea los códigos QR con tu celular o haz clic en los enlaces para conocer más.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.15 }}
              className="group flex flex-col items-center bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:box-glow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{link.label}</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">{link.description}</p>
              <div className="bg-foreground p-3 rounded-lg">
                <QRCodeSVG
                  value={link.url}
                  size={140}
                  bgColor="hsl(190, 100%, 95%)"
                  fgColor="hsl(220, 20%, 6%)"
                  level="M"
                />
              </div>
              <span className="mt-4 text-xs font-mono text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                {link.url.replace("https://www.", "").replace("https://", "")}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
