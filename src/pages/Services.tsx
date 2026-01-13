import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, BarChart3, Compass, Shield, Briefcase } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Decision Support & KPI Design",
    audience: "CEOs, COOs, Finance Leaders seeking clarity on business performance",
    deliverables: [
      "KPI catalogue with definitions and ownership",
      "Metric calculation logic and formulas",
      "Performance framework documentation",
      "Executive dashboard requirements",
    ],
    outcomes: "Clear visibility into what drives business results, with metrics that leadership can trust and act upon.",
  },
  {
    icon: BarChart3,
    title: "Business Data Definition & Measurement Foundations",
    audience: "Operations leaders, finance teams, business analysts",
    deliverables: [
      "Key data field identification and mapping",
      "Business glossary and data dictionary",
      "Measurement logic documentation",
      "Reporting requirements specification",
    ],
    outcomes: "Common language for data across the organization, enabling accurate and consistent reporting.",
  },
  {
    icon: Compass,
    title: "Data Diagnostics & Assessments",
    audience: "Organizations questioning the reliability of their current data and reports",
    deliverables: [
      "Data maturity assessment report",
      "Dashboard and report audit findings",
      "Data quality assessment",
      "Gap analysis and recommendations",
    ],
    outcomes: "Clear understanding of where you stand and a prioritized roadmap for improvement.",
  },
  {
    icon: BarChart3,
    title: "Analytics Strategy & Roadmapping",
    audience: "Leadership teams planning analytics investments",
    deliverables: [
      "Analytics capability assessment",
      "Strategic roadmap with milestones",
      "Use case prioritization framework",
      "Resource and capability planning",
    ],
    outcomes: "A clear path from current state to analytics maturity, with defined phases and success criteria.",
  },
  {
    icon: Shield,
    title: "Governance, Standards & Data Discipline",
    audience: "Organizations struggling with data quality and consistency",
    deliverables: [
      "Data governance framework",
      "Standards and policies documentation",
      "Roles and responsibilities matrix",
      "Quality management processes",
    ],
    outcomes: "Sustainable data practices that ensure quality, compliance, and trust in your data assets.",
  },
  {
    icon: Briefcase,
    title: "Fractional Advisory & Leadership Support",
    audience: "Organizations needing senior data expertise without full-time commitment",
    deliverables: [
      "Strategic advisory sessions",
      "Project oversight and guidance",
      "Team coaching and mentoring",
      "Stakeholder alignment support",
    ],
    outcomes: "Access to experienced data leadership that accelerates your data journey without overhead.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We define the "what", the "why", and "how it should work" around data.
              Technical execution is handled by your teams or trusted partners—we
              provide the strategic clarity that makes implementation successful.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 bg-background">
        <div className="container-narrow">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-secondary border border-border rounded-lg p-8 md:p-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <service.icon className="w-10 h-10 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users size={16} />
                      <span className="text-sm">{service.audience}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                      What We Deliver
                    </h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-foreground">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
                      Outcomes
                    </h3>
                    <p className="text-foreground leading-relaxed">{service.outcomes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Let's discuss your data challenges
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Every organization's data journey is unique. Book a discovery call to
            explore how we can help.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="gap-2">
              Book a Discovery Call
              <ArrowRight size={18} />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
