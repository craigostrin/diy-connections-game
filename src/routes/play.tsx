import { getPuzzleById, getRandomPuzzle } from "@/lib/db-api"
import { Puzzle } from "@/types/supabase.types"
import { useLoaderData } from "react-router"

export async function loader({ params }: any) {
  if (params.puzzleId) {
    const puzzle = await getPuzzleById(params.puzzleId)
    return puzzle
  }

  const puzzle = await getRandomPuzzle()
  return puzzle
}

// type PlayProps = {
//   random?: boolean
//   id?: number
// }

function Play() {
  const { data: puzzle } = useLoaderData() as any

  return (
    <div>
      <p>This is where you'll see {`${puzzle.author}'s`} puzzle.</p>
    </div>
  )
}

export default Play
