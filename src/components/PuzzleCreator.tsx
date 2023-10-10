import { formatPuzzleData } from "@/lib/puzzle-data"
import React from "react"

function PuzzleCreator() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form as HTMLFormElement)
    const puzzleData = formatPuzzleData(formData)

    //TODO upload data

    alert(`Good job, ${puzzleData.author}!`)
  }

  const categories: React.ReactNode[] = []
  for (let i = 0; i < 4; i++) {
    categories.push(<CategoryCreator key={i} index={i} />)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-pink-100 rounded-md w-[600px]"
      >
        {categories}
        <div className="flex mt-10 gap-4">
          <input
            aria-label="author name"
            className="text-center"
            name="author"
            type="text"
            placeholder="Author (that's you!)"
          />
          <button
            className="grow bg-pink-300 rounded-md px-4 py-2 border-pink-500 border-2 hover:bg-pink-400 active:bg-pink-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

type CategoryCreatorProps = { index: number }

function CategoryCreator({ index }: CategoryCreatorProps) {
  const items: React.ReactNode[] = []
  for (let i = 0; i < 4; i++) {
    items.push(<InputItem key={i} catIndex={index} index={i} />)
  }

  return (
    <div className="grid grid-cols-4 gap-2 mb-6">
      <InputDescription catIndex={index} />
      {items}
    </div>
  )
}

type InputDescriptionProps = { catIndex: number; defaultValue?: string }

function InputDescription({
  catIndex,
  defaultValue = "",
}: InputDescriptionProps) {
  const ariaName = `category${catIndex}`

  return (
    <input
      aria-label={ariaName}
      name={ariaName}
      className="p-4 text-center rounded-md border-2 col-span-4"
      type="text"
      placeholder="Category description"
      defaultValue={defaultValue}
      required
    />
  )
}

type InputItemProps = {
  catIndex: number
  index: number
  defaultValue?: string
}

function InputItem({ catIndex, index, defaultValue = "" }: InputItemProps) {
  const ariaName = `category${catIndex}-word${index}`

  return (
    <input
      aria-label={ariaName}
      name={ariaName}
      className="text-center p-4 border-2 rounded-md"
      type="text"
      placeholder="Answer"
      defaultValue={defaultValue}
      required
    />
  )
}

export default PuzzleCreator
