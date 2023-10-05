import { NavLink, Outlet } from "react-router-dom"

function RootLayout() {
  const navStyle = "rounded px-4 py-2"
  const activeStyle = `bg-blue-500 ${navStyle}`
  const pendingStyle = `bg-slate-200 ${navStyle}`

  return (
    <div className="ml-10">
      <nav className="mb-5">
        <NavLink
          to={"/"}
          end
          className={({ isActive, isPending }) =>
            isActive ? activeStyle : isPending ? pendingStyle : navStyle
          }
        >
          Play
        </NavLink>
        <NavLink
          to={"/create"}
          end
          className={({ isActive, isPending }) =>
            isActive ? activeStyle : isPending ? pendingStyle : navStyle
          }
        >
          Create
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default RootLayout
