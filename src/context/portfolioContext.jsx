import emailjs from "@emailjs/browser";
import { createContext, useRef, useState, useEffect } from "react";

const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef();

  // IDs according to your screenshots
  const serviceID = "service_6gulmfj";
  const templateID = "template_wkwf90w";
  const publicKey = "exipjBUkf5H-jdbUa";

  const handleHamburgar = () => {
    setIsOpen((prev) => !prev);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm use karte waqt variables ka dhyan rakhein
    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.error("FAILED...", error.text);
        alert("Email bhejne mein galti hui: " + error.text);
      },
    );
  };
console.log("new yoo");

  return (
    <PortfolioContext.Provider
      value={{ handleHamburgar, isOpen, form, sendEmail }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
export { PortfolioContext };
