import { useEffect } from "react";
import { useState } from "react";
import { api } from "../api/api";

function Projects() {
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await api.get("project/get");
        setProjects(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col pt-10">
      <h1 className="text-3xl md:text-5xl font-bold w-full text-center">
        Projects
      </h1>

      <ul>
        {projects &&
          projects.map((project) => (
            <li
              key={project.id}
              className="cursor-pointer"
              onClick={() => window.open(project.link, "_blank")}
            >
              <div className="flex bg-white dark:bg-slate-800 rounded-xl p-5 m-5">
                <div className="flex flex-col gap-2 justify-start flex-grow">
                  <span className="text-left font-bold text-3xl lg:text-4xl">
                    {project.title}
                  </span>
                  <span>{project.description}</span>
                </div>
                <img
                  className="w-0 lg:w-48 lg:h-48 object-cover object-center rounded-xl"
                  src={new URL(`${project.image}`, import.meta.url).href}
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Projects;
