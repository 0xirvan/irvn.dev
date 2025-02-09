import React from "react";
import HeadingText from "@/components/heading-text";

function Introduction() {
  return (
    <section className="space-y-12 px-2 md:px-0">
      <div>
        <h1 className="text-xl md:text-2xl mb-4">sup, i'm irvan pramana👋</h1>
        <p>full-stack developer who loves open-source</p>
      </div>
      <div>
        <HeadingText>about me</HeadingText>
        <p className="leading-relaxed text-justify md:text-left mb-2">
          i enjoy building apps in the JavaScript ecosystem and i like learning
          new technologies. My favorite tech stack for building web apps
          includes Nextjs, React, TypeScript, Bun for the toolkit and Hono for
          the backend.
        </p>
        <p className="leading-relaxed">currently, learning golang.</p>
      </div>
    </section>
  );
}

export default Introduction;
