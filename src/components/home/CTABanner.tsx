import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section id="book-call" className="section-padding bg-foreground text-primary-foreground">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to make data work for your business?
        </h2>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
          Book a discovery call to discuss your data challenges and explore how
          we can help you build clarity, not complexity.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="gap-2">
            Book a Discovery Call
            <ArrowRight size={18} />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
