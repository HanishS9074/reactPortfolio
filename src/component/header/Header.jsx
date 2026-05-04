import Menu from "../Menu";
import Profile from "../Profile";
import backtopImg from "../../assets/imageBackground.png";
import { useContext } from "react";

const Header = () => {

  return (
    <div className="relative flex flex-col lg:flex-row w-full">
      <img
        src={backtopImg}
        alt=""
        className="absolute right-0 top-0  object-contain -z-10"
      />
      <Profile />
      <Menu />
    </div>
  );
};

export default Header;