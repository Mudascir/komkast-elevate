import { useState, type FormEvent } from "react";
import { Globe, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { ActionSubmit } from "./ActionButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContact } from "@/lib/contact.functions";

const details = [
  {
    icon: MapPin,
    label: "Corporate Headquarters",
    value: "1612 Bingham St UNIT B, Houston, TX 77007, USA",
  },
  { icon: Mail, label: "Email", value: "info@komkast.net", href: "mailto:info@komkast.net" },
  { icon: Globe, label: "Website", value: "komkast.net", href: "https://komkast.net/" },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitContact({
        data: {
          name: String(formData.get("name") ?? "").trim(),
          email: String(formData.get("email") ?? "").trim(),
          company: String(formData.get("company") ?? "").trim(),
          message: String(formData.get("message") ?? "").trim(),
        },
      });
      form.reset();
      toast.success("Thank you — your message has been received.", {
        description: "A member of the KomKast team will be in touch shortly.",
      });
    } catch (error) {
      toast.error("Something went wrong", {
        description:
          error instanceof Error ? error.message : "Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-b border-border/50 mesh-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Contact
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Talk to our engagement team
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Share a little about your goals and we'll come back with a practical next step.
            </p>

            <dl className="mt-10 space-y-6">
              {details.map((d) => (
                <div key={d.label} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent/70 backdrop-blur-sm">
                    <d.icon className="size-5 text-primary" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="mt-1 font-medium">
                      {d.href ? (
                        <a href={d.href} className="transition-colors hover:text-primary">
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-10 overflow-hidden glass rounded-3xl p-1.5">
              <iframe
                title="KomKast headquarters location in Houston, Texas"
                loading="lazy"
                className="h-64 w-full rounded-[calc(var(--radius)+10px)]"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-95.42%2C29.75%2C-95.35%2C29.79&layer=mapnik"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              className="glass-panel glass-sheen rounded-4xl p-7 lg:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required autoComplete="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" autoComplete="organization" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" rows={6} required />
                </div>
              </div>
              <ActionSubmit type="submit" size="lg" disabled={submitting} className="mt-7 w-full">
                {submitting ? "Sending…" : "Submit"}
              </ActionSubmit>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
