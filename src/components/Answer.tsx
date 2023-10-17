import { useState } from "react"

type AnswerProps = {
  text: string
  canSelect: () => boolean
  onToggle: (isSelected: boolean) => void
}

// is it time to learn useReducer??
function Answer({ text, canSelect, onToggle }: AnswerProps) {
  const [isSelected, setIsSelected] = useState(false)

  function handleClick(_: any) {
    if (isSelected) {
      setIsSelected(false)
      onToggle(false)
      return
    }

    if (!canSelect()) return

    setIsSelected(true)
    onToggle(true)
  }

  return (
    <button
      className={`${
        isSelected
          ? "translate-x-[3px] translate-y-[3px] shadow-none bg-pink-400"
          : "bg-pink-300"
      } ${baseStyle}`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

const baseStyle =
  "active:translate-x-[3px] active:translate-y-[3px] active:shadow-none rounded-md p-2 border-2 border-black font-semibold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"

export default Answer

// credit: Neobrutalism Components for style (https://neobrutalism-components.vercel.app/)
