/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, m as maybeRenderHead, h as renderComponent } from '../astro_CNGG5TA2.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */
import { $ as $$Index } from './index_DgqNJidv.mjs';

const $$Astro$2 = createAstro();
const $$Layoutcursos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layoutcursos;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/webp" href="/logo.webp"><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/josev/Consultora/src/layouts/Layoutcursos.astro", void 0);

const $$Astro$1 = createAstro();
const $$Principio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Principio;
  return renderTemplate`<!-- Encabezado -->${maybeRenderHead()}<div class="flex items-center justify-between mb-6"> <div class="flex"> <img id="logo" src="/logo.webp" class="h-14" alt="A-E Logo"> <h1 class="text-3xl font-semibold text-center text-white">Cursos A&E</h1> </div> <div> <a href="/signin/" class="text-blue-500 hover:text-blue-600">Iniciar Sesión</a> <span class="mx-2">|</span> <a href="/register/" class="text-blue-500 hover:text-blue-600">Regístrate</a> </div> </div> <!-- Navegación --> <div class="flex flex-wrap justify-center mb-8"> <a href="#" class="mx-2 py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600">Inicio</a> <a href="#" class="mx-2 py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600">Cursos</a> <a href="/" class="mx-2 py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600">Nosotros</a> </div> <div class=" py-16"> <h1 class="text-6xl font-semibold text-center text-white uppercase">cursos y diplomados</h1> </div> <div class="text-center text-2xl text-white text-balance lg:flex  md:"> <img src="/adr.png" alt=""> <p>
"Despierta tu genio interior, <strong class="text-yellow-300">
donde la innovación se encuentra con la inspiración. </strong>¡Únete a
	nuestra comunidad de aprendizaje y haz brillar tu futuro!"
<br> <br> <strong class="uppercase text-3xl text-yellow-300">
Nuestros cursos estan avalados Por:
</strong> <img src="/logo.png" class="lg:py-10 lg:px-28 py-12 "> </p> </div> <!-- Categorías de Cursos --> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"> <div class="bg-white rounded-lg shadow-md p-4"> <h2 class="text-lg font-semibold mb-2">Programación</h2> <!-- Imagen de Programación --> <img src="https://via.placeholder.com/150" alt="Programación" class="mb-2 rounded-md"> <!-- Lista de cursos --> </div> <div class="bg-white rounded-lg shadow-md p-4"> <h2 class="text-lg font-semibold mb-2">Diseño Gráfico</h2> <!-- Imagen de Diseño Gráfico --> <img src="https://via.placeholder.com/150" alt="Diseño Gráfico" class="mb-2 rounded-md"> <!-- Lista de cursos --> </div> <div class="bg-white rounded-lg shadow-md p-4"> <h2 class="text-lg font-semibold mb-2">Marketing Digital</h2> <!-- Imagen de Marketing Digital --> <img src="https://via.placeholder.com/150" alt="Marketing Digital" class="mb-2 rounded-md"> <!-- Lista de cursos --> </div> <div class="bg-white rounded-lg shadow-md p-4"> <h2 class="text-lg font-semibold mb-2">Desarrollo Web</h2> <!-- Imagen de Desarrollo Web --> <img src="https://via.placeholder.com/150" alt="Desarrollo Web" class="mb-2 rounded-md"> <!-- Lista de cursos --> </div> </div> <!-- Sección de Servicios --> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"> <div class="bg-white rounded-lg shadow-md p-4"> <h2 class="text-lg font-semibold mb-2">Cursos Online</h2> <!-- Descripción de servicios --> </div> <div class="bg-white rounded-lg shadow-md p-4"> <h2 class="text-lg font-semibold mb-2">Recursos Educativos</h2> <!-- Descripción de servicios --> </div> <div class="bg-white rounded-lg shadow-md p-4"> <h2 class="text-lg font-semibold mb-2">Comunidad</h2> <!-- Descripción de servicios --> </div> </div> <!-- Por qué elegirnos --> <div class="bg-white rounded-lg shadow-md p-4 mb-8"> <h2 class="text-xl font-semibold mb-4">¿Por Qué Elegirnos?</h2> <!-- Lista de beneficios --> </div> <div class="fixed bottom-0 left-0 z-0 h-1/3 w-full border-b" style="background-image: linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);"></div> <div class="fixed bottom-0 right-0 z-0 h-1/3 w-full" style="background-image: linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%); border-color: rgba(92, 79, 240, 0.2);"></div>`;
}, "C:/Users/josev/Consultora/src/components/Cursos/Principio.astro", void 0);

const $$Astro = createAstro();
const $$Pagehome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagehome;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layoutcursos, { "title": "Cursos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SpeedInsights", $$Index, {})} ${renderComponent($$result2, "Principio", $$Principio, {})} ` })}`;
}, "C:/Users/josev/Consultora/src/pages/pagehome.astro", void 0);

const $$file = "C:/Users/josev/Consultora/src/pages/pagehome.astro";
const $$url = "/pagehome";

export { $$Pagehome as default, $$file as file, $$url as url };
