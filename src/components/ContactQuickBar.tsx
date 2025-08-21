
import { useEffect, useRef, useState } from "react";
import { Phone, Mail, FileDown } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CONTACT, buildMailtoLink, buildTelLink, buildWhatsAppLink } from "@/config/contact";
import { BROCHURES } from "@/config/brochures";

// Minimal inline WhatsApp icon to avoid extra deps and keep branding recognizable
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12.04 2C6.58 2 2.18 6.4 2.18 11.86c0 2.1.61 4.06 1.77 5.74L2 22l4.53-1.88a9.82 9.82 0 0 0 5.51 1.64c5.46 0 9.86-4.4 9.86-9.86S17.5 2 12.04 2zm5.77 14.15c-.24.67-1.2 1.23-1.66 1.26-.44.04-1 .06-1.61-.1-.37-.1-.85-.27-1.46-.53-2.56-1.1-4.22-3.66-4.35-3.84-.13-.18-1.04-1.38-1.04-2.63 0-1.26.66-1.86.9-2.11.24-.24.52-.3.69-.3.17 0 .34 0 .49.01.16.01.37-.06.57.43.24.58.82 2 .89 2.14.07.14.12.3.02.48-.1.2-.15.32-.3.49-.14.16-.3.36-.43.49-.14.14-.28.3-.12.57.17.28.76 1.25 1.63 2.03 1.12.99 2.06 1.3 2.35 1.44.3.15.47.13.64-.08.17-.2.73-.85.93-1.14.2-.28.39-.24.65-.14.27.1 1.7.8 1.99.94.3.16.5.24.57.38.07.13.07.76-.17 1.43z" />
  </svg>
);

const ContactQuickBar = () => {
  const telHref = buildTelLink(CONTACT.phoneE164);
  const waHref = buildWhatsAppLink(CONTACT.whatsappNumber, CONTACT.whatsappMessage);
  const mailHref = buildMailtoLink(CONTACT.email, CONTACT.emailSubject, CONTACT.emailBody);

  const hasBrochures = BROCHURES.length > 0;
  const singleBrochure = BROCHURES.length === 1 ? BROCHURES[0] : null;

  const baseBtn =
    "rounded-full border border-border bg-background/90 text-foreground shadow-lg backdrop-blur px-4 py-3 flex items-center gap-2 transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  const [onDark, setOnDark] = useState(false);
  const asideRef = useRef<HTMLElement | null>(null);

  // Detect if the quick bar overlaps a dark section (elements marked with data-dark-bg)
  useEffect(() => {
    const check = () => {
      const el = asideRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const darkEls = document.querySelectorAll<HTMLElement>('[data-dark-bg]');
      let isDark = false;
      darkEls.forEach((d) => {
        const r = d.getBoundingClientRect();
        if (centerX >= r.left && centerX <= r.right && centerY >= r.top && centerY <= r.bottom) {
          isDark = true;
        }
      });
      setOnDark(isDark);
    };

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
  }, []);

  const btnClass = `${baseBtn} ${onDark ? 'text-primary-foreground' : 'text-foreground'}`;

  return (
    <aside
      ref={asideRef}
      aria-label="Quick contact actions"
      className="fixed z-50 right-4 bottom-4 md:right-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2"
    >
      <div className="flex md:flex-col gap-3">
        {/* Call */}
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={telHref} className={btnClass} aria-label={`Call us at ${CONTACT.phoneDisplay}`}>
              <Phone className="size-5" aria-hidden="true" />
              <span className="hidden md:inline text-sm">{CONTACT.phoneDisplay}</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">Call us</TooltipContent>
        </Tooltip>

        {/* WhatsApp */}
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className={btnClass}
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="size-5" />
              <span className="hidden md:inline text-sm">WhatsApp</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">WhatsApp</TooltipContent>
        </Tooltip>

        {/* Email */}
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={mailHref} className={btnClass} aria-label={`Email us at ${CONTACT.email}`}>
              <Mail className="size-5" aria-hidden="true" />
              <span className="hidden md:inline text-sm">Email</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">Email</TooltipContent>
        </Tooltip>

        {/* Brochure(s) */}
        {hasBrochures && (
          singleBrochure ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={`/brochures/${encodeURIComponent(singleBrochure.filename)}`}
                  download
                  className={btnClass}
                  aria-label={`Download brochure: ${singleBrochure.title}`}
                >
                  <FileDown className="size-5" aria-hidden="true" />
                  <span className="hidden md:inline text-sm">Brochure</span>
                </a>
              </TooltipTrigger>
              <TooltipContent side="left">Download brochure</TooltipContent>
            </Tooltip>
          ) : (
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className={btnClass}
                      aria-label="Download brochures"
                    >
                      <FileDown className="size-5" aria-hidden="true" />
                      <span className="hidden md:inline text-sm">Brochures</span>
                    </button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent side="left">Download brochures</TooltipContent>
              </Tooltip>
              <DropdownMenuContent
                side="left"
                align="end"
                className="z-50 bg-popover text-popover-foreground border border-border rounded-md shadow-md"
              >
                {BROCHURES.map((b) => (
                  <DropdownMenuItem key={b.id} asChild>
                    <a href={`/brochures/${encodeURIComponent(b.filename)}`} download className="flex items-center justify-between gap-2">
                      <span>{b.title}</span>
                      {b.size ? (
                        <span className="text-xs text-muted-foreground">{b.size}</span>
                      ) : null}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        )}
      </div>
    </aside>
  );
};

export default ContactQuickBar;
