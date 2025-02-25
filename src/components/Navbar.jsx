import { Link, NavLink } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

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
    .then(
      Swal.fire({
        title: 'Success!',
        text: 'Successfully log out',
        icon: 'success',
        confirmButtonText: 'Successfully log out'
    })
    )
    .catch( error => {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${error.message}`,
      });
    })
  }

  const links = (
    <>
      <li>
        <NavLink to="/" className="dark:text-white">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtCraft" className="dark:text-white">
          All craft Items
        </NavLink>
      </li>
      {
        user ? <>
        <li>
        <NavLink to="/addCraft" className="dark:text-white">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to={`/myArtCraft/${user.email}`} className="dark:text-white">My Craft List</NavLink>
      </li>
        </> : ''
      }
      <li>
        <NavLink to="/login" className="dark:text-white">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register" className="dark:text-white">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar dark:bg-[#1f0d31]">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dark:text-white"
          >
            {links}
          </ul>
        </div>
        <a className="h-12 flex items-center">
          <img
            className="w-40"
            src="https://i.postimg.cc/HnZkWRZH/artlogo.png"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <ThemeBtn />
        <div className="avatar gap-3">
          {user ? (
            <>
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} data-tooltip-id="my-tooltip" data-tooltip-content={`${user.displayName}`}/>
                <Tooltip id="my-tooltip" />
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
