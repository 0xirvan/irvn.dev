import { createEnv } from "@t3-oss/env-nextjs";
import {z} from "zod";

export const env = createEnv({
    server: {
        WAKATIME_API_KEY: z.string(),
        GITHUB_API_URL: z.string().url(),
        GITHUB_USERNAME: z.string(),
    },
    client: {
        NEXT_PUBLIC_DISCORD_ID: z.string()
    },
    runtimeEnv: {
        WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
        GITHUB_API_URL: process.env.GITHUB_API_URL,
        GITHUB_USERNAME: process.env.GITHUB_USERNAME,
        NEXT_PUBLIC_DISCORD_ID: process.env.NEXT_PUBLIC_DISCORD_ID
    },
});