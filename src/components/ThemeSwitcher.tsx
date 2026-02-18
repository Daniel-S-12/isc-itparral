import { useState, useEffect } from "react";
import { Monitor, Leaf } from "lucide-react";

const themes = [
  { id: "cyan", label: "Cyber", icon: Monitor },
  { id: "green", label: "Terminal", icon: Leaf },
] as const;

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") || "cyan";
    }
    return "cyan";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 bg-card/90 backdrop-blur-sm border border-border rounded-full p-1">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
            theme === t.id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          title={t.label}
        >
          <t.icon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
