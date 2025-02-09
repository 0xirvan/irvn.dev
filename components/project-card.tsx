import { GithubRepo } from "@/types";
import React from "react";

interface ProjectCardProps {
  project: GithubRepo;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group">
      <a
        href={project.link}
        className="flex items-start hover:text-neutral-700 dark:hover:text-neutral-200"
        aria-label={project.repo}
      >
        <span className="mr-2">•</span>
        <div>
          <h2 className="font-medium text-lg mb-1">{project.repo}</h2>
          <p className="text-sm text-left">{project.description}</p>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
