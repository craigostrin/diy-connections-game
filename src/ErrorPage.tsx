import { isRouteErrorResponse, useRouteError } from "react-router-dom"

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="py-10 px-32">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p className="mt-5 font-bold text-xl">
        {isRouteErrorResponse(error)
          ? error.status + " " + error.statusText
          : "Dang, you broke it so hard we couldn't even find a normal error message"}
      </p>
    </div>
  )
}

export default ErrorPage
