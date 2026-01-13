import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in">
            Make data usable.
            <br />
            <span className="text-primary">Make decisions faster.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Business By Data is a data strategy and decision-support advisory. We help
            organizations understand, structure, govern, and use data effectively—without
            requiring complex technical systems or large data teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" asChild>
              <a href="#book-call" className="gap-2">
                Book a Discovery Call
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
