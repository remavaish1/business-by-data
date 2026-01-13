const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "Assess your current data landscape, identify gaps, and understand what's blocking better decisions.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Document business data fields, KPIs, metrics, and reporting requirements with clarity and precision.",
  },
  {
    number: "03",
    title: "Enable Execution",
    description:
      "Create implementation-ready documentation and handover materials for your technical teams or partners.",
  },
  {
    number: "04",
    title: "Embed",
    description:
      "Establish governance cadences, review cycles, and decision frameworks that sustain progress.",
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">How We Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured approach that moves from assessment to embedded change.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="text-5xl font-semibold text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
