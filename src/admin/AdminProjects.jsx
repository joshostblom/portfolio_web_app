import { useEffect } from "react";
import { useState } from "react";
import useApiPrivate from "../hooks/useApiPrivate";

function AdminProjects() {
  const apiPrivate = useApiPrivate();
  const [projects, setProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    setIsLoading(true);
    try {
      const response = await apiPrivate.get("project/get");
      setProjects(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const saveProject = async (project) => {
    try {
      setIsLoading(true);
      await apiPrivate.post(`project/update/${project.id}`, project);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      fetchProjects();
    }
  };

  const handleProjectChange = (id, newValue, field) => {
    const updatedProjects = projects.map((project) =>
      project.id === id
        ? { ...project, [field]: newValue, needsUpdate: true }
        : project
    );
    setProjects(updatedProjects);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="flex justify-center m-10 font-bold text-5xl">Projects</h1>

      <ul>
        {projects &&
          projects.map((project) => (
            <li key={project.id}>
              <div className="flex items-center bg-slate-200 dark:bg-slate-800 rounded-xl p-5 m-5">
                <img
                  src={new URL(`${project.image}`, import.meta.url).href}
                  className="mr-5 w-60 h-60 object-cover object-center rounded-xl"
                />
                <div className="flex flex-col w-full gap-2">
                  <input
                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none"
                    type="text"
                    value={project.title}
                    onChange={(e) =>
                      handleProjectChange(project.id, e.target.value, "title")
                    }
                  />
                  <input
                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none"
                    type="text"
                    value={project.link}
                    onChange={(e) =>
                      handleProjectChange(project.id, e.target.value, "link")
                    }
                  />
                  <input
                    className="w-full bg-transparent border-b border-gray-500 focus:outline-none"
                    type="text"
                    value={project.image}
                    onChange={(e) =>
                      handleProjectChange(project.id, e.target.value, "image")
                    }
                  />
                  <textarea
                    className="bg-transparent border h-52 border-gray-500 p-2 mt-2 focus:outline-none"
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(
                        project.id,
                        e.target.value,
                        "description"
                      )
                    }
                  />
                  <button
                    className={`rounded-xl p-2 mt-5 ${
                      project.needsUpdate ? "bg-sky-400" : "bg-green-400"
                    }`}
                    onClick={() => saveProject(project)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AdminProjects;
