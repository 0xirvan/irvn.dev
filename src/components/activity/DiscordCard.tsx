import { DiscordActivity } from "@/components/activity/DiscordActivityCard";

function DiscordCard() {
  return (
    <div>
      <h3 className="text-sm mb-2">current activity</h3>
      <DiscordActivity />
    </div>
  );
}

export default DiscordCard;
