import type { Activity, DiscordApiResponse } from "@/types";
import { SiDiscord } from "@icons-pack/react-simple-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ElapsedTime } from "@/components/timer/ElapsedTime";
import { ProgressBar } from "@/components/timer/ProgressBar";

interface DiscordActivityCardProps {
  activity: Activity;
  data: DiscordApiResponse;
}

export const DiscordActivityCard = ({
  activity,
  data,
}: DiscordActivityCardProps) => {
  return (
    <Alert className="flex flex-col items-center gap-3 border-none bg-muted text-center sm:flex-row sm:text-left">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {activity.assets &&
            activity.assets.large_image &&
            activity.assets.large_image.startsWith("spotify:") ? (
              <img
                src={data.data.spotify.album_art_url}
                width={80}
                height={80}
                alt="Activity image"
                className="rounded"
              />
            ) : activity.assets && activity.application_id ? (
              <img
                src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp?size=512`}
                width={80}
                height={80}
                alt="Activity image"
                className="rounded"
              />
            ) : activity.application_id ? (
              <img
                src={`https://dcdn.dstn.to/app-icons/${activity.application_id}.webp?size=512`}
                width={80}
                height={80}
                alt="Activity image"
                className="rounded"
              />
            ) : (
              <div
                className="flex items-center justify-center"
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: "gray",
                  borderRadius: "0.25rem",
                }}
              >
                <SiDiscord className="h-12 w-12" />
              </div>
            )}
          </TooltipTrigger>
          <TooltipContent>
            {activity.assets
              ? activity.assets.large_text || activity.name
              : activity.name}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div>
        <AlertTitle className="line-clamp-1">{activity.name}</AlertTitle>
        <AlertDescription className="line-clamp-1">
          {activity.details || null}
        </AlertDescription>
        <AlertDescription className="line-clamp-1">
          {activity.state || null}
        </AlertDescription>
        <AlertDescription className="flex justify-center sm:block">
          {activity.timestamps &&
          activity.timestamps.start &&
          activity.timestamps.end ? (
            <ProgressBar
              start={activity.timestamps.start}
              end={activity.timestamps.end}
            />
          ) : null}
        </AlertDescription>
        <AlertDescription className="line-clamp-1">
          {activity.timestamps && activity.timestamps.start ? (
            <ElapsedTime unixTimestamp={activity.timestamps.start} />
          ) : null}
        </AlertDescription>
      </div>
    </Alert>
  );
};
