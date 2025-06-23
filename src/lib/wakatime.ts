import axios from "axios";
import type {
  WakaTimeStats,
  WakaTimeLanguage,
  WakaTimeProject,
  WakaTimeEditor,
  WakaTimeAverage,
} from "@/types/wakatime";

const WAKATIME_API_URL = "https://wakatime.com/api/v1";

export async function fetchWakaTimeStats(): Promise<WakaTimeStats> {
  // Use private environment variable instead of public
  const wakatimeApiKey = import.meta.env.WAKATIME_API_KEY;

  if (!wakatimeApiKey) {
    throw new Error("WakaTime API key is not defined");
  }

  try {
    const response = await axios.get(
      `${WAKATIME_API_URL}/users/current/stats`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(wakatimeApiKey).toString(
            "base64"
          )}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Error fetching WakaTime stats:", error);
    throw error;
  }
}

export async function fetchWakaTimeLanguages(): Promise<WakaTimeLanguage[]> {
  const stats = await fetchWakaTimeStats();
  return stats.languages || [];
}

export async function fetchWakaTimeProjects(): Promise<WakaTimeProject[]> {
  const stats = await fetchWakaTimeStats();
  return stats.projects || [];
}

export async function fetchWakaTimeEditors(): Promise<WakaTimeEditor[]> {
  const stats = await fetchWakaTimeStats();
  return stats.editors || [];
}

export async function fetchWakaTimeDailyAverage(): Promise<WakaTimeAverage> {
  const stats = await fetchWakaTimeStats();
  return {
    dailyAverage: stats.daily_average,
    totalSeconds: stats.total_seconds,
    humanReadableDailyAverage: stats.human_readable_daily_average,
    humanReadableTotal: stats.human_readable_total,
  };
}
