import { useLocation } from "react-router-dom";
import footerImg from "../assets/Vector.png";
const FooterContent = () => {
  const location = useLocation();
  return (
    <div className={`${useLocation === "/" ? "" : ""}`}>
      <img src={footerImg} alt="" />
    </div>
  );
};

export default FooterContent;
