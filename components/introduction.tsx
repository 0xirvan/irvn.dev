import React from "react";
import HeadingText from "@/components/heading-text";

function Introduction() {
  return (
    <section className="space-y-12 px-2 md:px-0">
      <div>
        <h1 className="text-xl md:text-2xl mb-4">Sup, i'm Irvan pramana 👋</h1>
        <p>Full-stack developer who loves open-source</p>
      </div>
      <div>
        <HeadingText>About me</HeadingText>
        <p className="leading-relaxed text-justify md:text-left mb-2">
          I enjoy building apps in the JavaScript ecosystem and i like learning
          new technologies. My favorite tech stack for building web apps
          includes Nextjs, React, TypeScript, Bun for the toolkit and Hono for
          the backend.
        </p>
        <p className="leading-relaxed">Currently, learning golang.</p>
      </div>
    </section>
  );
}

export default Introduction;
