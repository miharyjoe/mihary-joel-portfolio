import ProjectCard from "./components/projectCard";

export default function Page() {
  const project = {
    title: "AI Chat Application",
    description:
      "An intelligent chat platform leveraging OpenAI's GPT-4 technology. Features include real-time message streaming, code syntax highlighting, and conversation memory.",
    projectUrl: "https://github.com/yourusername/project",
    languages: ["TypeScript", "React", "Node.js", "Python"],
    category: "Full Stack",
    date: "December 2023",
  };

  return (
    <div className="container font-mono">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3">
        <ProjectCard project={project} />
        <ProjectCard project={project} />
        <ProjectCard project={project} />
        <ProjectCard project={project} />
        <ProjectCard project={project} />
      </div>
    </div>
  );
}
