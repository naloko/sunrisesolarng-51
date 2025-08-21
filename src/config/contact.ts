export const CONTACT = {
  phoneDisplay: "+234 9098888119",
  phoneE164: "+2349098888119",
  whatsappNumber: "8618310008190", // E.164 without plus for wa.me
  email: "erin.xing@sunrisesolar.ng",
  whatsappMessage: "Hello, I'm interested in your solar solutions.",
  emailSubject: "Inquiry from website",
  emailBody: "Hello, I'd like to learn more about your solar solutions."
};

export const buildTelLink = (e164WithPlus: string) => `tel:${e164WithPlus}`;

export const buildWhatsAppLink = (numberNoPlus: string, message: string) =>
  `https://wa.me/${numberNoPlus}?text=${encodeURIComponent(message)}`;

export const buildMailtoLink = (
  email: string,
  subject: string,
  body: string
) => `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
