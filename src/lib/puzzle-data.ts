const AUTHOR_INPUT_INDEX = 20

type PuzzleData = {
  author?: string
  puzzle: CategoryData[]
}

type CategoryData = {
  description: string
  answers: string[]
}

// Extremely hard-coded
export function formatPuzzleData(formData: FormData): PuzzleData {
  //* Map values to array for easier iterating
  const arr = values2array(formData)

  let data: PuzzleData = {
    author: "anonymous",
    puzzle: [],
  }

  for (let i = 0; i < AUTHOR_INPUT_INDEX; i += 5) {
    const category: CategoryData = {
      description: arr[i],
      answers: [arr[i + 1], arr[i + 2], arr[i + 3], arr[i + 4]],
    }
    data.puzzle.push(category)
  }
  const author = arr[AUTHOR_INPUT_INDEX]
  if (author) data.author = author

  return data
}

function values2array(formData: FormData) {
  const arr = []

  for (const value of formData.values()) {
    if (typeof value !== "string") {
      throw new Error(
        "You got some weird non-string data in that there form somehow."
      )
    }
    arr.push(value)
  }

  return arr
}

// STRING FORMAT //
// const ANSWERS_PER_CATEGORY = 4
// This is fairly hard-coded for the 4x4 format, even with the constants above
// export function formatForUpload(formData: FormData) {
//   let array: string[] = []
//   let index = 0

//   for (let value of formData.values()) {
//     if (typeof value !== "string")
//       throw new Error(
//         "You got some weird non-string data in that there form somehow."
//       )

//     let isDescription = index % (ANSWERS_PER_CATEGORY + 1) === 0
//     let is4thAnswer =
//       index % (ANSWERS_PER_CATEGORY + 1) === ANSWERS_PER_CATEGORY
//     let isAuthor = index === AUTHOR_INPUT_INDEX

//     if (isAuthor) value
//     else if (isDescription) value += ":"
//     else if (is4thAnswer) value += ";"
//     else value += ","
//     array.push(value)

//     index++
//   }

//   return array.join("")
// }
