import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

export default function ScrollWrapper({ textTranslations }) {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("lamb-lang");
    const currentHtmlLang = document.documentElement.getAttribute("lang");

    const initialLang = currentHtmlLang || savedLang || "es";
    setLang(initialLang);

    const observer = new MutationObserver(() => {
      const currentLang = document.documentElement.getAttribute("lang") || "es";
      setLang(currentLang);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);

  const text = textTranslations[lang] || textTranslations["es"];

  return (
    <ScrollReveal
      baseOpacity={0.1}
      enableBlur={true}
      baseRotation={3}
      blurStrength={4}
      textClassName="whitespace-pre-line"
    >
      {text}
    </ScrollReveal>
  );
}
