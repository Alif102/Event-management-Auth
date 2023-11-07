import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { Toaster } from "react-hot-toast"

const Root = () => {
  return (
    <div>
      <Toaster/>
        <Navbar/>
        <Outlet></Outlet>
        
    </div>
  )
}

export default Root