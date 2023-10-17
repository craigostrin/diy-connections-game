import { supabase } from "./supabase"
import { DbResult } from "@/types/supabase.types"
import { Json } from "@/types/supabase-generated.types"

export async function getPuzzleById(id: number) {
  const query = supabase.from("puzzles").select("*").eq("id", id).single()
  const result: DbResult<typeof query> = await query
  return result
}

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
