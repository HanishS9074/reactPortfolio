import { useContext } from "react";
import { PortfolioContext } from "../context/portfolioContext";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const { isOpen, handleHamburgar } = useContext(PortfolioContext);
  const location = useLocation();

  // if (location.pathname !== "/") return null

  return (
    <>
      <div
        className={`w-full  flex flex-col justify-center items-center lg:items-start p-5 lg:px-25 transition-all duration-500 ease-in-out`}
      >
        {/* <button className={`absolute top-7 left-7 lg:`}
      >submit</button> */}

        <h1 className="mb-15 text-center lg:text-left text-xl font-bold">
          Hanish Kumar
        </h1>

        <div
          className={`pt-10 ${location.pathname !== "/" ? "hidden" : "flex"}  lg:pt-0 flex flex-col gap-3`}
        >
          <h2 className="text-center lg:text-left text-orange-500 font-bold">
            Full Stack Devloper
          </h2>
          <h3>Hello, my name is Hanish Kumar</h3>
          <p className="text-justify">
            I’m from Hanumangarh. I hold an M.Sc. in Computer Science from
            Maharaja Ganga Singh University, Bikaner. With eight years of IT
            experience, I have spent two years working as a Computer Operator
            and six years as a Network Engineer.
          </p>
        </div>

        <div
          className={`flex ${location.pathname !== "/" ? "hidden" : "flex"} gap-10 my-5 `}
        >
          {/* <button
            className={`bg-transparent border-1 border-black border-solid rounded-xl px-4 py-1 hover:bg-[#fdc435]`}
          >
            Project
          </button> */}
          {/* <button
            className={`bg-transparent border-1 border-black border-solid rounded-xl px-4 py-1 hover:bg-[#fdc435]`}
          >
            Linkedin
          </button> */}
          <a
            href="https://www.linkedin.com/in/hanish-kumar-589b953ab"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-1 border-black border-solid rounded-xl px-4 py-1 hover:bg-[#fdc435] inline-block text-center"
          >
            Linkedin
          </a>
        </div>
      </div>
    </>
  );
};

export default Profile;
