/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, e as addAttribute, g as renderSlot, u as unescapeHTML } from '../astro_CNGG5TA2.mjs';
import 'kleur/colors';
import { $ as $$Headers, a as $$Footer, b as $$Layout } from './AboutUs_BeZWAjJV.mjs';
import 'clsx';
import { g as getI18N } from './blog_DMhXwcKK.mjs';
/* empty css                          */

const $$Astro$7 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "C:/Users/josev/Consultora/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro$6 = createAstro();
const $$Section1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Section1;
  return renderTemplate`${maybeRenderHead()}<section class="h-[600px] relative overflow-hidden top-5 z-10"> <!-- Gradiante de la imagen y estilos de tailwind --> <div class="bg-gradient-to-tr from-blue-400 to-blue-600 absolute top-0 bottom-0 h-screen w-screen z-10"> <img class="object-cover w-full h-[100%] mix-blend-overlay" src="https://i.pinimg.com/originals/ab/f2/60/abf260fd216d45308d70a7c1896db66f.gif"> </div> <section class="block z-10  relative top-[200px] md:top-44 md:left-80 items-center rounded-3xl opacity-90 shadow-white overflow-hidden "> <video width="680" height="260" src="/A&E.mp4" controls autoplay muted loop></video> </section> </section>`;
}, "C:/Users/josev/Consultora/src/components/section1.astro", void 0);

const $$Astro$5 = createAstro();
const $$BentoItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BentoItem;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`
  ${Astro2.props.class}
  col-span-5
  relative rounded-xl
  backdrop-blur-md
  border border-black/10
  shadow-inner shadow-white/10
  overflow-hidden
  group
`, "class")}> <div class="absolute bottom-0 top-0 z-10 h-full w-full
    bg-gradient-to-b from-transparent from-10% via-[#151836]/50 to-[#151836]/80"></div> ${renderSlot($$result, $$slots["image"])} <div class="relative z-20 flex h-full select-none flex-col justify-end gap-1 p-4 text-lg md:p-6"> <h2 class="mb-4 text-balance text-3xl font-semibold uppercase text-yellow-200"> ${title} </h2> ${subtitle && renderTemplate`<h3 class="-mt-4 mb-4 text-3xl font-semibold text-orange-400/80">${subtitle}</h3>`} ${renderSlot($$result, $$slots["content"])} </div> </article>`;
}, "C:/Users/josev/Consultora/src/components/BentoItem.astro", void 0);

const $$Astro$4 = createAstro();
const $$Bento = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Bento;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`
    w-full max-w-[1400px]
    grid lg:grid-cols-10 auto-rows-[30rem] gap-4
    mx-auto p-6 md:p-12 lg:p-20
  `, "class")}> ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 lg:col-span-4", "title": i18n.BENTO_TITLE_1 }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl text-base md:text-lg text-white">${unescapeHTML(i18n.BENTO_CONTENT_1)}</p>`, "image": ($$result2) => renderTemplate`<div class="background transition-scale absolute bottom-0 left-0 top-0
            -z-10 h-full w-full bg-green-950
        bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110" style="background-image: url('/image1.webp');"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 lg:col-span-6", "title": i18n.BENTO_TITLE_2, "subtitle": i18n.BENTO_SUBTITLE_2 }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl text-base md:text-lg text-white">${unescapeHTML(i18n.BENTO_CONTENT_2)}</p>`, "image": ($$result2) => renderTemplate`<div class="background transition-scale absolute bottom-0 left-0 top-0
    -z-10 h-full w-full bg-green-800
    bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110" style="background-image: url('/E-1.webp')"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 lg:col-span-6", "title": i18n.BENTO_TITLE_3, "subtitle": i18n.BENTO_SUBTITLE_3 }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl text-base md:text-lg text-white">${unescapeHTML(i18n.BENTO_CONTENT_3)}</p>`, "image": ($$result2) => renderTemplate`<div class="background transition-scale absolute bottom-0 left-0 top-0
            -z-10 h-full w-full bg-green-900
        bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110" style="background-image:  url('/service.webp');"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 lg:col-span-4", "title": i18n.BENTO_TITLE_4 }, { "content": ($$result2) => renderTemplate`<p class="max-w-xl text-base md:text-lg text-white">${unescapeHTML(i18n.BENTO_CONTENT_4)}</p>`, "image": ($$result2) => renderTemplate`<div class="background transition-scale absolute bottom-0 left-0 top-0
        -z-10 h-full w-full bg-green-950
        bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110" style="background-image: url('/log.webp')"></div>` })} </section>`;
}, "C:/Users/josev/Consultora/src/components/bento.astro", void 0);

const $$Astro$3 = createAstro();
const $$Logos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Logos;
  return renderTemplate`${maybeRenderHead()}<div class="logos "> <div class="logos-slide flex"> <img src="/hotelesbf.svg"> <img src="/logo-2.svg"> <img src="/Logo-3.svg"> <img src="/logo-4.svg"> <img src="/logo-5.svg"> <img src="/logo-6.svg"> <img src="/logo-7.svg"> <img src="/logo-8.svg"> <img src="/logo-9.svg"> <img src="/logo-9.svg"> </div> </div>`;
}, "C:/Users/josev/Consultora/src/components/logos.astro", void 0);

const $$Astro$2 = createAstro();
const $$Accede = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Accede;
  return renderTemplate`${maybeRenderHead()}<div class=" py-3"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
¡Accede a Nuestros Cursos!
</h2> <p class="mt-4 text-lg text-white">
Descubre una <strong class="text-yellow-300">amplia variedad de cursos diseñados para potenciar tus habilidades y conocimientos.</strong> </p> </div> <div class="mt-10 flex justify-center  "> <img class="h-64" src="/cursos.jpg" alt="Imagen de cursos"> </div> <div class="mt-10 text-center"> <a href="/pagehome" class="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:shadow-lg transition duration-300">Acceder</a> </div> </div> </div>`;
}, "C:/Users/josev/Consultora/src/components/accede.astro", void 0);

const $$Astro$1 = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`<!-- Contenedor con fines de demostración -->${maybeRenderHead()}<div class="container my-24 mx-auto md:px-6"> <!-- Sección: Bloque de Diseño --> <section class="mb-28 text-center"> <div class="py-3 md:px-12"> <div class="container mx-auto xl:px-32"> <div class="grid items-center lg:grid-cols-2"> <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0"> <div class="relative z-[1] block rounded-lg  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14"> <h2 class="mb-12 text-3xl font-bold text-white">Contáctenos</h2> <form> <div class="relative mb-6" data-te-input-wrapper-init> <input type="text" class="peer block min-h-[auto] w-full  border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleInput90" placeholder="Nombre"> <label class="pointer-events-none  bg-slate-800 absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-neutral-200 peer-focus:text-primary" for="exampleInput90">Nombre
</label> </div> <div class="relative mb-6" data-te-input-wrapper-init> <input type="email" class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleInput91" placeholder="Dirección de correo electrónico"> <label class="pointer-events-none   bg-slate-800 absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary" for="exampleInput91">Dirección de correo electrónico
</label> </div> <div class="relative mb-6" data-te-input-wrapper-init> <textarea class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlTextarea1" rows="3" placeholder="Su mensaje"></textarea> <label for="exampleFormControlTextarea1" class="pointer-events-none  bg-slate-800 absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Mensaje</label> </div> <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex"> <input class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-500 before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_white] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]" type="checkbox" value="" id="exampleCheck96" checked> <label class="inline-block pl-[0.15rem] hover:cursor-pointer text-white" for="exampleCheck96">
Envíame una copia de este mensaje
</label> </div> <button type="button" data-te-ripple-init data-te-ripple-color="light" class="inline-block  bg-slate-800 w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
Enviar
</button> </form> </div> </div> <div class="md:mb-12 lg:mb-0"> <div class="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20"> <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15064.808172549747!2d-99.740159!3d19.273578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd87244ed7b6b7%3A0xb569fbeb11131931!2sA%26E%20Capacitaci%C3%B3n%20y%20Consultor%C3%ADa!5e0!3m2!1ses!2sus!4v1707242405263!5m2!1ses!2sus" class="absolute left-0 top-0 h-full w-full rounded-lg" frameborder="0" allowfullscreen>
				</iframe> </div> </div> </div> </div> </div> </section> <!-- Sección: Bloque de Diseño --> </div> <!-- Contenedor con fines de demostración -->`;
}, "C:/Users/josev/Consultora/src/components/contacto.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "A&E| Consultoria" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SpeedInsights", $$Index$1, {})} ${renderComponent($$result2, "Headers", $$Headers, {})} ${renderComponent($$result2, "Section1", $$Section1, {})} ${renderComponent($$result2, "Bento", $$Bento, {})} ${renderComponent($$result2, "Accede", $$Accede, {})} ${renderComponent($$result2, "Logos", $$Logos, {})} ${renderComponent($$result2, "Contacto", $$Contacto, {})} ${maybeRenderHead()}<br> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/josev/Consultora/src/pages/index.astro", void 0);

const $$file = "C:/Users/josev/Consultora/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index$1 as $, index as i };
