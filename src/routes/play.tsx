import Answer from "@/components/Answer"
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

  let answersSelected = 0

  return (
    <div>
      <p>This is where you'll see {`${puzzle.author}'s`} puzzle.</p>
      <Answer
        text={"test"}
        canSelect={() => answersSelected < 4}
        onToggle={(isSelected) => {
          if (isSelected) answersSelected++
          else answersSelected--
          console.log(answersSelected)
        }}
      />
    </div>
  )
}

export default Play
