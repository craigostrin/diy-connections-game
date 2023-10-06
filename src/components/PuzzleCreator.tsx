import React from "react"

function PuzzleCreator() {
  const categories: React.ReactNode[] = []
  for (let i = 0; i < 4; i++) {
    categories.push(<CategoryCreator key={i} index={i} />)
    if (i < 3) categories.push(<hr className="border-black" />)
  }

  return (
    <>
      <div className="border-2 border-black w-[600px]">{categories}</div>
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
      <label htmlFor={ariaName} />
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
