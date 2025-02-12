import CodingStats from "@/components/coding-stats";
import DiscordActivity from "@/components/discord-activity/discord-card";
import HeadingText from "@/components/heading-text";
import React from "react";
import { Languages as LanguagesType } from "@/types";
import { env } from "@/env.mjs";

interface ResponseData {
  data: {
    categories: any;
    human_readable_range: string;
    human_readable_total_including_other_language: string;
    languages: LanguagesType[];
  };
  error?: string;
}

export const revalidate = 3600;

async function Page() {
  const res = await fetch("https://wakatime.com/api/v1/users/current/stats", {
    // next: { revalidate: 86400 },
    headers: {
      Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString(
        "base64"
      )}`,
    },
  });
  const data: ResponseData = await res.json();

  const languages: LanguagesType[] = data.data.languages;
  const started = data.data.human_readable_range;
  const totalTime = data.data.categories[0].digital;

  return (
    <main>
      <HeadingText>stats</HeadingText>
      <div className="grid gap-6 max-w-full">
        <DiscordActivity />
        <CodingStats
          languages={languages}
          started={started}
          totalTime={totalTime}
        />
      </div>
    </main>
  );
}

export default Page;
