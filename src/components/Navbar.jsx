import { Link, NavLink } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  // setTimeout(() => {
  //   if (loader) {
  //       return (
  //           <div className='flex justify-center items-center'>
  //               <div className="loading loading-spinner text-error w-[80px]"></div>
  //           </div>
  //       );
  //   }
  // }, 2000);
  
  const handleSignOut = () => {
    logOut()
    .then(alert('done'))
    .catch( error => {
      console.log(error);
    })
  }

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtCraft" className="dark:text-blue-600">
          All Art & craft Items
        </NavLink>
      </li>
      {
        user ? <>
        <li>
        <NavLink to="/addCraft">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to={`/myArtCraft/${user.email}`}>My Art & Craft List</NavLink>
      </li>
        </> : ''
      }
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className={`navbar`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="h-12 flex items-center ">
          <img
            className="w-40"
            src="https://i.postimg.cc/HnZkWRZH/artlogo.png"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <ThemeBtn />
        <div className="avatar gap-3">
          {user ? (
            <>
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL}/>
              </div>
              <a onClick={handleSignOut} className="btn btn-sm  bg-gray-200">
              Log Out
            </a>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-sm bg-gray-200">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
