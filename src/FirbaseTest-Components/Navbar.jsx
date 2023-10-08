import { NavLink } from "react-router-dom"

import UseAuth from "./Hooks/UseAuth"

const Navbar = () => {
  const {user , LogOut} = UseAuth();
  // const handleLogout = () => {
  //   LogOut()
  //   .then()
  //   .catch()
  // }

    const navLinks =  <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about-us">About Us</NavLink></li>

    <li><NavLink to='/blogs'>Blogs</NavLink></li>
    {/* <li><NavLink to='/login'>LogIn</NavLink></li> */}
    </>

  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <img className="w-[40%] ml-4" src="https://planmyday.axiomthemes.com/wp-content/uploads/2016/07/logo_black.png"
     alt="event-logo" border="0"/>
 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

      {navLinks}
         
      
    </ul>
  </div>
  {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={LogOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :

                        //     <Link to='/login'>
                        //    <li> <button className="btn btn-sm  btn-ghost">Sign In</button></li></Link>
                        //     <li><NavLink to='/register'>Register</NavLink></li>

                        // </Link>
                        <>
                        <li><NavLink to="/login">Login</NavLink></li>
                        </>


                }

 
  
</div>
    </div>
  )
}

export default Navbar