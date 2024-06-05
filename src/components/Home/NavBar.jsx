import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

export default function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const navLinkstyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "white" : "white",
    };
  };
  const handleLogOut = () => {
    logout()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "LogOut successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
    navigate("/login");
  };
  const navItem = (
    <>
      <li>
        <NavLink style={navLinkstyle} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink style={navLinkstyle} to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink style={navLinkstyle} to="/contact">
          Contact
        </NavLink>
      </li>
      {user && (
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar  z-10 bg-opacity-50 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Jersey Store</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL} />
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="ml-3">
            {user ? (
              <>
                {" "}
                <button
                  onClick={handleLogOut}
                  className="btn bg-[#2563eb] text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn bg-[#2563eb] text-white">
                  Login
                </Link>
                <Link to="/signup" className="btn bg-[#2563eb] ml-2 text-white">
                  SignUp
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
