import { createClient } from "@supabase/supabase-js";

export const supabaseAdmin = createClient(
  process.env.API_URL || "",
  process.env.SUPABASE_SECRET || ""
);
