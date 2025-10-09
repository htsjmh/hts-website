import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server-CILCCPF1.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://htsjmh.github.io");
const $$CTAButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTAButton;
  const {
    href,
    variant = "primary",
    size = "md",
    external = false,
    children
  } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const variantClasses = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500",
    secondary: "bg-white hover:bg-neutral-50 text-primary-600 border border-primary-600 focus:ring-primary-500",
    accent: "bg-accent-500 hover:bg-accent-700 text-white focus:ring-accent-500"
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}${addAttribute(external, "external")}${addAttribute(external ? "_blank" : void 0, "target")}${addAttribute(external ? "noopener noreferrer" : void 0, "rel")}> ${children} ${external && renderTemplate`<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg>`} </a>`;
}, "/Users/samaj/Documents/business/goverment_contracting/website/src/components/CTAButton.astro", void 0);

export { $$CTAButton as $ };
