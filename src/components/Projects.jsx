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
    <div>
      <h1 className="flex justify-center m-10 font-bold sm:text-3xl md:text-5xl">
        Projects
      </h1>

      <ul>
        {projects &&
          projects.map((project) => (
            <li>
              <div className="flex items-center bg-white dark:bg-slate-800 rounded-xl p-5 m-5">
                <img
                  src={project.image}
                  className="mr-5 w-60 h-60 object-cover object-center rounded-xl"
                />
                <div className="flex flex-col">
                  <a href={project.link} target="_blank" className="text-xl">
                    {project.title}
                  </a>
                  <div>{project.description}</div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Projects;
