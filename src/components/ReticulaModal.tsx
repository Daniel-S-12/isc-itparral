import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const reticula: Record<string, string[]> = {
  "Semestre 1": [
    "Cálculo Diferencial",
    "Fundamentos De Programación",
    "Taller De Ética",
    "Matemáticas Discretas",
    "Taller De Administración",
    "Fundamentos De Investigación",
  ],
  "Semestre 2": [
    "Cálculo Integral",
    "Programación Orientada A Objetos",
    "Contabilidad Financiera",
    "Química",
    "Álgebra Lineal",
    "Probabilidad Y Estadística",
  ],
  "Semestre 3": [
    "Cálculo Vectorial",
    "Estructura De Datos",
    "Cultura Empresarial",
    "Investigación De Operaciones",
    "Sistemas Operativos",
    "Física General",
  ],
  "Semestre 4": [
    "Ecuaciones Diferenciales",
    "Tópicos Avanzados De Programación",
    "Fundamentos De Bases De Datos",
    "Métodos Numéricos",
    "Taller De Sistemas Operativos",
    "Principios Eléctricos Y Aplicaciones Digitales",
  ],
  "Semestre 5": [
    "Desarrollo Sustentable",
    "Fundamentos De Telecomunicaciones",
    "Taller De Base De Datos",
    "Simulación",
    "Fundamentos De Ingeniería De Software",
    "Arquitectura De Computadoras",
    "Graficación",
  ],
  "Semestre 6": [
    "Lenguajes Y Autómatas I",
    "Redes De Computadoras",
    "Administración De Bases De Datos",
    "Programación Web",
    "Diseño De Sitios Web",
    "Lenguajes De Interfaz",
    "Ingeniería De Software",
  ],
  "Semestre 7": [
    "Lenguajes Y Autómatas II",
    "Conmutación Y Enrutamiento En Redes De Datos",
    "Taller De Investigación I",
    "Programación Web II",
    "Gestión De Proyectos De Software",
  ],
  "Semestre 8": [
    "Programación Lógica Y Funcional",
    "Administración De Redes",
    "Taller De Investigación II",
    "Legislación Y Seguridad",
    "Sistemas Programables",
    "Marketing Digital",
  ],
  "Semestre 9": [
    "Inteligencia Artificial",
    "Negocios Web",
    "Residencias Profesionales",
    "Servicio Social",
    "Actividades Complementarias",
  ],
};

const semesterColors = [
  "bg-primary/15 border-primary/30",
  "bg-secondary/15 border-secondary/30",
  "bg-accent/15 border-accent/30",
  "bg-primary/15 border-primary/30",
  "bg-secondary/15 border-secondary/30",
  "bg-accent/15 border-accent/30",
  "bg-primary/15 border-primary/30",
  "bg-secondary/15 border-secondary/30",
  "bg-accent/15 border-accent/30",
];

interface ReticulaModalProps {
  children: React.ReactNode;
}

const ReticulaModal = ({ children }: ReticulaModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text inline-block">
            Retícula — ISC
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
            {Object.entries(reticula).map(([semester, subjects], si) => (
              <div
                key={semester}
                className={`rounded-lg border p-4 ${semesterColors[si]}`}
              >
                <h3 className="font-mono text-sm font-bold text-primary mb-3">
                  {semester}
                </h3>
                <ul className="space-y-1.5">
                  {subjects.map((s) => (
                    <li
                      key={s}
                      className="text-sm text-foreground/80 font-body"
                    >
                      • {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ReticulaModal;
