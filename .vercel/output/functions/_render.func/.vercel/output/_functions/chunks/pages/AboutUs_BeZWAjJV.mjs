/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, m as maybeRenderHead, h as renderComponent } from '../astro_CNGG5TA2.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/webp" href="/logo.webp"><link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/josev/Consultora/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Headers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Headers;
  return renderTemplate`<!-- Header -->${maybeRenderHead()}<nav class="fixed left-0 right-0 z-30 top-0 bg-orange-400 border-gray-200  dark:bg-orange-400 backdrop-opacity-85"> <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"> <a href="../" class="flex items-center space-x-3 rtl:space-x-reverse"> <img id="logo" src="/logo.webp" class="h-14" alt="A-E Logo"> <span id="nombre" class="self-center text-3xl font-semibold whitespace-nowrap text-white dark:text-white">A&E Consultoría</span> </a>  <a href="https://wa.me/527225763413?text= Hola quiero información más a detalle"> <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"> <img src="/icon.gif" alt="" style="width: 100%; height: auto; max-width: 30px; max-height: 20px;"> <span>Contactanos</span> </button> </a> </div> </nav> <!-- Menú de navegación para pantallas grandes --> <nav class="fixed z-30 left-0 right-0 top-[88px] bg-blue-700 dark:bg-blue-700 hidden md:block"> <div class="max-w-screen-xl px-4 py-3 mx-auto"> <div class="flex items-center"> <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm"> <li> <a href="/" class="text-white dark:text-white hover:underline" aria-current="page">INICIO</a> </li> <li> <a href="/servicios/" class="text-white dark:text-white hover:underline">SERVICIOS</a> </li> <li> <a href="/educacion/" class="text-white dark:text-white hover:underline">EDUCACION CONTINUA</a> </li> <li> <a href="/experiencias/" class="text-white dark:text-white hover:underline">EXPERIENCIAS</a> </li> <li> <a href="/blog/" class="text-white dark:text-white hover:underline">BLOG</a> </li> <li> <a href="/AboutUs/" class="text-white dark:text-white hover:underline">SOBRE NOSOTROS</a> </li> </ul> </div> </div> </nav> <!-- Menú de navegación para pantallas pequeñas --> <nav class="fixed z-30 left-0 right-0 top-[88px] bg-gray-50 dark:bg-blue-700 md:hidden"> <div class="max-w-screen-xl px-4 py-3 mx-auto"> <div class="flex items-center"> <!-- Botón para abrir el menú en pantallas pequeñas --> <button id="mobile-menu-toggle" class="text-gray-900 dark:text-white hover:underline focus:outline-none transition duration-200 ease-in-out"> <!-- Ícono de barras horizontales para indicar menú --> <span class="material-symbols-outlined"> menu</span> </button> <!-- Lista de navegación para pantallas pequeñas --> <ul id="mobile-menu" class="flex flex-col font-medium mt-4 space-y-4 text-sm transition duration-300 ease-in-out"> <li> <a href="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">INICIO</a> </li> <li> <a href="/servicios/" class="text-gray-900 dark:text-white hover:underline">SERVICIOS</a> </li> <li> <a href="/educacion/" class="text-gray-900 dark:text-white hover:underline">EDUCACION CONTINUA</a> </li> <li> <a href="/experiencias/" class="text-gray-900 dark:text-white hover:underline">EXPERIENCIAS</a> </li> <li> <a href="/blog/" class="text-gray-900 dark:text-white hover:underline">BLOG</a> </li> <li> <a href="/AboutUs/" class="text-gray-900 dark:text-white hover:underline">SOBRE NOSOTROS</a> </li> </ul> </div> </div> </nav>`;
}, "C:/Users/josev/Consultora/src/components/headers.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="p-4 bg-gray-800 sm:p-6 dark:bg-gray-800"> <div class="mx-auto max-w-screen-xl"> <div class="md:flex md:justify-between"> <div class="mb-6 md:mb-0"> <a href="#" class="flex items-center"> <img src="/logo.webp" class="mr-8 h-auto" alt=""> </a> </div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"> <div> <h2 class="mb-4 text-sm font-semibold text-white uppercase dark:text-white">
Recursos
</h2> <ul class="text-gray-400 dark:text-gray-400"> <li class="mb-3"> <a href="#" class="hover:underline">Servicios</a> </li> <li class="mb-3"> <a href="#" class="hover:underline">Educacion Continua</a> </li> <li class="mb-3"> <a href="#" class="hover:underline">Experiencias</a> </li> <li class="mb-3"> <a href="#" class="hover:underline">Blog</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
Siguenos
</h2> <ul class="text-gray-400 dark:text-gray-400"> <li class="mb-4"> <a href="https://www.facebook.com/aecapacitacionyconsultoria" class="hover:underline">Facebook</a> </li> <li> <a href="https://www.instagram.com/aecapacitacionc/" class="hover:underline">Instagram</a> </li> </ul> </div> <div> <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2> <ul class="text-gray-400 dark:text-gray-400"> <li class="mb-4"> <a href="#" class="hover:underline">Politica de privacidad</a> </li> <li> <a href="#" class="hover:underline">Terminos y condiciones</a> </li> </ul> </div> </div> </div> <hr class="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <span class="text-sm text-gray-400 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">A&E Consultoría</a> </span> <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0"> <a href="https://www.facebook.com/aecapacitacionyconsultoria" class="text-gray-500 hover:text-white dark:hover:text-white"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg> </a> <a href="https://www.instagram.com/aecapacitacionc/" class="text-gray-500 hover:text-white dark:hover:text-white"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg> </a> <a href="https://www.linkedin.com/company/aecapacitaci%C3%B3nyconsultor%C3%ADa/?originalSubdomain=mx" class="text-gray-500 hover:text-white dark:hover:text-white"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M20.286 0H3.713C1.663 0 0 1.662 0 3.713v16.573C0 22.338 1.663 24 3.713 24h16.573C22.337 24 24 22.338 24 20.286V3.713C24 1.663 22.338 0 20.286 0zM7.08 20.28H4.562V9.316h2.517v10.965h.002zM5.82 8.058a1.545 1.545 0 11-.002-3.09 1.545 1.545 0 01.002 3.09zm14.46 11.22h-2.517v-5.492c0-1.312-.025-3.005-1.828-3.005-1.83 0-2.11 1.432-2.11 2.908v5.59H10.5V9.316h2.425v1.55h.034c.338-.64 1.163-1.312 2.392-1.312 2.564 0 3.038 1.687 3.038 3.875v5.77z"></path></svg> </a> <a href="https://www.youtube.com/channel/UCuoPdDuSC3BORHTSKN0mSvQ" class="text-gray-500 hover:text-white dark:hover:text-white"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.66 7.93c-.27-1.01-1.01-1.79-2.04-2.04C19.5 5.5 12 5.5 12 5.5s-7.5 0-9.62.39c-1.03.25-1.77 1.02-2.04 2.04C0 9.05 0 12 0 12s0 2.95.34 4.07c.27 1.01 1.01 1.78 2.04 2.04C4.5 19.5 12 19.5 12 19.5s7.5 0 9.62-.39c1.03-.25 1.77-1.02 2.04-2.04C24 14.95 24 12 24 12s0-2.95-.34-4.07zM9.5 15.5V8.5l6 3-6 3z"></path> </svg> </a> </div> </div> </div> </footer>`;
}, "C:/Users/josev/Consultora/src/components/footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$Historia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Historia;
  return renderTemplate`${maybeRenderHead()}<section class="py-10  px-5 flex items-center justify-center"> <div class="container mx-auto bg-gray-900 bg-opacity-30 shadow-lg shadow-white p-8 rounded-lg"> <h2 class="text-3xl font-bold mb-8 text-center uppercase text-white">Nuestra Historia</h2> <div class="mb-12"> <h3 class="text-xl font-semibold mb-4 text-white">Tenancingo, México. 1992</h3> <p class="text-white">
Se funda nuestra empresa hermana Instituto Superior de Estudios Comerciales y
				Administrativos S.C., institución educativa que durante 25 años ha prestado servicios de
				nivel medio superior en el municipio de Tenancingo, México, consolidándose como una de las
				mejores escuelas de la zona.
</p> </div> <div class="mb-12"> <h3 class="text-xl font-semibold mb-4 text-white">Toluca, México. Junio.2018</h3> <p class="text-white">
Se crea A&E Capacitación y Consultoría bajo el esquema de brindar “SERVICIOS DE
				CAPACITACIÓN” en la ciudad de Toluca, Estado de México contando con la experiencia de sus
				profesionistas de más de 15 años en la Gestión del Recurso Humano y Docencia en
				Instituciones Públicas y Privadas de nivel superior de nuestra socia fundadora, permite
				hacer una evaluación precisa de aquello que necesitan los profesionales para seguir
				desarrollándose en sus diferentes áreas de especialización y de esta manera hacer crecer su
				Talento.
</p> </div> <div class="mb-12"> <h3 class="text-xl font-semibold mb-4 text-white">México. 2018</h3> <p class="text-white">
Se inicia el alta de nuestros instructores y diferentes cursos en la Secretaría del Trabajo
				y Previsión Social (STPS). A la par del acontecimiento anterior, ISECA S.C., participa de
				manera conjunta, reconociendo los programas que la Consultora ofrece, esto como respuesta a
				la innovación que la propia institución requiere y haciendo uso de su alcance de su acta
				constitutiva y registro ante la Secretaría de Educación Pública (SEP) para brindar Servicios
				de Capacitación, Adiestramiento, Educación Superior y Posgrados.
</p> </div> <div class="mb-12"> <h3 class="text-xl font-semibold mb-4 text-white">México. 2019</h3> <p class="text-white">
La fusión del reconocimiento ante la STPS y la SEP, ha permitido ofrecer servicios de
				calidad a más de 400 personas en programas abiertos durante el 2019; y de manera privada
				permitiendo entrar a empresas de diferentes giros como servicios, automotriz, plásticos y
				educativos.
</p> </div> <div class="mb-12"> <h3 class="text-xl font-semibold mb-4 text-white">México. Febrero.2020</h3> <p class="text-white">
Se inicia con los primeros programas educativos de tipo Diplomado especializándose en las
				Áreas Estratégicas de la Gestión del Talento Humano y en Septiembre de este año se busca
				incorporar programas de posgrados a nuestro catálogo actual.
</p> </div> <div class="mb-12"> <h3 class="text-xl font-semibold mb-4 text-white">Mexico. Marzo. 2022</h3> <p class="text-white">
En medio de esta crisis que han originado entornos un tanto complicados, las organizaciones
				se han visto obligadas a gestionar cambios que les permitan seguir siendo competitivos. Así,
				A&E ha favorecido con sus servicios de consultoría y capacitación, para que el talento pueda
				seguir desarrollándose y hacer frente a todo tipo de cambio. Mediante sus servicios online y
				el trabajo colaborativo, A&E no solo está presente en México, sino ha traspasado fronteras a
				países de habla hispan tales como Argentina, Bolivia, Chile, Ecuador, España, Guatemala,
				Honduras, Perú y Venezuela, a los cuales ha llevado el mensaje que conectar con el propósito
				mediante la potencialización del Talento, podemos dar valor agregado que generen cambios.
</p> </div> </div> </section>`;
}, "C:/Users/josev/Consultora/src/components/blog/historia.astro", void 0);

const $$Astro$1 = createAstro();
const $$Mision = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Mision;
  return renderTemplate`<!-- Imagen principal -->${maybeRenderHead()}<img src="/E-2.webp" class="flex flex-grow w-full h-[650px] relative overflow-hidden z-10" alt=""> <!-- Sección de Tarjetas --> <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm my-10 mx-7 dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800 z-10"> <!-- Tarjeta 1 - Misión --> <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700"> <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Misión</h3> <p class="my-4">
Somos una empresa consultora que provoca la profesionalización y potencialización del
                talento humano dentro y fuera de las organizaciones, por medio de programas integrales que
                proporcionen soluciones conectadas a las necesidades del mercado educativo y laboral en los
                nuevos entornos, con base en los principios de adaptación, bienestar, calidad, innovación y
                respeto del ser humano.
</p> </blockquote> <figcaption class="flex items-center justify-center"> <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"> <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3"> <div>Bonnie Green</div> <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div> </div> </figcaption> </figure> <!-- Tarjeta 2 - Visión --> <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700"> <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Visión</h3> <p class="my-4">
Ser una empresa sustentable que genere cambios rentables, para todo de tipo de
                organizaciones en referencia a su talento humano, dentro y fuera de México.
</p> </blockquote> <figcaption class="flex items-center justify-center"> <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"> <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3"> <div>Roberta Casas</div> <div class="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div> </div> </figcaption> </figure> </div> <!-- Sección de Incentivos con Fondo Oscuro --> <section class="bg-transparent text-white py-16 mx-6 my-7 rounded-md shadow-white shadow-lg"> <div class="container mx-auto text-center"> <h2 class="text-3xl font-bold uppercase mb-8">Valores</h2> <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-8"> <!-- Incentivo 1 - Respeto --> <div class="bg-gray-900 p-8 rounded shadow-md"> <span class="text-4xl text-yellow-400 mb-4">&#9733;</span> <h3 class="text-xl font-semibold uppercase mb-4">Respeto</h3> <p class="text-gray-300 text-sm">
Nuestros clientes son la razón de ser, por lo cual, se merecen un trato digno y
                    profesional, basándonos en sus necesidades y condiciones.
</p> </div> <!-- Incentivo 2 - Calidad --> <div class="bg-gray-900 p-8 rounded shadow-md"> <span class="text-4xl text-yellow-400 mb-4">&#9733;</span> <h3 class="text-xl font-semibold uppercase mb-4">Calidad</h3> <p class="text-gray-300 text-sm">
Los programas que ofrecemos cumplen con las disposiciones normativas necesarias, nuestros
                    clientes merecen tener la certeza que aquello que contraten coadyuven al cumplimiento de
                    objetivos en todos los sentidos.
</p> </div> <!-- Incentivo 3 - Confianza --> <div class="bg-gray-900 p-8 rounded shadow-md"> <span class="text-4xl text-yellow-400 mb-4">&#9733;</span> <h3 class="text-xl font-semibold uppercase mb-4">Confianza</h3> <p class="text-gray-300 text-sm">
Trabajar con honradez y claridad en las acciones, permite a nuestro cliente poner a
                    nuestro alcance sus necesidades, confiando que las mismas serán cubiertas de manera
                    segura.
</p> </div> <!-- Incentivo 4 - Innovación --> <div class="bg-gray-900 p-8 rounded shadow-md"> <span class="text-4xl text-yellow-400 mb-4">&#9733;</span> <h3 class="text-xl font-semibold uppercase mb-4">Innovación</h3> <p class="text-gray-300 text-sm">
Nuestros programas están dirigidos a la búsqueda del crecimiento constante del ser humano,
                    especialmente aquellos que en su ámbito laboral potencialicen sus habilidades.
</p> </div> <!-- Incentivo 5 - Desarrollo --> <div class="bg-gray-900 p-8 rounded shadow-md"> <span class="text-4xl text-yellow-400 mb-4">&#9733;</span> <h3 class="text-xl font-semibold uppercase mb-4">Desarrollo</h3> <p class="text-gray-300 text-sm">
Nos adaptamos a la transformación de los diferentes sistemas por los cuales nuestros
                    clientes pueden adquirir el crecimiento constante.
</p> </div> </div> </div> </section>`;
}, "C:/Users/josev/Consultora/src/components/blog/mision.astro", void 0);

const $$Astro = createAstro();
const $$AboutUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutUs;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre Nosotros" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headers", $$Headers, {})} ${renderComponent($$result2, "Mision", $$Mision, {})} ${renderComponent($$result2, "Historia", $$Historia, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/josev/Consultora/src/pages/AboutUs.astro", void 0);

const $$file = "C:/Users/josev/Consultora/src/pages/AboutUs.astro";
const $$url = "/AboutUs";

const AboutUs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AboutUs,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Headers as $, AboutUs as A, $$Footer as a, $$Layout as b };
