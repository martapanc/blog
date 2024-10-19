import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_eZPLzT5w.mjs';
import 'kleur/colors';
/* empty css                                  */
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DWrSZimk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://blog-updates.vercel.app/");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  const identity = {
    firstName: "Sarah",
    country: "Canada",
    occupation: "Technical Writer",
    hobbies: ["photography", "birdwatching", "baseball"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
  const finished = false;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>... and my new Astro site!</h2> <p>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one
        I
        built myself!</p> <p>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is
        going!</p> <p>Here are a few facts about me:</p> <ul> <li>My name is ${identity.firstName}.</li> <li>I live in ${identity.country} and I work as a ${identity.occupation}.</li> ${identity.hobbies.length >= 2 && renderTemplate`<li>Two of my hobbies are: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`} </ul> <p>My skills are:</p> <ul> ${skills.map((skill) => renderTemplate`<li class="skill">${skill}</li>`)} </ul> ${renderTemplate`<p>I am happy to be learning Astro!</p>`}${finished}${renderTemplate`<p>My goal is to finish in 3 days.</p>` }` })}`;
}, "/Users/mpancaldi/Workspace/updates.martacodes.it/src/pages/about.astro", void 0);

const $$file = "/Users/mpancaldi/Workspace/updates.martacodes.it/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
