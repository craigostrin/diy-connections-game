import PuzzleCreator from "@components/PuzzleCreator"

function Create() {
  return (
    <div>
      <h1 className="font-bold">Create your own puzzle</h1>
      <i>
        I want to play with highlighting so one category is lit at a time, less
        overwhelming.
        <br />
        Maybe if you click on a different category, it moves the highlight
        there.
      </i>
      <PuzzleCreator />
    </div>
  )
}

export default Create
