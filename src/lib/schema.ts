/**
 * JSON-LD Schema Template for Project Pages
 *
 * This file provides an example of JSON-LD schema to be used on project pages
 * to improve search engine visibility and rich results.
 *
 * Replace the values with actual project data when implementing.
 */

interface Project {
  title: string;
  description: string;
  date: string;
  technologies: string[];
  github?: string;
  demoUrl?: string;
  image?: string;
}

export const projectJsonLd = (project: Project) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    dateCreated: project.date,
    programmingLanguage: {
      "@type": "ComputerLanguage",
      name: project.technologies.join(", "),
    },
    codeRepository: project.github,
    url: project.demoUrl,
    author: {
      "@type": "Person",
      name: "Irvan Pramana",
      url: "https://irvanprama.dev",
    },
    image: project.image,
  };
};
