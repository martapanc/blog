import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_eZPLzT5w.mjs';
import 'kleur/colors';
/* empty css                                  */
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DWrSZimk.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Home Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div>
Just adding some content to see how it looks
</div> ` })}`;
}, "/Users/mpancaldi/Workspace/updates.martacodes.it/src/pages/index.astro", void 0);

const $$file = "/Users/mpancaldi/Workspace/updates.martacodes.it/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
