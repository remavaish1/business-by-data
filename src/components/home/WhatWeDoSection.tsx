import { Target, Database, Shield, Users } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Decision Support & KPI Design",
    description:
      "Define the metrics that matter. We design KPI frameworks that connect business goals to measurable outcomes.",
  },
  {
    icon: Database,
    title: "Business Data Definition",
    description:
      "Identify key data fields and establish measurement foundations that make reporting accurate and actionable.",
  },
  {
    icon: Shield,
    title: "Governance & Data Discipline",
    description:
      "Build governance models, standards, and processes that ensure data quality and consistency across your organization.",
  },
  {
    icon: Users,
    title: "Fractional Data Leadership",
    description:
      "Access senior data strategy expertise on a flexible basis. Strategic guidance without full-time overhead.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">What We Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We translate business goals into clear data direction, measurement logic,
            and governance—so implementation teams can build correctly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background p-8 rounded-lg border border-border hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
