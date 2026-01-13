import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, CheckCircle } from "lucide-react";
import remaImage from "@/assets/rema.jpg";

const workingPrinciples = [
  "I bridge the gap between leadership vision and technical execution",
  "I define what needs to be measured and why, not how to build the pipes",
  "I create documentation that implementation teams can actually use",
  "I embed governance and decision frameworks that outlast any engagement",
];

const highlights = [
  "12+ years in analytics, data strategy, and governance",
  "Experience across retail, banking, FMCG, and professional services",
  "Former analytics lead and data governance practitioner",
  "Track record of enabling successful data transformations",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                Meet Rema Vaish
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Founder of Business By Data. I help organizations make sense of
                their data—defining what matters, how to measure it, and how to
                govern it sustainably.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over 12 years of experience in analytics, data strategy,
                and governance across multiple industries, I've seen what works
                and what doesn't when organizations try to become "data-driven."
                The answer is rarely more technology—it's clarity, discipline,
                and the right foundations.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                    Book a Discovery Call
                    <ArrowRight size={18} />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={remaImage}
                alt="Rema Vaish - Founder of Business By Data"
                className="w-full rounded-lg grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-semibold mb-4">How I Work</h2>
              <p className="text-muted-foreground leading-relaxed">
                I sit between leadership and technical teams. My role is to
                translate business goals into clear data direction, measurement
                logic, documentation, and governance. I define the "what", the
                "why", and "how it should work"—technical execution is handled
                by your teams or trusted partners.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-semibold mb-4">My Approach</h3>
              <ul className="space-y-4">
                {workingPrinciples.map((principle) => (
                  <li key={principle} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Experience & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 bg-secondary p-6 rounded-lg border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Let's have a conversation
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            I'd love to learn about your data challenges and explore how I can help.
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

export default About;
