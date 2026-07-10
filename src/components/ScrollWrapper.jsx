import ScrollReveal from "./ScrollReveal";

export default function ScrollWrapper() {
  return (
    <ScrollReveal
      baseOpacity={0.1}
      enableBlur={true}
      baseRotation={3}
      blurStrength={4}
      textClassName="whitespace-pre-line"
    >
      {`En Agency LAMB creemos que el verdadero impacto no nace de las métricas vacías, sino de las historias, la autenticidad y la visión detrás de cada talento.
Con estrategia, firmeza y cercanía, conectamos marcas con talento auténtico para construir impacto real y reputación duradera.`}
    </ScrollReveal>
  );
}
