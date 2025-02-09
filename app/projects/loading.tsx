import HeadingText from "@/components/heading-text";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function () {
  return (
    <main>
      <HeadingText>Projects</HeadingText>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="group mb-4">
          <div className="flex items-start">
            <div className="w-full">
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
