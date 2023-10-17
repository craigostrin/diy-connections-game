import { Json } from "@/types/supabase-generated.types"
import { supabase } from "./supabase"
import { DbResult } from "@/types/supabase.types"

export async function getRandomPuzzle() {
  const query = supabase.from("random_puzzles").select("*").limit(1).single()
  const result: DbResult<typeof query> = await query

  return result
}

export async function insertPuzzle(
  solution: Json,
  author: string = "anonymous"
) {
  const query = supabase.from("puzzles").insert({ author, solution }).select()
  const result: DbResult<typeof query> = await query

  return result
}
