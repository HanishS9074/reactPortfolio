import { IoIosClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Project from "../pages/Project";
// import images from ".././assets/mindPi7.png"
import backtopImg from ".././assets/imageBackground.png";
import { useContext } from "react";
import { PortfolioContext } from "../context/portfolioContext.jsx";
import { ScrollLink } from "react-scroll";

const Menu = () => {
  // const images = "https://plus.unsplash.com/premium_photo-1764691347320-f68c22eba44f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8"

  //menu pr click karne pr pages pr jane k liye

  const { isOpen, handleHamburgar } = useContext(PortfolioContext);

  const closeMenuOnMobile = () => {
    if (window.innerWidth < 1024) {
      // 1024px Tailwind ka 'lg' breakpoint haisav
      handleHamburgar();
    }
  };

  const menu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <button
        onClick={handleHamburgar}
        className={`absolute top-7 left-7 text-xl font=bold lg:hidden z-50`}
      >
        {isOpen ? <IoIosClose /> : <GiHamburgerMenu />}
      </button>
      {/* <h1 className="mb-15 text-center lg:text-left text-xl font-bold">Hanish Kumar</h1> */}
      <nav className=" lg:w-full p-0 lg:p-5 overflow-hidden order-1">
        <ul
          className={`${isOpen ? "absolute top-14 left-4 flex flex-col gap-4 bg-white p-5 shadow-lg rounded-xl z-40" : "hidden"} lg:top-0 left-4 lg:relative lg:flex justify-evenly items-center`}
        >
          {menu.map((menu, idx) => {
            return (
              <li key={idx}>
                <NavLink
                  to={menu.path}
                  end={menu.path === "/"}
                  onClick={closeMenuOnMobile}
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-bold hover:text-orange-400"
                      : ""
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className=" flex justify-center items-center">
          {/* <img src={images} alt="" className="    rounded-xl mt-20 " /> */}
        </div>
      </nav>
    </>
  );
};

export default Menu;
