import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import { useContext } from "react";
import { PortfolioContext } from "./context/portfolioContext";
import backtopImg from "./assets/imageBackground.png";
import FooterContent from "./component/FooterContent";

const App = () => {
  const { isOpen, handleHamburgar } = useContext(PortfolioContext);

  return (
    <>
      <Header />
      <Outlet />
      <FooterContent />
    </>
  );
};

export default App;
