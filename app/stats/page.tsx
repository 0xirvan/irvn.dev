import CodingStats from "@/components/coding-stats";
import DiscordActivity from "@/components/discord-activity/discord-card";
import HeadingText from "@/components/heading-text";
import React from "react";
import { Languages as LanguagesType } from "@/types";
import { getCodingStats } from "@/lib/api/wakatime";

interface ResponseData {
  data: {
    categories: any;
    human_readable_range: string;
    human_readable_total_including_other_language: string;
    languages: LanguagesType[];
  };
  error?: string;
}

export const revalidate = 86400;

async function Page() {
  const data = (await getCodingStats()) as ResponseData;

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
