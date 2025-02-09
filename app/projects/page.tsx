import HeadingText from "@/components/heading-text";
import ProjectCard from "@/components/project-card";
import { getRepo } from "@/lib/api/github";
import { GithubRepo } from "@/types";
import React from "react";

type RepoData = GithubRepo[] | { error: string };

async function Page() {
  const data = (await getRepo()) as RepoData;
  if ("error" in data) {
    return (
      <main>
        <HeadingText>projects</HeadingText>
        <div className="space-y-6">
          <p className="text-center">oops... something went wrong</p>
        </div>
      </main>
    );
  }
  return (
    <main>
      <HeadingText>projects</HeadingText>
      <div className="space-y-6">
        {data.map((project) => (
          <ProjectCard key={project.repo} project={project} />
        ))}
      </div>
    </main>
  );
}

export default Page;
