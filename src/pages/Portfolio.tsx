import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Multi-Location Retail Performance Framework",
    industry: "Retail",
    context:
      "A retail chain with 50+ locations lacked visibility into store-level performance and couldn't compare locations effectively.",
    problem:
      "Multiple data sources, inconsistent metrics, and manual reporting made it impossible to identify underperforming stores or successful practices.",
    approach:
      "Conducted diagnostic assessment, defined standardized KPIs, mapped data requirements, and created reporting specifications.",
    deliverables: [
      "KPI catalogue with 25 standardized metrics",
      "Data field mapping across POS and inventory systems",
      "Reporting requirements document",
      "Implementation guide for technical team",
    ],
    outcomes:
      "Enabled the client's IT team to build automated dashboards with consistent metrics across all locations.",
    tags: ["Retail", "KPI Design", "Data Definition"],
  },
  {
    title: "FMCG Data Governance Transformation",
    industry: "FMCG",
    context:
      "A fast-moving consumer goods company with operations across multiple markets faced data quality issues affecting supply chain decisions.",
    problem:
      "No data ownership, inconsistent product codes across systems, and conflicting reports from different departments.",
    approach:
      "Assessed data maturity, designed governance framework, defined data standards, and established ownership model.",
    deliverables: [
      "Data governance framework document",
      "Data stewardship roles and responsibilities",
      "Product data standards guide",
      "Quality management process documentation",
    ],
    outcomes:
      "Reduced data-related supply chain errors by providing clear standards for the operations team to implement.",
    tags: ["FMCG", "Governance", "Data Quality"],
  },
  {
    title: "Regional Bank Analytics Roadmap",
    industry: "Banking",
    context:
      "A regional bank embarking on digital transformation needed to understand how to leverage data for customer insights.",
    problem:
      "Siloed data across core banking, cards, and channels with no unified customer view or analytics capability.",
    approach:
      "Conducted analytics maturity assessment, identified high-value use cases, and developed phased roadmap.",
    deliverables: [
      "Analytics maturity assessment report",
      "Use case prioritization matrix",
      "Three-year analytics roadmap",
      "Customer data requirements specification",
    ],
    outcomes:
      "Provided strategic clarity that enabled the bank to hire the right team and select appropriate technology partners.",
    tags: ["Banking", "Strategy", "Analytics"],
  },
  {
    title: "Real Estate Investment Reporting Framework",
    industry: "Real Estate",
    context:
      "A property investment firm needed standardized reporting across a diverse portfolio of commercial and residential assets.",
    problem:
      "Each property manager reported differently, making portfolio-level analysis and investor reporting time-consuming and error-prone.",
    approach:
      "Defined standard metrics, created data collection templates, and specified reporting requirements.",
    deliverables: [
      "Portfolio KPI framework",
      "Standardized data collection templates",
      "Investor reporting requirements",
      "Property manager data submission guide",
    ],
    outcomes:
      "Reduced monthly reporting preparation from 2 weeks to 3 days after implementation by operations team.",
    tags: ["Real Estate", "Reporting", "KPI Design"],
  },
  {
    title: "Professional Services Decision Framework",
    industry: "Services",
    context:
      "A consulting firm wanted to understand project profitability and resource utilization but lacked consistent measurement.",
    problem:
      "Time tracking inconsistencies, unclear project classification, and manual profitability calculations hindered business decisions.",
    approach:
      "Defined project and resource metrics, standardized time tracking requirements, and created profitability model.",
    deliverables: [
      "Project classification taxonomy",
      "Resource utilization metrics framework",
      "Profitability calculation methodology",
      "Time tracking standards guide",
    ],
    outcomes:
      "Enabled the firm to identify underperforming service lines and optimize resource allocation.",
    tags: ["Services", "KPI Design", "Governance"],
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Portfolio</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Anonymized case studies demonstrating our approach across industries.
              Each engagement focused on defining the "what" and "why" so
              implementation teams could build correctly.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20 bg-background">
        <div className="container-narrow">
          <div className="space-y-10">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="bg-secondary border border-border rounded-lg p-8 md:p-10"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-semibold mb-6">{study.title}</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      Context
                    </h3>
                    <p className="text-foreground leading-relaxed">{study.context}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      Problem
                    </h3>
                    <p className="text-foreground leading-relaxed">{study.problem}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Our Approach
                  </h3>
                  <p className="text-foreground leading-relaxed">{study.approach}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {study.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-foreground">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      Outcomes
                    </h3>
                    <p className="text-foreground leading-relaxed">{study.outcomes}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to write your success story?
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your organization achieve similar outcomes.
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

export default Portfolio;
