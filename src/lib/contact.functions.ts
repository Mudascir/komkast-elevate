import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Please enter a valid email").max(120),
  company: z.string().max(120).optional(),
  message: z.string().min(1, "Message is required").max(5000),
});

export const submitContact = createServerFn({ method: "POST" })
  .validator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");

    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company?.trim() || null,
      message: data.message,
    });

    if (error) {
      console.error("Contact submission failed:", error);
      throw new Error("Unable to send your message right now. Please try again.");
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/hello@komkast.net", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New KomKast website enquiry from ${data.name}`,
          _template: "table",
          _captcha: "false",
          _replyto: data.email,
          name: data.name,
          email: data.email,
          company: data.company?.trim() || "-",
          message: data.message,
        }),
      });
      if (!res.ok) console.error("FormSubmit forward failed:", res.status, await res.text());
    } catch (err) {
      console.error("FormSubmit forward error:", err);
    }

    return { success: true };
  });
