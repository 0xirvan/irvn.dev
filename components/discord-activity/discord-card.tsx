import React from "react";
import { DiscordActivity } from "./discord-activity";

function DiscordCard() {
  return (
    <div>
      <h3 className="text-sm mb-2">current activity</h3>
      <DiscordActivity />
    </div>
  );
}

export default DiscordCard;
