import React from "react";

interface HeadingTextProps {
  children: React.ReactNode;
}

function HeadingText({ children }: HeadingTextProps) {
  return (
    <h1 className="mb-6 text-2xl font-medium tracking-tight">{children}</h1>
  );
}

export default HeadingText;
