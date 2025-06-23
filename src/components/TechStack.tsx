const technologies = [
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Spring Boot", icon: "/icons/spring-boot.svg" },
  { name: "Golang", icon: "/icons/golang.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Redis", icon: "/icons/redis.svg" },
  { name: "Docker", icon: "/icons/docker.svg" },
  { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
];

export function TechStack() {
  return (
    <section className="py-8">
      <h2 className="mb-6 text-2xl font-bold">Tech Stack</h2>

      <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2 p-2 border border-border rounded-lg bg-background/60 shadow-sm hover:border-primary/50 hover:bg-primary/5 transition-colors"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-8 w-8 dark:invert dark:brightness-200 dark:contrast-200"
            />
            <span className="text-xs text-muted-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
