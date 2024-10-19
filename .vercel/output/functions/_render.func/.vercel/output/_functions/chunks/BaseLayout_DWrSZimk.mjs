import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, c as createAstro, b as addAttribute, g as defineStyleVars, h as renderHead, e as renderSlot } from './astro/server_eZPLzT5w.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/public">Home</a> <a href="/about/">About</a> <a href="/blog/">Blog</a> </div>`;
}, "/Users/mpancaldi/Workspace/updates.martacodes.it/src/components/navigation/Navigation.astro", void 0);

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "/Users/mpancaldi/Workspace/updates.martacodes.it/src/components/navigation/Hamburger.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> </header>`;
}, "/Users/mpancaldi/Workspace/updates.martacodes.it/src/components/navigation/Header.astro", void 0);

const $$Astro$1 = createAstro("https://blog-updates.vercel.app/");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yw26qjlf>${platform}</a> `;
}, "/Users/mpancaldi/Workspace/updates.martacodes.it/src/components/navigation/Social.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const platform = "github";
  const username = "withastro";
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-b2avyow5> <p data-astro-cid-b2avyow5>Learn more about my projects on <a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-b2avyow5>${platform}</a>!</p> ${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "astrodotbuild", "data-astro-cid-b2avyow5": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "withastro", "data-astro-cid-b2avyow5": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "youtube", "username": "astrodotbuild", "data-astro-cid-b2avyow5": true })} </footer> `;
}, "/Users/mpancaldi/Workspace/updates.martacodes.it/src/components/navigation/Footer.astro", void 0);

const $$Astro = createAstro("https://blog-updates.vercel.app/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  const skillColor = "navy";
  const $$definedVars = defineStyleVars([{ skillColor }]);
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa${addAttribute($$definedVars, "style")}> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body data-astro-cid-37fxchfa${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true })} <h1 data-astro-cid-37fxchfa${addAttribute($$definedVars, "style")}>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} </body></html>`;
}, "/Users/mpancaldi/Workspace/updates.martacodes.it/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
