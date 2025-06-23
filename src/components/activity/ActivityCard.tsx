import type { Activity, DiscordApiResponse } from "@/types";
import { SiDiscord } from "@icons-pack/react-simple-icons";
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
  const isSpotify = activity.assets?.large_image?.startsWith("spotify:");

  const getActivityColor = () => {
    if (isSpotify) return "from-[#1DB954]/20 to-[#191414]/30";

    // Common gaming platforms with their brand colors
    if (activity.name.includes("League of Legends"))
      return "from-[#C9A052]/20 to-[#1E5296]/30";
    if (activity.name.includes("Valorant"))
      return "from-[#FF4655]/20 to-[#000000]/30";
    if (activity.name.includes("Minecraft"))
      return "from-[#62B47A]/20 to-[#3D6E4A]/30";
    if (activity.name.includes("Fortnite"))
      return "from-[#9D4DFF]/20 to-[#3C1B7A]/30";
    if (activity.name.includes("Steam"))
      return "from-[#1b2838]/20 to-[#66c0f4]/30";
    if (activity.name.includes("Visual Studio Code"))
      return "from-[#007ACC]/20 to-[#2C2C32]/30";
    if (activity.name.includes("YouTube"))
      return "from-[#FF0000]/20 to-[#282828]/30";
    if (activity.name.includes("Netflix"))
      return "from-[#E50914]/20 to-[#000000]/30";

    return "from-[#5865F2]/20 to-[#2C2F33]/30";
  };

  const getImageSrc = () => {
    if (isSpotify) {
      return data.data.spotify.album_art_url;
    } else if (activity.assets && activity.application_id) {
      return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp?size=512`;
    } else if (activity.application_id) {
      return `https://dcdn.dstn.to/app-icons/${activity.application_id}.webp?size=512`;
    }
    return null;
  };

  const imageSrc = getImageSrc();

  return (
    <div
      className={`bg-gradient-to-br ${getActivityColor()} backdrop-blur-sm p-6 rounded-xl border border-muted/50 shadow-sm transition-all duration-300 hover:shadow-md`}
    >
      <div className="flex flex-col sm:flex-row items-center gap-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="relative group">
                {imageSrc ? (
                  <div className="relative">
                    <img
                      src={imageSrc}
                      width={100}
                      height={100}
                      alt={`${activity.name} image`}
                      className="rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                    />
                    {isSpotify && (
                      <div className="absolute -bottom-2 -right-2 bg-[#1DB954] text-white p-1 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.75 14.65c-2.35-1.45-5.3-1.75-8.8-.95-.35.1-.65-.15-.75-.45-.1-.35.15-.65.45-.75 3.8-.85 7.1-.5 9.7 1.1.35.15.4.55.25.85-.2.3-.55.4-.85.2zm1-2.7c-2.7-1.65-6.8-2.15-9.95-1.15-.4.1-.85-.1-.95-.5-.1-.4.1-.85.5-.95 3.65-1.1 8.15-.55 11.25 1.35.3.15.45.65.2 1s-.7.5-1.05.25zM6.3 9.75c-.5.15-1-.15-1.15-.6-.15-.5.15-1 .6-1.15 3.55-1.05 9.4-.85 13.1 1.35.45.25.6.85.35 1.3-.25.35-.85.5-1.3.25C14.7 9 9.35 8.8 6.3 9.75z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center bg-muted rounded-lg shadow-inner w-[100px] h-[100px] group-hover:bg-muted/80 transition-colors duration-300">
                    <SiDiscord className="h-12 w-12 text-[#5865F2]" />
                  </div>
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              {activity.assets
                ? activity.assets.large_text || activity.name
                : activity.name}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex-1 min-w-0">
          <div className="mb-1 flex items-center justify-between">
            <h3 className="text-lg font-bold truncate">{activity.name}</h3>
            <div className="text-xs bg-muted/50 px-2 py-1 rounded-full font-medium">
              {activity.timestamps?.start && (
                <ElapsedTime unixTimestamp={activity.timestamps.start} />
              )}
            </div>
          </div>

          {activity.details && (
            <p className="text-base font-medium truncate mb-1">
              {activity.details}
            </p>
          )}

          {activity.state && (
            <p className="text-sm text-muted-foreground truncate mb-2">
              {activity.state}
            </p>
          )}

          {activity.timestamps &&
            activity.timestamps.start &&
            activity.timestamps.end && (
              <div className="mt-2">
                <ProgressBar
                  start={activity.timestamps.start}
                  end={activity.timestamps.end}
                />
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
