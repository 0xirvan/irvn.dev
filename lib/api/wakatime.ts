import wretch from "wretch";
import { env } from "@/env.mjs";

const api = wretch("https://wakatime.com", { cache: "default" })
  .errorType("json")
  .resolve((r) => r.json());

export const getCodingStats = async () => {
  try {
    return await api
      .headers({
        Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString(
          "base64"
        )}`,
      })
      .get("/api/v1/users/current/stats");
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Failed fetching data" };
  }
};

const gf = async () => {
  const data = await fetch("https://wakatime.com/api/v1/users/current/stats", {
    headers: {
      Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString(
        "base64"
      )}`,
    },
  });
  return data;
};

console.log(await gf());
