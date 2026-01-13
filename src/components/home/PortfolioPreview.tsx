import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Retail KPI Framework",
    industry: "Retail",
    description:
      "Designed a comprehensive KPI catalogue for a multi-location retail chain, enabling real-time performance visibility.",
    tags: ["Retail", "KPI Design"],
  },
  {
    title: "FMCG Data Governance",
    industry: "FMCG",
    description:
      "Established data governance standards and quality frameworks for a fast-moving consumer goods company.",
    tags: ["FMCG", "Governance"],
  },
  {
    title: "Banking Analytics Strategy",
    industry: "Banking",
    description:
      "Developed an analytics roadmap and measurement architecture for a regional bank's digital transformation.",
    tags: ["Banking", "Strategy"],
  },
];

const PortfolioPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Selected Work</h2>
            <p className="text-muted-foreground max-w-xl">
              Anonymized case studies showcasing our approach across industries.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/portfolio" className="gap-2">
              View All Work
              <ArrowUpRight size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.title}
              to="/portfolio"
              className="group bg-secondary p-6 rounded-lg border border-border hover:border-primary/30 transition-all hover:shadow-sm"
            >
              <div className="flex gap-2 mb-4">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-background rounded text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {study.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {study.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
