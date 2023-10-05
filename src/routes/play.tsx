type PlayProps = {
  random?: boolean
  id?: number
}

function Play({ random, id }: PlayProps) {
  return (
    <div>
      <p>
        {random
          ? "This page will show a random puzzle that's been created by someone like you!"
          : `This page will show puzzle id ${id}!`}
      </p>
    </div>
  )
}

export default Play
