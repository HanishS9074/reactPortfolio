import Header from "../component/header/Header";
import Menu from "../component/Menu.jsx";
import Profile from "../component/Profile.jsx";
import Projects from "../component/Projects";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  // menu pr click karne pr alage alage page pr jaane k liye
  return (
    <>
      <Projects />
      <About />
      <Contact />
    </>
  );

  // Same page pr menu pr scroll karne k liye
};

export default Home;
