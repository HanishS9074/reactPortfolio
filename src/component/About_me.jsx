import image from ".././assets/img.png";
const About_me = () => {
  return (
    <div className="flex flex-col gap-5 lg:px-15   justify-center items-center p-5">
      <h1 className="text-xl font-bold">About-me</h1>
      <div className="lg:flex shadow-xl rounded-xl border- border-solid border- border-solid border-black gap-5 lg:p-15 lg:pt-0">
        <div className="hidden lg:w-80 lg:h-75 lg:flex justify-center items-center bg-red-300 border- rounded-full">
          <img
            src={image}
            alt=""
            className="w-40 lg:w-60 object-cover rounded-full"
          />
        </div>
        <div className="lg:w-3/4 flex flex-col p-5">
          <p className="text-justify">
            My Self <span className=" font-bold">Hanish Kumar.</span> I hold an
            <span className=" font-bold">M.Sc. in Computer Science</span> from
            Maharaja Ganga Singh University, Bikaner. With eight years of IT
            experience, I have spent
            <span className=" font-bold">
              two years working as a Computer Operator and six years as a
              Network Engineer.
            </span>
          </p>
          <p className="text-justify">
            As a Computer Operator, I specialized in monitoring and controlling
            computer systems to ensure seamless operations. My day-to-day
            responsibilities included running scheduled jobs, troubleshooting
            errors, performing preventive maintenance, maintaining system logs,
            ensuring equipment functionality, and managing hardware and software
            inventories.
          </p>
          <p className="text-justify">
            As a Network Engineer, I designed, implemented, and maintained
            network infrastructure to ensure reliable and secure communications.{" "}
            <span className="font-bold">
              {" "}
              Key duties included configuring routers, switches,
            </span>{" "}
            firewalls, VPNs, and load balancers; performing system upgrades and
            patching; monitoring network performance; conducting capacity
            planning; providing Level 2/3 support; coordinating with vendors;
            and enforcing change management protocols.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About_me;
