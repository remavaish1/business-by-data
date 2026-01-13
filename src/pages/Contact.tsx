import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Calendar, MessageSquare, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const expectations = [
  {
    icon: Clock,
    title: "30-minute focused conversation",
    description: "We'll discuss your current data situation and challenges",
  },
  {
    icon: MessageSquare,
    title: "Honest assessment",
    description: "I'll share initial thoughts on where I might be able to help",
  },
  {
    icon: Calendar,
    title: "Clear next steps",
    description: "Whether we work together or not, you'll leave with actionable insights",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24-48 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to discuss your data challenges? Book a discovery call or
              send a message below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - CTA and Expectations */}
            <div>
              <div className="bg-foreground text-primary-foreground p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">Book a Discovery Call</h2>
                <p className="text-primary-foreground/70 mb-6">
                  The best way to start is a conversation. Book a 30-minute
                  discovery call to discuss your data challenges.
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    Schedule a Call
                    <ArrowRight size={18} />
                  </a>
                </Button>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">
                  What to Expect from the First Call
                </h3>
                <div className="space-y-6">
                  {expectations.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-secondary p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    maxLength={100}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    maxLength={255}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company (optional)
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company"
                    maxLength={100}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell me about your data challenges..."
                    rows={5}
                    maxLength={1000}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
