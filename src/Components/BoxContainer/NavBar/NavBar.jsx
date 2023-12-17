import { Link } from "react-router-dom";
import light_logo from "../../../assets/logo_light.png"
import BoxContainer from "../BoxContainer"
const NavBar = () => {
          return (
            <div className="shadow-sm md:w-full z-10 shadow-react bg-black border-react border-b-1 fixed">
            <BoxContainer>
            <div className="navbar">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
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
                    className="menu bg-react text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
                  >
                    <li>
                      <a href="#skill">Skill</a>
                    </li>
                    <li>
                      <a href="#experience">Experience</a>
                    </li>
                    <li>
                      <a href="#projects">Projects</a>
                    </li>
                    <li>
                      <a href="#about">About Me</a>
                    </li>
                    <li>
                      <a href="#contact">Contact Me</a>
                    </li>
                  </ul>
                </div>
                <Link className="#">
                  <img
                    className="w-[70%]"
                    src={light_logo}
                    alt="Foysal_Rahman"
                  />
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <a href="#skill">Skill</a>
                  </li>
                  <li>
                    <a href="#experience">Experience</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#about">About Me</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Me</a>
                  </li>
                </ul>
              </div>
              <div className="navbar-end">
                <a
                  href="#contact"
                  className="btn bg-react outline-none border-none"
                >
                  Hire Me
                </a>
              </div>
            </div>
            </BoxContainer></div>
          );
      };
      
      export default NavBar;