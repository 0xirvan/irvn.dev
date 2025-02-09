import wretch from "wretch";
import { env } from "@/env.mjs";

const apiUrl = env.GITHUB_API_URL;
const ghUsername = env.GITHUB_USERNAME;

const api = wretch(apiUrl, {
  cache: "no-store",
  mode: "cors",
})
  .errorType("json")
  .resolve((r) => r.json());

export const getRepo = async () => {
  try {
    return await api.get(`/?username=${ghUsername}`);
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Failed fetching data" };
  }
};
