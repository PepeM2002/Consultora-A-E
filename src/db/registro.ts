import type { APIRoute } from "astro";
import { supabase } from '../db/supabase'

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const nombres = formData.get("text")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password || !nombres) {
    return new Response("Los campos son requeridos", { status: 400 });
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect("/login");
};