import React, { FormEvent } from "react"

function PuzzleCreator() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    console.log("click")
    event.preventDefault()
    alert(event.timeStamp)
  }

  const categories: React.ReactNode[] = []
  for (let i = 0; i < 4; i++) {
    categories.push(<CategoryCreator key={i} index={i} />)
    if (i < 3)
      categories.push(<hr key={"hr" + i} className="border-slate-400" />)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="border-2 border-slate-400 rounded-md w-[600px]"
      >
        {categories}
        <button
          className="w-full mt-4 bg-pink-300 rounded-md px-4 py-2 border-pink-500 border-2 hover:bg-pink-400 active:bg-pink-500"
          type="submit"
        >
          Submit
        </button>
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
    <div className="grid grid-cols-4">
      <InputDescription catIndex={index} />
      {items}
    </div>
  )
}

type InputDescriptionProps = { catIndex: number }

function InputDescription({ catIndex }: InputDescriptionProps) {
  const ariaName = `category${catIndex}`

  return (
    <>
      <label htmlFor={ariaName} />
      <input
        name={ariaName}
        className="text-center p-4 m-2 border-2 rounded-md col-span-4"
        type="text"
        placeholder="Category description"
        required
      />
    </>
  )
}

type InputItemProps = { catIndex: number; index: number }

function InputItem({ catIndex, index }: InputItemProps) {
  const ariaName = `category${catIndex}-word${index}`

  return (
    <>
      <label htmlFor={ariaName} hidden />
      <input
        name={ariaName}
        className="text-center p-4 m-2 border-2 rounded-md"
        type="text"
        placeholder="Answer"
        required
      />
    </>
  )
}

export default PuzzleCreator
