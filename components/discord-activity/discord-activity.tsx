"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { UseLanyard } from "@/hooks/use-lanyard";
import { DiscordActivityCard } from "@/components/discord-activity/discord-activity-card";
import { Activity } from "@/types";

export const DiscordActivity = () => {
  const { data } = UseLanyard();
  return (
    <>
      {!data ? (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2"></div>
          <Skeleton className="h-24 w-full" />
        </div>
      ) : (
        <>
          {data.data ? (
            <div className="flex flex-grow flex-col gap-2">
              {!data ||
              !data.data ||
              !data.data.activities ||
              data.data.activities.length === 0 ? (
                <Alert className="border-none bg-muted">
                  <AlertDescription>not doing anything.</AlertDescription>
                </Alert>
              ) : (
                <>
                  {data.data.activities.length === 1 &&
                  data.data.activities[0].name === "Custom Status" ? (
                    <>
                      {data?.data?.activities?.map(
                        (activity: Activity) =>
                          activity.name === "Custom Status" && (
                            <p
                              className="text-sm text-muted-foreground"
                              key={activity.state}
                            >
                              {activity.state}
                            </p>
                          )
                      )}
                      <Alert className="border-none bg-muted">
                        <AlertDescription>not doing anything.</AlertDescription>
                      </Alert>
                    </>
                  ) : (
                    <>
                      {data?.data?.activities?.map(
                        (activity: Activity) =>
                          activity.name === "Custom Status" && (
                            <p
                              className="text-sm text-muted-foreground"
                              key={activity.state}
                            >
                              {activity.state}
                            </p>
                          )
                      )}
                      {data?.data?.activities?.map(
                        (activity: Activity, index: number) =>
                          activity.name !== "Custom Status" && (
                            <DiscordActivityCard
                              key={index}
                              activity={activity}
                              data={data}
                            />
                          )
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-28 md:w-[14rem]" />
            </div>
          )}
        </>
      )}
    </>
  );
};
