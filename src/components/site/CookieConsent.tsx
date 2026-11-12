import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, Settings2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { needsAnswer, onConsentChange, readChoice, saveChoices } from "@/lib/consent";

export function openCookieSettings() {
  window.dispatchEvent(new Event("open-cookie-settings"));
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [gpc, setGpc] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let mounted = true;
    const refresh = async () => {
      const required = await needsAnswer(["analytics"]);
      const privacySignal = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
      if (!mounted) return;
      setGpc(privacySignal);
      setAnalytics(readChoice("analytics") === "granted");
      // Offer the requested arrival notice everywhere, except browsers sending GPC.
      setOpen(!privacySignal && (required || readChoice("analytics") === null));
    };
    const showSettings = () => {
      previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setAnalytics(readChoice("analytics") === "granted");
      setSettings(true);
      setOpen(true);
    };
    void refresh();
    const unsubscribe = onConsentChange(() => { void refresh(); });
    window.addEventListener("open-cookie-settings", showSettings);
    return () => { mounted = false; unsubscribe(); window.removeEventListener("open-cookie-settings", showSettings); };
  }, []);

  useEffect(() => { if (open) panel.current?.focus(); }, [open, settings]);
  const close = () => { setOpen(false); setSettings(false); previousFocus.current?.focus(); };
  const save = (allowed: boolean) => { saveChoices({ analytics: allowed ? "granted" : "denied" }); close(); };
  if (!open) return null;

  return <div ref={panel} tabIndex={-1} role="dialog" aria-modal="false" aria-labelledby="cookie-heading"
    className="cookie-glass fixed inset-x-4 bottom-4 z-[100] mx-auto max-h-[calc(100dvh-2rem)] max-w-2xl overflow-y-auto rounded-2xl p-5 text-navy-foreground outline-none sm:bottom-6 sm:p-7">
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-3"><ShieldCheck className="size-6 shrink-0 text-teal" /><h2 id="cookie-heading" className="font-display text-lg font-bold">{settings ? "Cookie settings" : "Your privacy choices"}</h2></div>
      {settings && <Button variant="ghost" size="icon" aria-label="Close cookie settings" onClick={close}><X /></Button>}
    </div>
    <p className="mt-4 text-sm leading-relaxed text-navy-foreground/85">We count visits without cookies. If you accept, we also measure clicks.</p>
    <p className="mt-2 text-sm text-navy-foreground/75">Read our <Link to="/privacy-policy" className="text-teal underline">Privacy Policy</Link> and <Link to="/cookie-policy" className="text-teal underline">Cookie Policy</Link>.</p>
    {settings ? <>
      {gpc && <p className="mt-4 text-sm text-teal">Your browser's privacy signal applies. Optional analytics is disabled.</p>}
      <div className="mt-5 flex items-center justify-between gap-4 border-t border-navy-foreground/20 py-4"><div><h3 className="text-sm font-semibold">Necessary</h3><p className="mt-1 text-xs text-navy-foreground/70">Remembers your privacy choice.</p></div><span className="text-xs text-teal">Always on</span></div>
      <div className="flex items-center justify-between gap-4 border-t border-navy-foreground/20 py-4"><div><label htmlFor="cookie-analytics" className="text-sm font-semibold">Analytics, provided by Lovable</label><p className="mt-1 text-xs text-navy-foreground/70">Measures clicks to understand engagement.</p></div><Switch id="cookie-analytics" checked={analytics && !gpc} disabled={gpc} onCheckedChange={setAnalytics} /></div>
      <Button className="mt-3 w-full" onClick={() => save(analytics && !gpc)}>Save preferences</Button>
    </> : <>
      <div className="mt-6 grid grid-cols-2 gap-3"><Button onClick={() => save(true)}>Accept all</Button><Button onClick={() => save(false)}>Reject all</Button></div>
      <Button variant="ghost" className="mt-2 w-full text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground" onClick={() => setSettings(true)}><Settings2 />Cookie settings</Button>
    </>}
  </div>;
}