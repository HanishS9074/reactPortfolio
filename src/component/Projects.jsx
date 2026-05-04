import images from ".././assets/taskmanagementapp.png";
import images1 from ".././assets/foodOrder.png";
import { Fragment } from "react";
const Projects = () => {
  const project = [
    {
      imge: images,
      title: "Task Management App",
      description:
        "Built a responsive Task Management Dashboard using React.js and Tailwind CSS with full CRUD functionality (add, edit, delete, and complete tasks). Implemented Context API, local storage persistence, search, filtering, and theme toggle for an enhanced and user- friendly experience.",
    },
    {
      imge: images1,
      title: "Food Ordering Web Application",
      description:
        "Built a responsive Food Ordering web application using React.js, React Router, and Tailwind CSS with features like food listing, search, and order management. Implemented Context API for state management, localStorage for order history, and nested routing for pages like menu, transaction, history, and payment.",
    },
  ];
  return (
    <div className="flex flex-col gap-5 justify-center items-center />">
      <h1 className="text-xl text-center font-bold">Projects</h1>
      {project.map((proj, indx) => {
        if (indx % 2 !== 0) {
          return (
            <>
              <Fragment key={indx}>
                <h1 className="text-xl text-center font-bold my-2">
                  {proj.title}
                </h1>
                <div
                  className="lg:flex shadow-xl rounded-xl border- border-solid border-black p-5 lg:p-15 lg:pt-0 mb-5"
                  key={indx}
                >
                  <div className="lg:w-1/2 flex flex-col justify-center items-center gap-5 lg:p-5">
                    {/* <h1 className="text-xl font-bold my-2">{proj.title}</h1> */}
                    <p className="text-justify">{proj.description}</p>
                  </div>
                  <div className="lg:w-1/2 flex justify-center items-center group overflow-hidden rounded-xl border border-black/10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2x">
                    <img src={proj.imge} alt="" className="rounded-xl w-100" />
                  </div>
                </div>
              </Fragment>
            </>
          );
        }
        return (
          <>
            <Fragment key={indx}>
              <h1 className="text-xl text-center font-bold my-2">
                {proj.title}
              </h1>
              <div
                className="lg:flex shadow-xl rounded-xl border- border-solid border-black p-5 lg:p-15 lg:pt-0 mb-7"
                key={indx}
              >
                <div className="mt-5 lg:w-1/2 flex justify-center items-center group overflow-hidden rounded-xl border border-black/10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2x">
                  <img src={proj.imge} alt="" className="rounded-xl w-100" />
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center items-center gap-5 lg:p-5">
                  <p className="text-justify ">{proj.description}</p>
                </div>
              </div>
            </Fragment>
          </>
        );
      })}
    </div>
  );
};

export default Projects;
