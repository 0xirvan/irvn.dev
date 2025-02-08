import { env } from "@/env.mjs";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      {env.GITHUB_USERNAME}
    </div>
  );
}
