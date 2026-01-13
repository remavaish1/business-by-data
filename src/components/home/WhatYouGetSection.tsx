import { CheckCircle } from "lucide-react";

const deliverables = [
  "KPI catalogue with clear definitions and ownership",
  "Metric calculation logic and business rules",
  "Key data field identification and mapping",
  "Reporting requirements pack",
  "Governance model and data standards",
  "Decision review cadence framework",
  "Implementation handover documentation",
];

const WhatYouGetSection = () => {
  return (
    <section className="section-padding bg-sage-light">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">What You Get</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Concrete, actionable deliverables that your teams can implement
              immediately. No theoretical frameworks—just practical outputs that
              drive better decisions.
            </p>
          </div>

          <div className="bg-background p-8 rounded-lg border border-border">
            <ul className="space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
