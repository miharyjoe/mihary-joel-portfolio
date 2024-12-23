import ProjectCard from "./components/projectCard";
import { projectList } from "./components/projectList";

export default function Page() {
  return (
    <div className="container font-mono">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3">
        {projectList.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
