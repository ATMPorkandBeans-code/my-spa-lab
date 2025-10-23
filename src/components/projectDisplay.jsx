import { useState, React } from "react";
import ProjectCard from "./projectCard";

function ProjectDisplay({ projects }) {
  const [search, setSearch] = useState("");
  console.log(search);

  const filteredProjects = projects.filter((project) =>
    (project.title.toLowerCase().includes(search.toLowerCase()) || project.description.toLowerCase().includes(search.toLowerCase()) )
  );

  // const displayedProjects = (search ? filteredProjects : projects)

  return (
    <div>
      <h2>Current Projects</h2>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredProjects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}

export default ProjectDisplay;
