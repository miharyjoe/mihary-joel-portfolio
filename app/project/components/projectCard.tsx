import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";
import { getLanguageIcon } from "@/components/language-icon";
import { Project } from "../types/projet";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <CardHeader className="space-y-4 pb-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl font-bold tracking-tight">
                {project.title}
              </CardTitle>
              {project.category && (
                <Badge
                  variant="secondary"
                  className="transition-colors hover:bg-secondary/80"
                >
                  {project.category}
                </Badge>
              )}
            </div>
            <Link
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-secondary p-2 transition-all hover:scale-110 hover:bg-secondary/80 hover:shadow-sm"
            >
              <ExternalLink className="h-5 w-5 text-secondary-foreground" />
              <span className="sr-only">Visit {project.title}</span>
            </Link>
          </div>

          <CardDescription className="text-base leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.languages.map((language) => (
              <Badge
                key={language}
                variant="outline"
                className="flex items-center gap-1.5 transition-colors hover:bg-accent"
              >
                {getLanguageIcon(language)}
                {language}
              </Badge>
            ))}
          </div>

          {/* Date if available */}
          {project.date && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {project.date}
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
}
