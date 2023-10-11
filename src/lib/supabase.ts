import { createClient } from "@supabase/supabase-js"
import { Database } from "@/types/supabase-generated.types"
import { API_KEY, PROJECT_URL } from "./supabase-env"

export const supabase = createClient<Database>(PROJECT_URL, API_KEY)
