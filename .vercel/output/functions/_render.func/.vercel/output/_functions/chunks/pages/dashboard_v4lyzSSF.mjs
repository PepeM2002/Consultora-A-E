/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CNGG5TA2.mjs';
import 'kleur/colors';
import { b as $$Layout } from './AboutUs_BeZWAjJV.mjs';
import { s as supabase } from './callback_BX_6l2H5.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/signin");
  }
  const email = data?.user?.email;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "panel de control" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Bienvenido ${email}</h1> <p>Estamos felices de verte aquí</p> <form action="/api/auth/signout"> <button type="submit">Cerrar sesión</button> </form> ` })}`;
}, "C:/Users/josev/Consultora/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/josev/Consultora/src/pages/dashboard.astro";
const $$url = "/dashboard";

export { $$Dashboard as default, $$file as file, $$url as url };
