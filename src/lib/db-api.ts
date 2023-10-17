import { Json } from "@/types/supabase-generated.types"
import { supabase } from "./supabase"
import { DbResult } from "@/types/supabase.types"

export async function getRandomPuzzle() {}

export async function insertPuzzle(
  solution: Json,
  author: string = "anonymous"
) {
  const query = supabase.from("puzzles").insert({ author, solution })
  const result: DbResult<typeof query> = await query

  return result
}
