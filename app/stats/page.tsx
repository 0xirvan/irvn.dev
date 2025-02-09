import DiscordActivity from "@/components/discord-activity/discord-card";
import HeadingText from "@/components/heading-text";
import React from "react";

function Page() {
  return (
    <main>
      <HeadingText>stats</HeadingText>
      <div className="grid gap-6 max-w-full">
        <DiscordActivity />
      </div>
    </main>
  );
}

export default Page;
