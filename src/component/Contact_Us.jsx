import { useContext } from "react";
import { PortfolioContext } from "../context/portfolioContext.jsx";

const Contact_Us = () => {
  const { form, sendEmail } = useContext(PortfolioContext);

  return (
    <div className="lg:flex flex-col lg:p-5 justify-center items-center">
      <div className="bg-transparent rounded-xl">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-full lg:flex flex-col shadow-xl rounded-xl border border-solid border-black p-7 text-[#1e3f22]"
        >
          <h1 className="text-4xl p-5">Get in Touch With Us</h1>
          <div className="w-full lg:flex gap-5 text-lg pl-6 mb-5">
            <div className="lg:w-1/2 flex flex-col mb-5">
              <label>First name*</label>
              <input
                type="text"
                name="first_name" // Dashboard ke {{first_name}} se match karega
                required
                className="border-b outline-none"
              />
            </div>
            <div className="lg:w-1/2 flex flex-col">
              <label>Last name*</label>
              <input
                type="text"
                name="last_name" // Dashboard ke {{last_name}} se match karega
                required
                className="border-b outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col text-lg pl-6">
            <label>Email*</label>
            <input
              type="email"
              name="user_email" // Dashboard ke {{user_email}} se match karega
              required
              className="border-b mb-5 outline-none"
            />

            <label>Message</label>
            <textarea
              name="message" // Dashboard ke {{message}} se match karega
              required
              className="border-b w-full resize-none p-2 mb-10 outline-none"
            ></textarea>

            <button type="submit" className="bg-[#1e3f22] text-white p-2 rounded-xl">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact_Us;