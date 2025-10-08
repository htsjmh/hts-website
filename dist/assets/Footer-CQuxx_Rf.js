import { d as createAstro, c as createComponent, b as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate, m as maybeRenderHead } from './astro/server-CILCCPF1.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */

const $$Astro$1 = createAstro("https://headentechsolutions.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "Headen Tech Solutions delivers AI & data solutions in Azure Government for federal agencies. Secure, compliant, mission-focused.", canonical } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="canonical"${addAttribute(canonical || Astro2.url, "href")}><!-- Security Headers --><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"><meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin"><meta http-equiv="X-Content-Type-Options" content="nosniff"><meta http-equiv="X-Frame-Options" content="DENY"><meta http-equiv="X-XSS-Protection" content="1; mode=block"><!-- Preload system fonts for performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Open Graph / Social Media --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:site_name" content="Headen Tech Solutions"><!-- Twitter Card --><meta name="twitter:card" content="summary"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><title>${title}</title><!-- Accessibility: Skip to content link -->${renderHead()}</head> <body class="font-sans text-neutral-900 bg-white antialiased" data-astro-cid-37fxchfa> <!-- Skip to content link for accessibility --> <a href="#main-content" class="skip-link" data-astro-cid-37fxchfa>Skip to main content</a> ${renderSlot($$result, $$slots["default"])} <!-- Consent Banner Component --> <div id="consent-banner" class="hidden" data-astro-cid-37fxchfa></div> <!-- Analytics (only loads after consent) -->  </body> </html>`;
}, "/Users/samaj/Documents/business/goverment_contracting/website/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://headentechsolutions.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Government Consulting", href: "/governmentconsulting" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Compliance", href: "/compliance" },
    { name: "Contracts & Codes", href: "/contracts-and-codes" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];
  const portalUrl = "https://portal.headentechsolutions.com";
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-sm border-b border-neutral-300"> <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation"> <div class="flex justify-between items-center h-16"> <!-- Logo --> <div class="flex-shrink-0"> <a href="/" class="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"> <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"> <span class="text-white font-bold text-sm">HTS</span> </div> <span class="text-xl font-semibold text-neutral-900">Headen Tech Solutions</span> </a> </div> <!-- Desktop Navigation --> <div class="hidden md:block"> <div class="ml-10 flex items-baseline space-x-8"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-neutral-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"${addAttribute(Astro2.url.pathname === item.href ? "page" : void 0, "aria-current")}> ${item.name} </a>`)} </div> </div> <!-- Portal Button --> <div class="hidden md:block"> <a${addAttribute(portalUrl, "href")} class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" target="_blank" rel="noopener noreferrer">
Launch Secure Portal
</a> </div> <!-- Mobile menu button --> <div class="md:hidden"> <button type="button" class="bg-white inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500" aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-button"> <span class="sr-only">Open main menu</span> <!-- Hamburger icon --> <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobile menu --> <div class="md:hidden hidden" id="mobile-menu"> <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-50 border-t border-neutral-300"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-neutral-700 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"${addAttribute(Astro2.url.pathname === item.href ? "page" : void 0, "aria-current")}> ${item.name} </a>`)} <div class="pt-4"> <a${addAttribute(portalUrl, "href")} class="bg-primary-600 hover:bg-primary-700 text-white block px-3 py-2 text-base font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" target="_blank" rel="noopener noreferrer">
Launch Secure Portal
</a> </div> </div> </div> </nav> </header> `;
}, "/Users/samaj/Documents/business/goverment_contracting/website/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const portalUrl = "https://portal.headentechsolutions.com";
  return renderTemplate`${maybeRenderHead()}<footer class="bg-neutral-900 text-white"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <!-- Company Info --> <div class="col-span-1 md:col-span-2"> <div class="flex items-center space-x-2 mb-4"> <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"> <span class="text-white font-bold text-sm">HTS</span> </div> <span class="text-xl font-semibold">Headen Tech Solutions</span> </div> <p class="text-neutral-300 mb-4 max-w-md">
Delivering AI & data solutions in Azure Government for federal agencies. 
          Secure, compliant, mission-focused.
</p> <div class="space-y-2"> <p class="text-sm text-neutral-300"> <strong>Email:</strong> <a href="mailto:consulting@headentechsolutions.com" class="text-primary-300 hover:text-primary-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
consulting@headentechsolutions.com
</a> </p> <p class="text-sm text-neutral-300"> <strong>Portal:</strong> <a${addAttribute(portalUrl, "href")} class="text-primary-300 hover:text-primary-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded" target="_blank" rel="noopener noreferrer">
portal.headentechsolutions.com
</a> </p> </div> </div> <!-- Quick Links --> <div> <h3 class="text-lg font-semibold mb-4">Quick Links</h3> <ul class="space-y-2"> <li> <a href="/governmentconsulting" class="text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
Government Consulting
</a> </li> <li> <a href="/capabilities" class="text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
Capabilities
</a> </li> <li> <a href="/compliance" class="text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
Compliance
</a> </li> <li> <a href="/contracts-and-codes" class="text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
Contracts & Codes
</a> </li> <li> <a href="/about" class="text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
About
</a> </li> </ul> </div> <!-- Legal & Accessibility --> <div> <h3 class="text-lg font-semibold mb-4">Legal & Accessibility</h3> <ul class="space-y-2"> <li> <a href="/privacy" class="text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
Privacy Policy
</a> </li> <li> <a href="/terms" class="text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
Terms of Service
</a> </li> <li> <a href="/accessibility" class="text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
Accessibility Statement
</a> </li> <li> <a href="/status" class="text-neutral-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
System Status
</a> </li> </ul> </div> </div> <!-- Bottom Bar --> <div class="border-t border-neutral-700 mt-8 pt-8"> <div class="flex flex-col md:flex-row justify-between items-center"> <p class="text-neutral-400 text-sm">
© ${currentYear} Headen Tech Solutions. All rights reserved.
</p> <div class="mt-4 md:mt-0"> <p class="text-neutral-400 text-sm"> <span class="inline-flex items-center"> <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path> </svg>
FedRAMP High Compliant
</span> </p> </div> </div> </div> </div> </footer>`;
}, "/Users/samaj/Documents/business/goverment_contracting/website/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b };
