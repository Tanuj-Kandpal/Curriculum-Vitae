import { createClient } from "@supabase/supabase-js";
const supabaseURL = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseURL, supabaseKey);

export async function getSkills() {
  const { data, error } = await supabase.from("skills").select("*");
  if (error) {
    console.log(error);
    throw new Error("SQL could not be loaded");
  }
  return data;
}
