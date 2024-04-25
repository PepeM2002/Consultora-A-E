/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CNGG5TA2.mjs';
import 'kleur/colors';
import { b as $$Layout } from './AboutUs_BeZWAjJV.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="font-sans"> <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-blue-300 "> <div class="w-full flex justify-start px-4 mb-4"> <a href="/pagehome/" class="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"> <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <polyline points="15 18 9 12 15 6"></polyline> </svg> <span>Inicio</span> </a> </div> <div class="relative sm:max-w-sm w-full"> <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div> <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div> <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md"> <label for="" class="block mt-3 text-sm text-gray-700 text-center font-semibold">
Registrate
</label> <form method="post" action="/api/auth/register" class="mt-10"> <div> <input id="user" name="user" required type="text" placeholder="Nombres" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"> </div> <div class="mt-7"> <input id="email" name="email" required type="email" placeholder="Correo electronico" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"> </div> <div class="mt-7"> <input id="password" name="password" type="password" placeholder="Contraseña" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"> </div> <div class="mt-7"> <input type="password" required placeholder="Confirmar contraseña" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"> </div> <div class="mt-7"> <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
Registrar
</button> </div> <div class="flex mt-7 items-center text-center"> <hr class="border-gray-300 border-1 w-full rounded-md"> <label class="block font-medium text-sm text-gray-600 w-full">
Registrate con
</label> <hr class="border-gray-300 border-1 w-full rounded-md"> </div> <div class="flex mt-7 justify-center w-full"> <button class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
Facebook
</button> <button class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
Google
</button> </div> <div class="mt-7"> <div class="flex justify-center items-center"> <label class="mr-2">¿Ya tienes una cuenta?</label> <a href="/signin/" class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
Iniciar sesion
</a> </div> </div> </form> </div> </div> </div> </div> ` })}`;
}, "C:/Users/josev/Consultora/src/pages/register.astro", void 0);

const $$file = "C:/Users/josev/Consultora/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
